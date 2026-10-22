// Source CSSOM/contrast checks only, not browser visual QA.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const css = fs.readFileSync(path.resolve(__dirname, '../desktop-all-menu.css'), 'utf8');
const dom = new JSDOM(`<style>${css}</style>`);
const rules = [...dom.window.document.styleSheets[0].cssRules];
const style = selector => rules.find(rule => rule.selectorText === selector).style;
assert.equal(style('.desktop-all-menu').background, '#fff');
assert.equal(style('.desktop-all-menu::backdrop').background, '#fff');
function luminance(hex) {
  const channels = hex.slice(1).match(/../g).map(value => parseInt(value, 16) / 255);
  const linear = channels.map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return linear[0] * .2126 + linear[1] * .7152 + linear[2] * .0722;
}
const selectors = [
  '.desktop-all-menu', '.desktop-all-menu-close', '.desktop-all-menu-category h2',
  '.desktop-all-menu-group h3', '.desktop-all-menu-group a', '.desktop-all-menu-group a:hover',
  '.desktop-all-menu a[aria-disabled="true"]', '.desktop-all-menu-notice',
];
const ratios = selectors.map(selector => {
  const color = style(selector).color;
  assert.match(color, /^#[0-9a-f]{6}$/i);
  const ratio = 1.05 / (luminance(color) + .05);
  assert.ok(ratio >= 4.5, `${selector}: ${ratio.toFixed(2)}:1 on white`);
  return ratio;
});
assert.equal(style('.desktop-all-menu-columns').getPropertyValue('grid-template-columns'), 'repeat(4, minmax(0, 1fr))');
const narrow = rules.find(rule => rule.conditionText === '(min-width: 801px) and (max-width: 1100px)');
assert.equal([...narrow.cssRules].find(rule => rule.selectorText === '.desktop-all-menu-columns').style.getPropertyValue('grid-template-columns'), 'repeat(2, minmax(0, 1fr))');
assert.equal(style('.desktop-all-menu-content').getPropertyValue('overflow-y'), 'auto');
console.log(`PASS: white dialog/backdrop; ${selectors.length} foreground colors have contrast >= ${Math.min(...ratios).toFixed(2)}:1; responsive grid and internal scrolling retained. Source-only checks.`);
dom.window.close();
