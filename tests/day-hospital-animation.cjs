// Network-free DOM tests. Row positions are simulated; this is not visual QA.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'pages/day-hospital.html'), 'utf8');
const source = fs.readFileSync(path.join(root, 'pages/doctors.js'), 'utf8');
const css = fs.readFileSync(path.join(root, 'pages/day-hospital.css'), 'utf8');

function setup(width, reduced = false, supported = true) {
  const dom = new JSDOM(html, { runScripts: 'outside-only', url: 'https://site.invalid/pages/day-hospital.html' });
  const w = dom.window, observers = [];
  w.matchMedia = (query) => ({
    matches: query.includes('reduced-motion') ? reduced : query.includes('min-width') ? width >= 801 : false,
    addEventListener() {},
  });
  w.requestAnimationFrame = () => 0;
  if (supported) w.IntersectionObserver = class {
    constructor(callback) { this.callback = callback; this.observed = new Set(); observers.push(this); }
    observe(item) { this.observed.add(item); }
    unobserve(item) { this.observed.delete(item); }
  };
  const cards = [...w.document.querySelectorAll('.day-candidate')];
  const positions = cards.map((_, index) => Math.floor(index / (width <= 560 ? 1 : width <= 1000 ? 2 : 4)) * 450);
  cards.forEach((card, i) => Object.defineProperty(card, 'offsetTop', { get: () => positions[i] }));
  new vm.Script(source).runInContext(dom.getInternalVMContext());
  return { dom, cards, positions, observer: observers.find((o) => o.observed.has(cards[0])) };
}

// Verify actual CSS cascade for transition delays at each supported layout.
function delays(width) {
  const dom = new JSDOM(html);
  const style = dom.window.document.createElement('style');
  style.textContent = css;
  dom.window.document.head.append(style);
  const cards = [...dom.window.document.querySelectorAll('.day-candidate')];
  const result = cards.map(() => 0);
  function visit(rules) {
    for (const rule of rules) {
      if (rule.media) {
        const max = rule.conditionText.match(/max-width:\s*(\d+)px/);
        if (max && width <= Number(max[1])) visit(rule.cssRules);
      } else if (rule.selectorText && rule.style?.getPropertyValue('transition-delay')) {
        cards.forEach((card, i) => {
          if (card.matches(rule.selectorText)) result[i] = Number.parseFloat(rule.style.getPropertyValue('transition-delay')) * 1000;
        });
      }
    }
  }
  visit(style.sheet.cssRules);
  dom.window.close();
  return result;
}

for (const width of [1440, 1000, 801, 800, 600, 560, 393, 320]) {
  const { dom, cards, observer } = setup(width);
  try {
    observer.callback([{ target: cards[0], isIntersecting: false }], observer);
    assert.ok(cards.every((card) => !card.classList.contains('visible')));
    observer.callback([{ target: cards[0], isIntersecting: true }], observer);
    const columns = width <= 560 ? 1 : width <= 1000 ? 2 : 4;
    cards.forEach((card, i) => assert.equal(card.classList.contains('visible'), i < columns));
    cards.slice(0, columns).forEach((card) => assert.ok(!observer.observed.has(card)));
    if (columns < 4) {
      observer.callback([{ target: cards[columns], isIntersecting: true }], observer);
      assert.ok(cards[columns].classList.contains('visible'));
    }
    const actual = delays(width);
    assert.deepEqual(actual, width <= 800 ? [80, 80, 80, 80] : width <= 1000 ? [80, 200, 80, 200] : [80, 200, 320, 440]);
  } finally { dom.window.close(); }
}

// A breakpoint change must use the new row geometry, not a cached desktop group.
{
  const { dom, cards, positions, observer } = setup(1440);
  try {
    positions.splice(0, 4, 0, 450, 900, 1350);
    observer.callback([{ target: cards[0], isIntersecting: true }], observer);
    assert.ok(cards[0].classList.contains('visible'));
    assert.ok(cards.slice(1).every((card) => !card.classList.contains('visible')));
    const ordinary = dom.window.document.querySelector('.day-benefits-inner');
    observer.callback([{ target: ordinary, isIntersecting: true }], observer);
    assert.ok(ordinary.classList.contains('visible'));
    assert.ok(cards.slice(1).every((card) => !card.classList.contains('visible')));
  } finally { dom.window.close(); }
}

for (const [reduced, supported] of [[true, true], [false, false]]) {
  const { dom, cards } = setup(393, reduced, supported);
  try { assert.ok(cards.every((card) => card.classList.contains('visible'))); }
  finally { dom.window.close(); }
}
console.log('PASS: 8 viewport CSS delay sets, row triggers, resize geometry, reduced-motion/fallback, and unrelated reveal behavior. No browser layout/timing measured.');
