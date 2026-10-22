"""Read-only raster background inventory and full-edge pixel audit; no browser QA."""
from pathlib import Path
import hashlib
import json
import re
from PIL import Image, ImageStat

ROOT = Path(__file__).resolve().parents[1]
uses = {}


def add(reference, source, detail):
    if not reference or reference.startswith(("data:", "http:", "https:")):
        return
    target = (source.parent / reference.split("?")[0]).resolve()
    if target.suffix.lower() not in (".png", ".jpg", ".jpeg", ".webp"):
        return
    if not target.is_relative_to(ROOT):
        raise ValueError(f"Out-of-project asset: {reference}")
    uses.setdefault(target, set()).add(f"{source.relative_to(ROOT).as_posix()}: {detail}")


for source in [*ROOT.glob("*.css"), *ROOT.glob("pages/*.css")]:
    text = source.read_text(encoding="utf-8")
    for declaration in re.finditer(r"\bbackground(?:-image)?\s*:\s*([^;{}]+)", text):
        for match in re.finditer(r"url\(\s*['\"]?([^)'\"]+)", declaration[1]):
            add(match[1], source, declaration[0])

for source in ROOT.glob("pages/*.js"):
    text = source.read_text(encoding="utf-8")
    asset_root = re.search(r"const assetRoot\s*=\s*['\"]([^'\"]+)", text)
    for match in re.finditer(r"\b(hero|criteriaImage|processImage)\s*:\s*['\"]([^'\"]+)", text):
        value = match[2]
        if not value.startswith(("../", "./")) and asset_root:
            value = asset_root[1] + value
        add(value, source, match[1])


def strip(image, side, index):
    w, h = image.size
    if side == "top":
        return image.crop((0, index, w, index + 1))
    if side == "bottom":
        return image.crop((0, h - index - 1, w, h - index))
    if side == "left":
        return image.crop((index, 0, index + 1, h))
    return image.crop((w - index - 1, 0, w - index, h))


def edge_counts(image, side):
    alpha = image.getchannel("A")
    limit = image.height if side in ("top", "bottom") else image.width
    transparent = nonopaque = 0
    for index in range(limit):
        extrema = strip(alpha, side, index).getextrema()
        if extrema[1] == 0:
            transparent += 1
        if extrema[1] < 255:
            nonopaque += 1
        else:
            break
    solid = 0
    rgb = image.convert("RGB")
    for index in range(min(limit, 64)):
        a = strip(alpha, side, index).getextrema()
        if a[0] != 255:
            break
        row = strip(rgb, side, index)
        stat = ImageStat.Stat(row)
        if max(stat.stddev) < 2 and (max(stat.mean) < 8 or min(stat.mean) > 247):
            solid += 1
        else:
            break
    return {"transparent": transparent, "nonopaque": nonopaque, "solid_black_or_white": solid}


records = []
for asset, locations in sorted(uses.items()):
    with Image.open(asset) as source:
        image = source.convert("RGBA")
    decorative = bool(re.search(r"logo|symbol|icon|flag", asset.name, re.I)) or image.width < 600 or image.height < 250
    edges = {} if decorative else {side: edge_counts(image, side) for side in ("top", "right", "bottom", "left")}
    records.append({
        "asset": asset.relative_to(ROOT).as_posix(),
        "width": image.width, "height": image.height,
        "sha256": hashlib.sha256(asset.read_bytes()).hexdigest(),
        "decorative": decorative, "edges": edges, "uses": sorted(locations),
    })

flagged = [r for r in records if any(any(edge.values()) for edge in r["edges"].values())]
print(json.dumps({"raster_count": len(records), "photo_count": sum(not r["decorative"] for r in records), "flagged": flagged, "records": records}, ensure_ascii=False, indent=2))
