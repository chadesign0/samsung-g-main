// CSSOM/source checks only: no browser geometry or visual stacking is measured.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'mega-menu.css'), 'utf8');
const dom = new JSDOM(`<style>${css}</style>`, { url: 'https://site.invalid/' });
const rules = [...dom.window.document.styleSheets[0].cssRules];
const desktop = rules.find(rule => rule.conditionText === '(min-width: 801px)');
const ruleFor = (list, selector) => [...list].find(rule => rule.selectorText === selector).style;
const header = ruleFor(desktop.cssRules, 'body .site-header');
const quick = ruleFor(rules, '.quick-menu.quick-menu-fixed');
assert.equal(header.getPropertyValue('isolation'), 'isolate');
assert.ok(Number(header.getPropertyValue('z-index')) > Number(quick.getPropertyValue('z-index')),
  'the header stacking context must be above the fixed quick bar');
const columns = ruleFor(desktop.cssRules, '.mega-menu-layout').getPropertyValue('grid-template-columns');
assert.equal(columns, 'max(200px, calc((100% - var(--max, 1240px)) / 2)) minmax(0, 1fr) minmax(330px, 21vw)');
// Check the intended formula for both content widths used by the page styles.
for (const max of [1204, 1240]) {
  for (const width of [1680, 1880, 1920, 2560]) {
    const contentEdge = (width - Math.min(width - 80, max)) / 2;
    assert.equal(Math.max(200, (width - max) / 2), contentEdge);
  }
}
const narrow = rules.find(rule => rule.conditionText === '(min-width: 801px) and (max-width: 1180px)');
assert.equal(ruleFor(narrow.cssRules, '.mega-menu-layout').getPropertyValue('grid-template-columns'), '200px minmax(0, 1fr) 300px');
const mobile = rules.find(rule => rule.conditionText === '(max-width: 800px)' && [...rule.cssRules].some(r => r.selectorText === 'body.menu-open .site-header'));
assert.equal(ruleFor(mobile.cssRules, 'body.menu-open .site-header').getPropertyValue('z-index'), '102');
console.log('PASS: desktop category follows the page container with a laptop minimum; header is above the quick bar; mobile rules retained. Source-only checks.');
dom.window.close();
