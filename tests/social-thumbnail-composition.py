"""Read-only pixel/geometry checks; not an actual messaging-app preview test."""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
with Image.open(ROOT / "assets/social-share-centered-20261022.png") as image:
    assert image.size == (1730, 909)
    assert image.mode == "RGB", "opaque share image"
    # Bright neutral foreground pixels isolate the white copy and logo from
    # this dark photograph. Geometry alone does not validate Korean spelling.
    points = [(x, y) for y in range(image.height) for x in range(image.width)
              if min(image.getpixel((x, y))) > 220]
    assert points
    left = min(x for x, _ in points)
    right = max(x for x, _ in points)
    top = min(y for _, y in points)
    bottom = max(y for _, y in points)
    center = ((left + right) / 2, (top + bottom) / 2)
    assert abs(center[0] - image.width / 2) < image.width * .02
    assert abs(center[1] - image.height / 2) < image.height * .02
    # Verify safety in common landscape center-crop scenarios. Actual apps
    # control their own framing and caches; these are source geometry checks.
    for ratio in (1.78, 1.9, 1.91, 2.0, 2.04):
        width = min(image.width, image.height * ratio)
        height = min(image.height, image.width / ratio)
        x = (image.width - width) / 2
        y = (image.height - height) / 2
        assert left > x and right < x + width
        assert top > y and bottom < y + height
    print(f"PASS: white copy/logo centered within 2% of canvas; bounds {(left, top, right, bottom)} safe in 5 landscape crop ratios. Not app-preview QA.")
