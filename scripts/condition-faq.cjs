// Build-time only: each page receives only its own FAQ, without client data fetching.
const { items } = require('../content/condition-faqs.json');
const entries = new Map(items.map(item => [`pages/${item.page}`, item]));
const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));

function renderFaq(file) {
  const entry = entries.get(file);
  if (!entry) return '';
  if (entry.faqs.length !== 3 || entry.faqs.some(faq => !faq.question || !faq.answer)) {
    throw new Error(`${file}: expected three complete FAQ entries`);
  }
  // Preserve the existing lumbar preview link.
  const id = file === 'pages/lumbar-disc.html' ? 'lumbar-faq' : 'condition-faq';
  return `<section class="condition-faq" id="${id}" aria-labelledby="condition-faq-title">
      <div class="section-inner">
        <div class="section-heading reveal"><h2 id="condition-faq-title">${escape(entry.title)}<br>자주 묻는 질문</h2></div>
        <div class="condition-faq-list">
          ${entry.faqs.map(({ question, answer }, index) => `<details class="condition-faq-item reveal"${index === 0 ? ' open' : ''}><summary><span class="condition-faq-mark" aria-hidden="true">Q.</span><span>${escape(question)}</span><span class="condition-faq-toggle" aria-hidden="true"></span></summary><div class="condition-faq-answer"><p>${escape(answer)}</p></div></details>`).join('')}
        </div>
      </div>
    </section>`;
}

module.exports = { entries, renderFaq };
