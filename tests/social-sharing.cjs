// Static head/source checks only: crawlers must not need to execute JavaScript.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const base = 'https://chadesign0.github.io/samsung-g-main/';
const imagePath = 'assets/social-share-20261022.png';
const image = fs.readFileSync(path.join(root, imagePath));
assert.equal(crypto.createHash('sha256').update(image).digest('hex'), 'b0cd3dc65c63657fffe89dcf3d76d2e3373019e252b2f155473950544a7a2515', 'user-supplied image is unchanged');
assert.equal(image.readUInt32BE(16), 1921);
assert.equal(image.readUInt32BE(20), 789);
const files = ['index.html', ...fs.readdirSync(path.join(root, 'pages')).filter(f => f.endsWith('.html')).map(f => `pages/${f}`)];
for (const file of files) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, file), 'utf8'));
  const d = dom.window.document;
  const meta = (attribute, key) => {
    const nodes = d.head.querySelectorAll(`meta[${attribute}="${key}"]`);
    assert.equal(nodes.length, 1, `${file}: unique ${key} in static head`);
    return nodes[0].content;
  };
  const description = d.head.querySelector('meta[name="description"]').content;
  assert.equal(meta('property', 'og:type'), 'website');
  assert.equal(meta('property', 'og:locale'), 'ko_KR');
  assert.equal(meta('property', 'og:site_name'), '삼성G정형외과');
  assert.equal(meta('property', 'og:title'), d.title);
  assert.equal(meta('property', 'og:description'), description);
  assert.equal(meta('property', 'og:url'), base + (file === 'index.html' ? '' : file));
  assert.equal(meta('property', 'og:image'), base + imagePath);
  assert.equal(meta('property', 'og:image:type'), 'image/png');
  assert.equal(meta('property', 'og:image:width'), '1921');
  assert.equal(meta('property', 'og:image:height'), '789');
  assert.ok(meta('property', 'og:image:alt').includes('삼성G정형외과'));
  assert.equal(meta('name', 'twitter:card'), 'summary_large_image');
  assert.equal(meta('name', 'twitter:title'), d.title);
  assert.equal(meta('name', 'twitter:description'), description);
  assert.equal(meta('name', 'twitter:image'), base + imagePath);
  assert.equal(meta('name', 'twitter:image:alt'), meta('property', 'og:image:alt'));
  if (['pages/terms.html', 'pages/privacy-policy.html'].includes(file)) {
    assert.ok(d.head.querySelector('meta[name="robots"]').content.includes('noindex'), 'draft indexing protection retained');
  }
  dom.window.close();
}
console.log(`PASS: static Open Graph/Twitter metadata on ${files.length} pages; image bytes, dimensions, page-specific titles/descriptions, URLs, and draft robots directives verified. Not a messaging-app preview test.`);
