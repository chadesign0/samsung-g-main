// Network-free DOM regression tests; no browser layout or frame timing is measured.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const { pageFiles, rendererFor, renderMain, compile } = require('../scripts/prerender.cjs');
const root = path.resolve(__dirname, '..');
let checks = 0, managed = 0;
const check = (value, message) => { checks++; assert.ok(value, message); };
const normalize = markup => markup.replace(/\n[ \t]+(?=\n)/g, '\n');
// Compare original client-rendered sections separately from the build-only FAQ.
// FAQ content and its existing runtime reveal hooks have their own regression tests.
const coreMarkup = main => {
  const copy = main.cloneNode(true);
  copy.querySelector('.condition-faq')?.remove();
  return normalize(copy.innerHTML);
};

function setup(file, html, width, reduced, legacy) {
  const dom = new JSDOM(html, { url: `https://site.invalid/${file}`, runScripts: 'outside-only' });
  const w = dom.window, observers = [];
  w.matchMedia = query => ({
    matches: query.includes('reduced-motion') ? reduced : query.includes('min-width') ? width >= 801 : width <= 800,
    addEventListener() {}, removeEventListener() {},
  });
  w.requestAnimationFrame = () => 0;
  w.scrollTo = () => {};
  // Model successful image decoding; no image requests are made.
  w.HTMLImageElement.prototype.decode = async () => {};
  w.IntersectionObserver = class {
    constructor(callback) { this.callback = callback; this.items = new Set(); observers.push(this); }
    observe(item) { this.items.add(item); }
    unobserve(item) { this.items.delete(item); }
    disconnect() { this.items.clear(); }
  };
  // Keep sequential reveals below their trigger until explicitly tested.
  w.HTMLElement.prototype.getBoundingClientRect = () => ({ top: 5000, bottom: 5100 });
  if (legacy) {
    const main = w.document.querySelector('main');
    main.removeAttribute('data-prerendered');
    main.replaceChildren();
  }
  const execute = () => {
    for (const script of w.document.querySelectorAll('script[src]')) {
      const src = script.getAttribute('src').split('?')[0];
      if (src !== rendererFor(html) && src !== 'doctors.js' && src !== 'clinic-tour.js') continue;
      const filename = path.resolve(root, path.dirname(file), src);
      new vm.Script(fs.readFileSync(filename, 'utf8'), { filename }).runInContext(dom.getInternalVMContext());
    }
  };
  return { dom, w, observers, execute };
}

(async () => {
for (const file of pageFiles()) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const raw = new JSDOM(html);
  try {
    const main = raw.window.document.querySelector('main#main');
    check(main?.textContent.trim(), `${file}: text available without running scripts`);
    check(main.querySelectorAll('h1').length === 1, `${file}: static main heading`);
    const renderer = rendererFor(html);
    if (!renderer) continue;
    managed++;
    check(main.dataset.prerendered === 'true', `${file}: generated main marker`);
    check(compile(file, html) === html, `${file}: deterministic up-to-date build`);
    check(main.outerHTML === renderMain(file, html, renderer), `${file}: static markup matches renderer`);
    check(raw.window.document.querySelector('noscript#static-content-fallback style'), `${file}: readable no-script fallback`);
    for (const item of main.querySelectorAll('.reveal')) {
      check(raw.window.getComputedStyle(item).opacity === '1', `${file}: reveal is visible with scripting disabled`);
    }
    for (const [width, reduced] of [[393, false], [1440, false], [393, true]]) {
      const current = setup(file, html, width, reduced, false);
      const legacy = setup(file, html, width, reduced, true);
      try {
        const node = current.w.document.querySelector('main').firstElementChild;
        current.execute();
        legacy.execute();
        const currentMain = current.w.document.querySelector('main');
        check(currentMain.firstElementChild === node, `${file}/${width}/${reduced}: initialization preserves existing DOM`);
        check(coreMarkup(currentMain) === coreMarkup(legacy.w.document.querySelector('main')), `${file}/${width}/${reduced}: same original markup, image paths and initial motion state as client rendering`);
        if (!reduced) {
          for (const item of currentMain.querySelectorAll('.reveal:not(.reveal-sequence)')) {
            check(current.observers.some(observer => observer.items.has(item)), `${file}/${width}: existing scroll reveal attached`);
          }
          for (const observer of current.observers) {
            const target = [...observer.items][0];
            if (!target) continue;
            observer.callback([{ target, isIntersecting: true }], observer);
            check(target.classList.contains('visible'), `${file}/${width}: scroll reveal still activates`);
          }
        } else {
          check(!currentMain.querySelector('.reveal:not(.visible)'), `${file}: reduced motion exposes all content`);
        }
        if (file === 'pages/cervical-disc.html') {
          const card = currentMain.querySelector('.cause-card');
          card.click();
          check(card.classList.contains('is-expanded'), 'neck card click still expands');
          card.dispatchEvent(new current.w.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
          check(!card.classList.contains('is-expanded'), 'neck card keyboard still collapses');
        }
        if (file === 'pages/clinic-tour.html') {
          const thumb = currentMain.querySelectorAll('.tour-thumb')[1];
          thumb.click();
          await new Promise(resolve => setImmediate(resolve));
          check(thumb.getAttribute('aria-current') === 'true', 'tour gallery still changes selection');
          check(currentMain.querySelector('#tour-title').textContent === thumb.dataset.title, 'tour caption still follows selection');
        }
      } finally {
        current.dom.window.close();
        legacy.dom.window.close();
      }
    }
  } finally {
    raw.window.close();
  }
}
assert.equal(managed, 61);
console.log(`PASS: 74 static bodies, ${managed} generated bodies, ${checks} assertions; desktop/mobile/reduced-motion DOM parity and reveal/card/gallery initialization. Not browser visual QA.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
