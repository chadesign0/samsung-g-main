// Geometry regression test only: no browser, image modification, or network.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const png = fs.readFileSync(path.join(root, 'assets/subpages/lumbar-disc/symptom-lumbar-v2.png'));
// Full-width alpha inspection: rows 1118–1128 transparent; row 1117 partially transparent.
assert.equal(crypto.createHash('sha256').update(png).digest('hex'), '3c8fe84c2e04f60f39a473ff5d3e8987c16dc5a5baf88e9c5a4ca2283e598d9b', 'recheck alpha bounds if image changes');
const imageWidth = png.readUInt32BE(16);
const imageHeight = png.readUInt32BE(20);
const fullyOpaqueHeight = 1117;
const css = fs.readFileSync(path.join(root, 'pages/lumbar-disc.css'), 'utf8');
const layerRule = css.match(/\.symptoms::before\s*\{([^}]+)\}/)[1];
const overscan = Number(layerRule.match(/bottom:\s*-([\d.]+)%/)[1]) / 100;
assert.equal(overscan, 0.02);
for (const width of [320, 375, 393, 560, 800, 1440, 1920]) {
  for (const height of [300, 600, 930, 1400]) {
    const layerHeight = height * (1 + overscan);
    const scale = Math.max(width / imageWidth, layerHeight / imageHeight);
    const imageTop = (layerHeight - imageHeight * scale) / 2;
    const opaqueBottom = imageTop + fullyOpaqueHeight * scale;
    assert.ok(opaqueBottom > height + 0.5, width + 'x' + height + ': alpha edge must lie below the visible section');
  }
}
const pages = ['acute-low-back-pain', 'lumbar-disc', 'lumbar-myofascial-pain', 'lumbar-spinal-stenosis', 'lumbar-spondylolisthesis', 'lumbar-spondylolysis'];
for (const page of pages) {
  const html = fs.readFileSync(path.join(root, 'pages', page + '.html'), 'utf8');
  assert.ok(html.includes('lumbar-disc.css?v=20261022-background-edge-audit'), page + ': refreshed background style');
}
console.log('PASS: source image unchanged; opaque coverage across 28 section sizes; CSS cache references on 6 lumbar pages. Geometry/source checks, not browser visual QA.');
