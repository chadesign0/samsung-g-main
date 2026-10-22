// Network-free geometry/state tests. Animation and native dialog APIs are
// modeled; no real browser frames, compositor, or elapsed timing are measured.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'mega-menu.js'), 'utf8');
function setup({ width = 1440, height = 900, left = 1300, top = 24, reduced = false, supported = true } = {}) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, 'index.html'), 'utf8'), { url: 'https://site.invalid/index.html', runScripts: 'outside-only', pretendToBeVisual: true });
  const w = dom.window, d = w.document, media = [], motions = [];
  let desktop = true;
  w.innerWidth = width; w.innerHeight = height;
  w.matchMedia = query => {
    const listeners = [];
    const value = { get matches() { return query.includes('reduced-motion') ? reduced : desktop; }, addEventListener(type, fn) { if (type === 'change') listeners.push(fn); } };
    media.push({ query, value, listeners });
    return value;
  };
  const change = (type, next) => {
    if (type === 'reduced') reduced = next;
    else desktop = next;
    media.filter(m => m.query.includes('reduced-motion') === (type === 'reduced')).forEach(m => m.listeners.forEach(fn => fn({ matches: m.value.matches })));
  };
  w.HTMLDialogElement.prototype.showModal = function () { this.open = true; };
  w.HTMLDialogElement.prototype.close = function () { this.open = false; this.dispatchEvent(new w.Event('close')); };
  if (supported) w.HTMLElement.prototype.animate = function (frames, options) {
    const motion = { frames, options, sample: frames[0].clipPath, cancelled: false, onfinish: null,
      cancel() { this.cancelled = true; }, finish() { if (!this.cancelled) this.onfinish?.(); } };
    motions.push(motion);
    return motion;
  };
  w.getComputedStyle = element => ({ clipPath: motions.findLast(m => !m.cancelled)?.sample || element.style.clipPath || 'none' });
  const trigger = d.querySelector('.menu-toggle');
  trigger.getBoundingClientRect = () => ({ left, top, width: 40, height: 40 });
  new vm.Script(source).runInContext(dom.getInternalVMContext());
  const menu = d.querySelector('.desktop-all-menu');
  const click = element => { const event = new w.MouseEvent('click', { bubbles: true, cancelable: true }); element.dispatchEvent(event); return event; };
  return { dom, w, d, trigger, menu, motions, click, close: menu.querySelector('button'), change, last: () => motions.at(-1) };
}
function circle(value) {
  const m = value.match(/^circle\(([\d.]+)px at ([\d.]+)px ([\d.]+)px\)$/);
  assert.ok(m, value);
  return m.slice(1).map(Number);
}
for (const [width, height, left, top] of [[1440, 900, 1300, 24], [1920, 1080, 1740, 24], [1024, 768, 920, 20], [900, 600, 800, 12], [2560, 1440, 2300, 32], [1440, 900, 1500, -30]]) {
  const s = setup({ width, height, left, top });
  try {
    s.click(s.trigger);
    assert.ok(s.menu.open && s.d.body.classList.contains('all-menu-open'));
    const motion = s.last();
    const [zero, x, y] = circle(motion.frames[0].clipPath);
    assert.equal(zero, 0);
    assert.equal(x, Math.min(width, Math.max(0, left + 20)));
    assert.equal(y, Math.min(height, Math.max(0, top + 20)));
    const [radius] = circle(motion.frames[1].clipPath);
    for (const [cx, cy] of [[0, 0], [width, 0], [0, height], [width, height]]) assert.ok(radius > Math.hypot(cx - x, cy - y));
    assert.equal(motion.options.duration, 520);
    motion.finish();
    assert.equal(s.menu.style.clipPath, 'none', 'no clipping after opening, including later viewport growth');
    s.click(s.close);
    const closing = s.last();
    assert.equal(closing.options.duration, 320);
    assert.equal(circle(closing.frames[1].clipPath)[0], 0);
    assert.ok(s.menu.open && s.d.body.classList.contains('all-menu-open'), 'modal remains active during close animation');
    const count = s.motions.length;
    s.click(s.close);
    assert.equal(s.motions.length, count, 'duplicate close does not restart animation');
    closing.finish();
    assert.ok(!s.menu.open && !s.d.body.classList.contains('all-menu-open'));
    assert.equal(s.d.activeElement, s.trigger);
  } finally { s.dom.window.close(); }
}
const s = setup();
try {
  s.click(s.trigger);
  const opening = s.last(), staleOpening = opening.onfinish;
  opening.sample = 'circle(240px at 1320px 44px)';
  s.click(s.close);
  const closing = s.last(), staleClosing = closing.onfinish;
  assert.equal(closing.frames[0].clipPath, opening.sample, 'interrupted open closes from current rendered clip');
  assert.ok(opening.cancelled);
  staleOpening();
  assert.ok(s.menu.open);
  closing.sample = 'circle(120px at 1320px 44px)';
  s.click(s.trigger);
  const reopening = s.last();
  assert.equal(reopening.frames[0].clipPath, closing.sample);
  assert.ok(closing.cancelled);
  staleClosing();
  assert.ok(s.menu.open, 'stale close cannot dismiss a reopened menu');
  reopening.finish();
  s.menu.dispatchEvent(new s.w.Event('cancel', { cancelable: true }));
  assert.ok(s.menu.open, 'native cancel waits for collapse animation');
  s.change('reduced', true);
  assert.ok(!s.menu.open && s.last().cancelled, 'enabling reduced motion completes pending close immediately');
  s.change('reduced', false);
  s.click(s.trigger);
  s.change('desktop', false);
  assert.ok(!s.menu.open && s.last().cancelled && !s.d.body.classList.contains('all-menu-open'), 'resize cancels animation and releases modal immediately');
  s.change('desktop', true);
  s.click(s.trigger);
  s.change('reduced', true);
  assert.ok(s.menu.open && s.menu.style.clipPath === 'none' && s.last().cancelled, 'reduced motion during open reveals full menu immediately');
  s.change('reduced', false);
  s.click(s.close); s.last().finish();
  s.click(s.trigger);
  s.d.addEventListener('click', event => event.preventDefault(), { once: true });
  s.click(s.menu.querySelector('a:not([data-placeholder])'));
  assert.ok(!s.menu.open && s.last().cancelled, 'real navigation cancels motion and closes without waiting');
  s.click(s.trigger);
  s.menu.close();
  assert.ok(s.last().cancelled && !s.d.body.classList.contains('all-menu-open'), 'external close cleans up motion');
} finally { s.dom.window.close(); }
for (const options of [{ reduced: true }, { supported: false }]) {
  const s = setup(options);
  try {
    s.click(s.trigger);
    assert.ok(s.menu.open && s.motions.length === 0 && s.menu.style.clipPath === 'none');
    s.click(s.close);
    assert.ok(!s.menu.open && !s.d.body.classList.contains('all-menu-open'));
  } finally { s.dom.window.close(); }
}
console.log('PASS: 6 button-origin/corner-coverage geometries; opening/closing lifecycle, interruption/reversal, duplicate close, stale callbacks, resize, navigation, reduced motion and API fallback. Simulated APIs, not browser-frame QA.');
