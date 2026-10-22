// Source/DOM tests only: no browser, external resources, or network requests.
// Run with Node.js and jsdom available through NODE_PATH or local dependencies.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { JSDOM } = require('jsdom');
const root = path.resolve(__dirname, '..');
const files = ['index.html', ...fs.readdirSync(path.join(root, 'pages')).filter((f) => f.endsWith('.html')).map((f) => `pages/${f}`)];
const issues = [];
let checks = 0;
function check(value, label) { checks++; assert.ok(value, label); }

async function load(file, mobile = false) {
  const dom = new JSDOM(fs.readFileSync(path.join(root, file), 'utf8'), {
    url: `https://site.invalid/${file}`, runScripts: 'outside-only', pretendToBeVisual: true,
  });
  const w = dom.window;
  w.matchMedia = (query) => ({
    media: query, matches: query.includes('reduced-motion') || (/max-width/.test(query) ? mobile : /min-width/.test(query) ? !mobile : false),
    addEventListener() {}, removeEventListener() {},
  });
  w.scrollTo = () => {};
  w.HTMLElement.prototype.scrollIntoView = () => {};
  // Visibility for keyboard tests is derived from DOM state, not pixel layout.
  w.HTMLElement.prototype.getClientRects = function () { return this.closest('[hidden]') ? [] : [{}]; };
  w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
  w.fetch = async (url) => {
    const local = path.resolve(path.dirname(path.join(root, file)), String(url).split('?')[0]);
    if (!local.startsWith(root + path.sep)) throw new Error(`Nonlocal test fetch: ${url}`);
    return { ok: true, json: async () => JSON.parse(fs.readFileSync(local, 'utf8')) };
  };
  w.addEventListener('error', (event) => { issues.push(`${file}: ${event.error?.stack || event.message}`); event.preventDefault(); });
  for (const script of w.document.querySelectorAll('script[src]')) {
    const src = script.getAttribute('src').split('?')[0];
    if (/^https?:/.test(src)) continue;
    const source = path.resolve(path.dirname(path.join(root, file)), src);
    Object.defineProperty(w.document, 'currentScript', { configurable: true, value: script });
    new vm.Script(fs.readFileSync(source, 'utf8'), { filename: source }).runInContext(dom.getInternalVMContext());
  }
  await new Promise((resolve) => w.setTimeout(resolve, 40));
  return dom;
}

function click(w, element) {
  const event = new w.MouseEvent('click', { bubbles: true, cancelable: true });
  element.dispatchEvent(event);
  return event;
}

(async () => {
  let localLinks = 0;
  for (const file of files) {
    const dom = await load(file);
    try {
      const d = dom.window.document;
      if (file === 'pages/acute-low-back-pain.html') {
        const title = d.querySelector('#symptoms-title');
        check(title.innerHTML === '움직일 때 찌르는 통증,<br>뻣뻣해지는 허리', 'acute back pain symptom title is shortened to two lines');
      }
      check(d.querySelectorAll('.shared-clinic-guide').length === 1, `${file}: one clinic guide`);
      check(d.querySelectorAll('.shared-clinic-guide .care-contact').length === (file === 'pages/directions.html' ? 0 : 1), `${file}: duplicate contact section omitted only on directions`);
      check(d.querySelectorAll('.shared-clinic-guide .care-hospital-banner').length === 1, `${file}: hospital introduction banner retained`);
      check(d.querySelectorAll('.main-clinic-guide').length === (file === 'index.html' ? 1 : 0), `${file}: main guide scope`);
      check(d.querySelector('.mega-menu').inert, `${file}: closed desktop menu must be inert`);
      check(d.querySelector('.mobile-menu-drawer').inert, `${file}: closed mobile menu must be inert`);
      const accountMenu = d.querySelector('.mobile-menu-account');
      const guestLinks = [...accountMenu.querySelectorAll(':scope > a')];
      check(guestLinks.map(link => link.textContent.trim()).join('|') === '로그인|회원가입', `${file}: sidebar shows guest account labels`);
      check(!/내 정보|관리자|로그아웃/.test(accountMenu.textContent), `${file}: sidebar does not imply an authenticated session`);
      for (const link of guestLinks) {
        check(link.getAttribute('href') === '#' && link.getAttribute('aria-disabled') === 'true' && link.dataset.unavailableMessage.includes(link.textContent.trim()), `${file}: guest account destination explicitly unavailable`);
      }
      check(d.querySelector('script[src*="mega-menu.js"]').getAttribute('src').includes('v=20261022-guest-account-menu'), `${file}: refreshed guest menu script reference`);
      for (const link of d.querySelectorAll('.utility-actions > a')) {
        check(link.dataset.unavailableMessage && link.getAttribute('href') === '#', `${file}: unfinished link explicitly marked`);
      }
      for (const policy of ['terms.html', 'privacy-policy.html']) {
        const link = d.querySelector(`.footer-wide-nav a[href$="${policy}"]`);
        check(link && !link.dataset.unavailableMessage && !link.hasAttribute('aria-disabled'), `${file}: working policy link ${policy}`);
      }
      const certificateLink = d.querySelector('.footer-wide-nav a[href$="certificate-issuance.html"]');
      check(certificateLink?.textContent === '증명서발급', `${file}: footer certificate label`);
      check(certificateLink.getAttribute('href') === (file === 'index.html' ? 'pages/certificate-issuance.html' : 'certificate-issuance.html'), `${file}: footer certificate path`);
      check(!certificateLink.dataset.unavailableMessage && !certificateLink.hasAttribute('aria-disabled'), `${file}: certificate link is enabled`);
      check(!d.querySelector('.site-footer').textContent.includes('권리장전'), `${file}: old rights charter footer item removed`);
      for (const element of d.querySelectorAll('[href], [src]')) {
        const ref = element.getAttribute('href') || element.getAttribute('src');
        if (!ref || /^(#|[a-z]+:|\/\/)/i.test(ref)) continue;
        const target = path.resolve(path.dirname(path.join(root, file)), decodeURIComponent(ref.split(/[?#]/)[0]));
        check(fs.existsSync(target), `${file}: missing ${ref}`);
        localLinks++;
      }
    } finally { dom.window.close(); }
  }

  const main = await load('index.html');
  try {
    const w = main.window, d = w.document;
    const rawMain = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    check(!rawMain.includes('대표 : 이상철') && !rawMain.includes('핸드폰 :'), 'static footer matches current hospital information');
    const guide = d.querySelector('.main-clinic-guide');
    check(!d.querySelector('.direction-cards'), 'old main contact cards removed');
    check(d.querySelectorAll('iframe[title="삼성G정형외과 위치 지도"]').length === 1, 'main map is not duplicated');
    check(d.querySelector('#location').nextElementSibling === guide, 'main guide follows existing location section');
    check(guide.querySelector('.care-hospital-link').getAttribute('href') === 'pages/doctors.html', 'main hospital introduction link');
    check(guide.querySelector('.care-contact-tile').tagName === 'DIV', 'main inquiry tile is not a link');
    check(guide.querySelector('.care-contact-phone').getAttribute('href') === 'tel:031-452-3000', 'main clinic telephone retained');
    check(d.querySelectorAll('#clinic-hours').length === 1, 'main clinic hours anchor retained once');
    check([...guide.querySelectorAll('dd')].map((item) => item.textContent).join('|') === '오전 08:30 - 오후 07:00|오전 08:30 - 오후 01:00|오후 01:00 - 오후 02:00|오전 08:30 - 오후 02:00', 'main clinic hours retained');
    check(!d.querySelector('meta[name="description"]').content.includes('시안'), 'production search description');
    for (const control of [d.querySelector('.utility-actions > a'), d.querySelector('.language')]) {
      check(click(w, control).defaultPrevented, 'unfinished controls must not navigate');
      await new Promise((resolve) => w.setTimeout(resolve, 40));
      check(d.querySelector('[role="status"].availability-notice').textContent.length > 0, 'visible status feedback');
    }
    click(w, d.querySelector('[data-care="surgery"]'));
    const detail = d.querySelector('.care-panel-copy a');
    check(detail.getAttribute('href') === '#', 'infusion must not point to one-stop care');
    check(click(w, detail).defaultPrevented, 'infusion missing destination blocked');
    click(w, d.querySelector('[data-care="one-stop"]'));
    check(!detail.dataset.unavailableMessage && !detail.hasAttribute('aria-disabled'), 'working care links restored after switching tabs');
    const nav = d.querySelector('.mega-nav-link');
    nav.focus();
    check(!d.querySelector('.mega-menu').inert, 'desktop menu opens for keyboard');
    d.querySelector('.mega-menu-content a').focus();
    d.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    check(d.querySelector('.mega-menu').inert && d.activeElement === nav, 'Escape closes desktop menu and returns focus');
  } finally { main.window.close(); }

  const mobile = await load('pages/cervical-disc.html', true);
  try {
    const w = mobile.window, d = w.document;
    const toggle = d.querySelector('.menu-toggle');
    click(w, toggle);
    await new Promise((resolve) => w.setTimeout(resolve, 0));
    const drawer = d.querySelector('.mobile-menu-drawer');
    check(!drawer.inert && d.activeElement === drawer, 'mobile menu opens with focus');
    for (const link of drawer.querySelectorAll('.mobile-menu-account > a')) {
      const hash = w.location.hash;
      check(click(w, link).defaultPrevented, 'guest account controls do not navigate');
      await new Promise((resolve) => w.setTimeout(resolve, 40));
      check(d.querySelector('.availability-notice').textContent.includes(link.textContent.trim() + ' 기능은 준비 중입니다.'), 'guest account controls explain feature availability');
      check(w.location.hash === hash && d.body.classList.contains('menu-open'), 'guest account notice leaves current page and drawer intact');
    }
    toggle.focus();
    const backwards = new w.KeyboardEvent('keydown', { key: 'Tab', shiftKey: true, bubbles: true, cancelable: true });
    d.dispatchEvent(backwards);
    check(backwards.defaultPrevented && drawer.contains(d.activeElement), 'mobile reverse Tab stays inside menu');
    const forwards = new w.KeyboardEvent('keydown', { key: 'Tab', bubbles: true, cancelable: true });
    d.dispatchEvent(forwards);
    check(forwards.defaultPrevented && d.activeElement === toggle, 'mobile Tab wraps to close button');
    d.dispatchEvent(new w.KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await new Promise((resolve) => w.setTimeout(resolve, 0));
    check(drawer.inert && d.activeElement === toggle && !d.body.classList.contains('menu-open'), 'mobile Escape closes and restores focus');
    const card = d.querySelector('.cause-card');
    check(card, 'cause card is present');
    click(w, card); check(card.getAttribute('aria-expanded') === 'true', 'cause card opens');
    click(w, card); check(card.getAttribute('aria-expanded') === 'false', 'cause card closes on second click');
  } finally { mobile.window.close(); }
  for (const mobile of [false, true]) {
    const directions = await load('pages/directions.html', mobile);
    try {
      const d = directions.window.document;
      check(d.querySelectorAll('.directions-page .direction-card').length === 2, 'directions retains two information cards');
      check(!d.querySelector('.shared-clinic-guide .care-contact'), 'directions has no duplicate bottom contact section');
      check(d.querySelectorAll('iframe[title="삼성G정형외과 위치 지도"]').length === 1, 'directions retains only its original map');
      check(d.querySelectorAll('#clinic-hours').length === 1, 'directions retains unique hours anchor');
      const hours = [...d.querySelectorAll('.directions-page .hours-row .hours-time-compact')].map((item) => item.textContent);
      const weekday = d.querySelector('.directions-page .hours-weekday');
      check(weekday?.querySelector('.hours-weekday-letters')?.textContent === '평일', 'weekday readable label retained');
      check(weekday?.querySelector('.hours-weekday-measure[aria-hidden="true"]')?.textContent === d.querySelector('.directions-page .hours-row:nth-of-type(2) strong')?.textContent, 'weekday width uses the actual Wednesday label rather than an em estimate');
      check(hours.join('|') === '08:30 – 19:00|08:30 – 13:00|08:30 – 14:00', 'directions compact hours match original hours');
      check(d.querySelector('.direction-lunch .hours-time-compact').textContent === '평일 점심시간 13:00 – 14:00', 'directions lunch time retained');
      check(d.querySelector('.directions-page .direction-phone a').getAttribute('href') === 'tel:031-452-3000', 'directions retains click-to-call number');
      check(d.querySelectorAll('.directions-page .direction-card > img').length === 2, 'desktop decorative images retained');
    } finally { directions.window.close(); }
  }
  const board = await load('pages/notice.html', true);
  try {
    const w = board.window, d = w.document;
    check(d.querySelector('td.empty-state').colSpan === 3, 'mobile empty board spans visible columns');
    d.querySelector('#search-keyword').value = '테스트';
    d.querySelector('.board-search').dispatchEvent(new w.Event('submit', { bubbles: true, cancelable: true }));
    check(d.querySelector('#empty-state').textContent.includes('테스트'), 'board search still handles entered text');
    check(!d.querySelector('.search-pill').dataset.unavailableMessage, 'working board search is not marked unavailable');
  } finally { board.window.close(); }
  for (const [file, textFile] of [['terms.html', 'terms-draft.txt'], ['privacy-policy.html', 'privacy-draft.txt']]) {
    for (const mobile of [false, true]) {
      const dom = await load(`pages/${file}`, mobile);
      try {
        const d = dom.window.document;
        const normalize = (s) => s.replace(/\s+/g, ' ').trim();
        const expected = fs.readFileSync(path.join(root, 'assets/policies', textFile), 'utf8').split('\n\n').slice(1).join('\n\n');
        check(normalize(d.querySelector('.policy-document').textContent) === normalize(expected), `${file}: full text matches downloadable draft`);
        check(d.querySelector('meta[name="robots"]').content.includes('noindex'), `${file}: draft excluded from indexing`);
        check(d.querySelector('.policy-draft-note').textContent.includes('초안'), `${file}: visible draft notice`);
        check(d.querySelector('.policy-tools a[download]'), `${file}: text download`);
        for (const link of d.querySelectorAll('.policy-contents a')) {
          check(d.getElementById(link.hash.slice(1)), `${file}: table of contents target`);
        }
        check(!/클래스병원|클레스병원|2011년 1월 1일부터 시행합니다/.test(d.querySelector('.policy-document').textContent), `${file}: obsolete source names/date removed`);
      } finally { dom.window.close(); }
    }
  }
  check(!issues.length, issues.join('\n'));
  console.log(`PASS: ${files.length} pages, ${localLinks} local references, ${checks} assertions. Source/DOM only; visual layout not tested.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
