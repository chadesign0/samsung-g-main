// CSS import/source checks only. No actual browser layout is measured.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const cache = new Map();
function readCss(file) {
  if (cache.has(file)) return cache.get(file);
  const source = fs.readFileSync(file, 'utf8');
  const expanded = source.replace(/@import\s+url\(["']?([^"')]+)["']?\);/g, (_, href) =>
    readCss(path.resolve(path.dirname(file), href.split('?')[0])));
  cache.set(file, expanded);
  return expanded;
}
const pages = fs.readdirSync(path.join(root, 'pages')).filter(file => file.endsWith('.html'));
for (const page of pages) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, 'pages', page), 'utf8'));
  const sheets = [...dom.window.document.querySelectorAll('link[rel="stylesheet"]')]
    .map(link => link.getAttribute('href')).filter(href => !/^https?:/.test(href));
  const css = sheets.map(href => readCss(path.resolve(root, 'pages', href.split('?')[0]))).join('\n');
  const definitions = [...css.matchAll(/--max:\s*([^;]+);/g)].map(match => match[1]);
  assert.ok(definitions.length, page + ': a shared content maximum must be defined');
  assert.ok(definitions.every(value => value === '1200px'), page + ': all imported content maxima must be 1200px');
  assert.doesNotMatch(css, /(?:^|[;{])\s*width\s*:[^;{}]*(?:1204|1220|1240)px/m, page + ': no old explicit content widths');
  dom.window.close();
}
const targets = [
  ['hospital-info.css', '.hospital-page-title'],
  ['notice.css', '.notice-board-inner'],
  ['hand-condition.css', '.cause-list'],
  ['hip-condition.css', '.hip-cause-list'],
  ['knee-condition.css', '.knee-cause-list'],
  ['same-day-procedure.css', '.procedure-tabs'],
  ['same-day-surgery.css', '.surgery-tabs'],
];
for (const [file, selector] of targets) {
  const css = fs.readFileSync(path.join(root, 'pages', file), 'utf8');
  const rule = css.slice(css.indexOf(selector + ' {')).split('}')[0];
  assert.match(rule, /width: min\([^;]*1200px\)/, file + ': explicit content width');
}
const mainCss = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
assert.match(mainCss, /--max: 1240px;/, 'main page content maximum remains unchanged');
for (const file of ['doctors.css', 'neck-condition.css', 'shoulder-condition.css', 'frozen-shoulder.css', 'knee-osteoarthritis.css']) {
  const css = fs.readFileSync(path.join(root, 'pages', file), 'utf8');
  assert.match(css, /width: min\(calc\(100% - 80px\),\s*var\(--max\)\)/, file + ': desktop gutter retained');
  assert.match(css, /width: min\(calc\(100% - 40px\),\s*var\(--max\)\)/, file + ': mobile gutter retained');
}
console.log('PASS: ' + pages.length + ' subpages inherit a 1200px container; explicit content widths aligned; main-page maximum and responsive gutters retained. Source-only checks.');
