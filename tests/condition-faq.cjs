// Network-free DOM/source checks, not browser layout or animation-frame QA.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const { pageFiles, rendererFor } = require('../scripts/prerender.cjs');
const { entries, renderFaq } = require('../scripts/condition-faq.cjs');
const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'pages/condition-faq.css'), 'utf8');
let pages = 0, questions = 0;
for (const file of pageFiles()) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const dom = new JSDOM(html), d = dom.window.document;
  try {
    const expected = entries.get(file);
    assert.equal(entries.has(file), !!d.body.dataset.condition, `${file}: every condition page has FAQ data`);
    assert.equal(d.querySelectorAll('.condition-faq').length, expected ? 1 : 0, `${file}: FAQ only on condition pages`);
    assert.equal(d.querySelectorAll('link[href^="condition-faq.css?"]').length, expected ? 1 : 0, `${file}: isolated stylesheet scope`);
    assert.ok(!html.includes('lumbar-faq.css'), 'old stylesheet reference removed');
    if (!expected) { assert.equal(renderFaq(file), ''); continue; }
    pages++;
    const faq = d.querySelector('.condition-faq');
    assert.equal(faq.parentElement.lastElementChild, faq, `${file}: FAQ follows existing content`);
    assert.ok(faq.querySelector('h2').textContent.includes(expected.title));
    assert.equal(faq.querySelectorAll('.section-heading > p').length, 0, 'FAQ heading has no subtitle');
    assert.doesNotMatch(faq.textContent, /검토용 초안|개인의 진단·치료를 대신/);
    assert.doesNotMatch(faq.textContent, /검수|검토자|검수일|대표원장|이상현|참고\s*자료|AAOS/);
    assert.equal(faq.querySelectorAll('a,script').length, 0, 'no source links or extra runtime script');
    assert.equal(faq.querySelectorAll('details').length, 3);
    assert.equal(faq.querySelectorAll('details[open]').length, 1);
    [...faq.querySelectorAll('details')].forEach((item, index) => {
      assert.equal(item.querySelector('summary > span:nth-child(2)').textContent, expected.faqs[index].question);
      assert.equal(item.querySelector('.condition-faq-answer p').textContent, expected.faqs[index].answer);
      questions++;
    });
  } finally { dom.window.close(); }
  if (!entries.has(file)) continue;
  const renderer = rendererFor(html);
  const source = fs.readFileSync(path.resolve(root, path.dirname(file), renderer), 'utf8');
  for (const width of [320, 393, 800, 1440]) {
    for (const reduced of [false, true]) {
      const live = new JSDOM(html, { url: `https://site.invalid/${file}`, runScripts: 'outside-only' });
      try {
        const w = live.window, observers = [];
        w.matchMedia = query => ({ matches: query.includes('reduced-motion') ? reduced : width >= 801, addEventListener() {} });
        w.requestAnimationFrame = () => 0;
        w.IntersectionObserver = class {
          constructor(callback) { this.callback = callback; this.items = new Set(); observers.push(this); }
          observe(item) { this.items.add(item); }
          unobserve(item) { this.items.delete(item); }
        };
        const faq = w.document.querySelector('.condition-faq');
        new vm.Script(source).runInContext(live.getInternalVMContext());
        assert.equal(w.document.querySelector('.condition-faq'), faq, 'runtime preserves static FAQ');
        assert.equal(w.document.querySelectorAll('.condition-faq').length, 1);
        for (const item of faq.querySelectorAll('.reveal')) {
          if (reduced) assert.ok(item.classList.contains('visible'), 'reduced motion reveals content');
          else {
            assert.ok(!item.classList.contains('visible'), 'motion not pre-triggered');
            const observer = observers.find(value => value.items.has(item));
            assert.ok(observer, `${file}: FAQ uses existing scroll observer`);
            observer.callback([{ target: item, isIntersecting: true }], observer);
            assert.ok(item.classList.contains('visible'));
          }
        }
        const first = faq.querySelector('details');
        first.querySelector('summary').click();
        assert.equal(first.open, false);
        first.querySelector('summary').click();
        assert.equal(first.open, true);
        const second = faq.querySelectorAll('details')[1];
        second.querySelector('summary').click();
        assert.equal(second.open, true, 'questions open independently');
      } finally { live.window.close(); }
    }
  }
}
assert.equal(pages, 41);
assert.equal(questions, 123);
const styleDom = new JSDOM('<style>' + css + '</style>');
const visit = rules => {
  for (const rule of rules) {
    if (rule.cssRules) visit(rule.cssRules);
    else assert.ok(rule.selectorText.split(',').every(selector => selector.trim().startsWith('.condition-faq')), `unscoped selector: ${rule.selectorText}`);
  }
};
visit(styleDom.window.document.styleSheets[0].cssRules);
styleDom.window.close();
assert.ok(css.includes('minmax(0, 1fr)') && css.includes('max-width: 800px') && css.includes(':focus-visible'));
console.log('PASS: 41 condition FAQs / 123 exact Q&As; no displayed sources or clinician-review labels; original reveal/reduced motion and native disclosure at 4 simulated widths; scoped responsive CSS. No browser visual QA.');
