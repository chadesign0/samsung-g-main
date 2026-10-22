"""Source/pixel/cover-geometry regression checks, not browser visual QA."""
from pathlib import Path
import re
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
VERSION = "20261022-background-edge-audit"


def rule(file, selector):
    css = (ROOT / file).read_text(encoding="utf-8")
    return re.search(re.escape(selector) + r"\s*\{([^}]+)\}", css)[1]


# Image bounds are measured in source pixels. Insets are relative to the section.
cases = [
    ("assets/main-care-system-treatment-bg.png", (20, 20, 20, 20), (.03, .03, .03, .03)),
    ("assets/subpages/hip/hero-bursitis.png", (1, 0, 0, 0), (.002, .002, .002, .002)),
    ("assets/subpages/knee/symptom-knee.png", (0, 3, 0, 0), (0, .01, 0, 0)),
    ("assets/subpages/lumbar-disc/symptom-lumbar-v2.png", (0, 0, 0, 12), (0, 0, 0, .02)),
]
lumbar_heroes = (
    "hero-acute-low-back-pain.png", "hero-lumbar-disc-v2.png",
    "hero-lumbar-myofascial.png", "hero-lumbar-spondylolisthesis.png",
    "hero-lumbar-spondylolysis.png", "hero-lumbar-stenosis.png",
)
cases.extend((f"assets/subpages/lumbar-disc/{name}", (0, 0, 0, 1), (0, 0, 0, .005)) for name in lumbar_heroes)

assert "inset: -3%" in rule("styles.css", ".care-system::before")
assert "inset: 0 0 -.5%" in rule("pages/lumbar-disc.css", ".disease-hero::before")
assert "bottom: -2%" in rule("pages/lumbar-disc.css", ".symptoms::before")
assert "inset: -1% 0 0" in rule("pages/knee-condition.css", ".knee-symptoms::before")
assert re.search(r"\.knee-symptoms::before\s*\{\s*background-position:\s*58% center;", (ROOT / "pages/knee-condition.css").read_text(encoding="utf-8"))
assert "inset: -.2%" in rule("pages/hip-condition.css", 'body[data-condition="bursitis"] .disease-hero::before')

checks = 0
for filename, trim, inset in cases:
    with Image.open(ROOT / filename) as source:
        iw, ih = source.size
        l, t, r, b = trim
        alpha = source.convert("RGBA").getchannel("A")
        assert alpha.crop((l, t, iw - r, ih - b)).getextrema() == (255, 255), filename
    for width in (320, 375, 393, 560, 800, 1440, 1920, 3840):
        for height in (300, 600, 930, 1400):
            il, it, ir, ib = inset
            lw, lh = width * (1 + il + ir), height * (1 + it + ib)
            scale = max(lw / iw, lh / ih)
            # Horizontal position has no effect on top/bottom trims, but test
            # the knee's mobile 58% crop as well as the default centered crop.
            position_x = .58 if "/knee/" in filename and width <= 800 else .5
            x = -width * il + (lw - iw * scale) * position_x
            y = -height * it + (lh - ih * scale) / 2
            assert x + l * scale <= (-.05 if l else 1e-8), (filename, width, height, "left")
            assert y + t * scale <= (-.05 if t else 1e-8), (filename, width, height, "top")
            assert x + (iw - r) * scale >= width - 1e-8, (filename, width, height, "right")
            assert y + (ih - b) * scale >= height - 1e-8, (filename, width, height, "bottom")
            checks += 1

affected = []
for file in [ROOT / "index.html", *ROOT.glob("pages/*.html")]:
    html = file.read_text(encoding="utf-8")
    target = None
    if file.name == "index.html":
        target = "styles.css"
    elif "lumbar-disc.css?" in html:
        target = "lumbar-disc.css"
    elif "knee-condition.css?" in html:
        target = "knee-condition.css"
    elif file.name == "hip-bursitis.html":
        target = "hip-condition.css"
    if target:
        assert f'{target}?v={VERSION}' in html, file.name
        affected.append(file.name)
assert len(affected) == 15, affected
print(f"PASS: opaque source bounds and cover geometry for {len(cases)} backgrounds at {checks} section sizes; refreshed CSS on {len(affected)} pages. Not browser visual QA.")
