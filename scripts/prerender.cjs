// Build-time DOM generation only. No browser, layout, or external resources.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');
const { entries: faqEntries, renderFaq } = require('./condition-faq.cjs');
const root = path.resolve(__dirname, '..');
const renderers = new Set([
  'foot-condition.js', 'hand-condition.js', 'hip-condition.js',
  'hospital-info.js', 'knee-condition.js', 'lumbar-disc.js',
  'neck-condition.js', 'regenerative-treatment.js', 'same-day-procedure.js',
  'same-day-surgery.js', 'shoulder-condition.js',
]);
const version = '20261022-static-main';
// Only applies when scripting is disabled; normal reveal/motion CSS is untouched.
const fallback = '<noscript id="static-content-fallback"><style>#main .reveal { opacity: 1 !important; visibility: visible !important; transform: none !important; transition: none !important; animation: none !important; }</style></noscript>';

function pageFiles() {
  return ['index.html', ...fs.readdirSync(path.join(root, 'pages')).filter(file => file.endsWith('.html')).sort().map(file => `pages/${file}`)];
}

function rendererFor(html) {
  const sources = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/g)].map(match => match[1].split('?')[0]);
  return sources.find(src => renderers.has(path.posix.basename(src)));
}

function renderMain(file, html, renderer) {
  const dom = new JSDOM(html, {
    url: `https://site.invalid/${file}`, runScripts: 'outside-only',
  });
  try {
    const w = dom.window;
    const main = w.document.querySelector('main#main');
    if (!main) throw new Error(`${file}: missing main`);
    main.removeAttribute('data-prerendered');
    main.replaceChildren();
    w.matchMedia = query => ({ matches: query.includes('min-width'), addEventListener() {}, removeEventListener() {} });
    w.requestAnimationFrame = () => 0;
    w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
    const source = path.resolve(root, path.dirname(file), renderer);
    new vm.Script(fs.readFileSync(source, 'utf8'), { filename: source }).runInContext(dom.getInternalVMContext(), { timeout: 5000 });
    main.insertAdjacentHTML('beforeend', renderFaq(file));
    if (!main.textContent.trim() || main.querySelectorAll('h1').length !== 1) {
      throw new Error(`${file}: renderer must produce text and one main heading`);
    }
    if (main.querySelector('.visible')) throw new Error(`${file}: motion must not be pre-triggered`);
    main.setAttribute('data-prerendered', 'true');
    // Drop indentation-only blank lines between sections, not content spacing.
    return main.outerHTML.replace(/\n[ \t]+(?=\n)/g, '\n');
  } finally {
    dom.window.close();
  }
}

function compile(file, html) {
  const renderer = rendererFor(html);
  if (!renderer) return html;
  const main = renderMain(file, html, renderer);
  const scriptVersion = renderer === 'lumbar-disc.js' ? '20261022-shared-condition-faq' : version;
  let output = html.replace(/<main\b[^>]*>[\s\S]*?<\/main>/i, () => main);
  if (faqEntries.has(file)) {
    // Replace the one-page preview stylesheet with the shared, isolated FAQ style.
    output = output.replace(/^[ \t]*<link\b[^>]*href="lumbar-faq\.css\?[^"\n]*"[^>]*>\r?\n/gm, '');
    if (!output.includes('href="condition-faq.css?')) {
      output = output.replace('</head>', '<link rel="stylesheet" href="condition-faq.css?v=20261022-faq-clean">\n  </head>');
    }
    output = output.replace(/href="condition-faq\.css\?[^\"]*"/g, 'href="condition-faq.css?v=20261022-faq-clean"');
  }
  // Refresh only the renderer script; menu and motion dependencies stay as-is.
  output = output.replace(/(<script\b[^>]*\bsrc=["'])([^"']+)(["'])/g, (match, prefix, src, quote) => {
    return src.split('?')[0] === renderer ? `${prefix}${renderer}?v=${scriptVersion}${quote}` : match;
  });
  if (!output.includes('id="static-content-fallback"')) {
    output = output.replace('</head>', `${fallback}\n  </head>`);
  }
  return output;
}

function build(checkOnly = false) {
  // Validate every output before writing, so renderer errors cannot leave a partial build.
  const outputs = pageFiles().map(file => {
    const html = fs.readFileSync(path.join(root, file), 'utf8');
    return { file, html, output: compile(file, html), managed: !!rendererFor(html) };
  });
  const stale = outputs.filter(item => item.output !== item.html);
  if (checkOnly && stale.length) {
    console.error(`Static HTML needs rebuilding: ${stale.map(item => item.file).join(', ')}`);
    process.exitCode = 1;
    return;
  }
  if (!checkOnly) stale.forEach(item => fs.writeFileSync(path.join(root, item.file), item.output));
  console.log(`${checkOnly ? 'Checked' : 'Built'} ${outputs.filter(item => item.managed).length} static main sections; ${stale.length} ${checkOnly ? 'stale' : 'updated'} files.`);
}

if (require.main === module) build(process.argv.includes('--check'));
module.exports = { pageFiles, rendererFor, renderMain, compile };
