// The editable records live in unpaid-reference-data.json. Replace reference
// prices with this clinic's verified data before treating this page as a fee notice.
const unpaidTabs = document.querySelectorAll('.unpaid-tabs button');
const unpaidBody = document.querySelector('#unpaid-rows');
const unpaidPageNumber = document.querySelector('#unpaid-page-number');
const unpaidPrev = document.querySelector('#unpaid-prev');
const unpaidNext = document.querySelector('#unpaid-next');
const unpaidSearch = document.querySelector('#unpaid-search');
const unpaidKeyword = document.querySelector('#unpaid-keyword');
const pageSize = 50;
let unpaidItems = [];
let unpaidCategory = 'all';
let currentPage = 1;
let activeQuery = '';

function filteredItems() {
  return unpaidItems.filter((item) => {
    if (unpaidCategory !== 'all' && item.category !== unpaidCategory) return false;
    if (!activeQuery) return true;
    return [item.subcategory, item.code, item.name, item.note].some((value) => String(value).toLocaleLowerCase().includes(activeQuery));
  });
}

function renderItems() {
  const items = filteredItems();
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  currentPage = Math.min(currentPage, totalPages);
  unpaidPageNumber.textContent = String(currentPage);
  unpaidPrev.disabled = currentPage === 1;
  unpaidNext.disabled = currentPage === totalPages;
  unpaidBody.replaceChildren();

  if (!items.length) {
    const row = unpaidBody.insertRow();
    const cell = row.insertCell();
    cell.colSpan = 10;
    cell.className = 'unpaid-message';
    cell.textContent = '일치하는 참고 항목이 없습니다.';
    return;
  }

  const fields = ['subcategory', 'code', 'name', 'fixedFee', 'minFee', 'maxFee', 'materialIncluded', 'medicineIncluded', 'note', 'updatedAt'];
  const labels = ['중분류', '코드', '명칭', '고정비용', '최저비용', '최고비용', '치료재료대', '약제비', '특이사항', '최종수정일'];
  for (const item of items.slice((currentPage - 1) * pageSize, currentPage * pageSize)) {
    const row = unpaidBody.insertRow();
    row.dataset.itemId = item.id;
    row.dataset.category = item.category;
    fields.forEach((field, index) => {
      const cell = row.insertCell();
      cell.dataset.field = field;
      cell.dataset.label = labels[index];
      cell.textContent = item[field] || '—';
    });
  }
}

unpaidTabs.forEach((button) => button.addEventListener('click', () => {
  unpaidCategory = button.dataset.category;
  currentPage = 1;
  unpaidTabs.forEach((tab) => {
    const isActive = tab === button;
    tab.classList.toggle('is-active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });
  renderItems();
}));

unpaidSearch.addEventListener('submit', (event) => {
  event.preventDefault();
  activeQuery = unpaidKeyword.value.trim().toLocaleLowerCase();
  currentPage = 1;
  renderItems();
});
unpaidKeyword.addEventListener('input', () => {
  if (unpaidKeyword.value) return;
  activeQuery = '';
  currentPage = 1;
  renderItems();
});
unpaidPrev.addEventListener('click', () => { currentPage -= 1; renderItems(); });
unpaidNext.addEventListener('click', () => { currentPage += 1; renderItems(); });

fetch('unpaid-reference-data.json', { cache: 'no-store' })
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => {
    unpaidItems = data.items;
    renderItems();
  })
  .catch(() => {
    unpaidBody.replaceChildren();
    const cell = unpaidBody.insertRow().insertCell();
    cell.colSpan = 10;
    cell.className = 'unpaid-message';
    cell.textContent = '항목을 불러오지 못했습니다. 잠시 후 다시 확인해 주세요.';
  });
