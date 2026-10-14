const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.main-nav a');
const siteHeader = document.querySelector('.site-header');
const desktopHeader = window.matchMedia('(min-width: 801px)');
const headerCollapseAt = 80;
const headerExpandAt = 8;
let headerAnimationFrame = 0;

function updateHeaderNavigation() {
  headerAnimationFrame = 0;
  if (!siteHeader) return;

  if (!desktopHeader.matches) {
    siteHeader.classList.remove('is-nav-collapsed');
    return;
  }

  const isCollapsed = siteHeader.classList.contains('is-nav-collapsed');
  if (!isCollapsed && window.scrollY > headerCollapseAt) {
    siteHeader.classList.add('is-nav-collapsed');
  } else if (isCollapsed && window.scrollY <= headerExpandAt) {
    siteHeader.classList.remove('is-nav-collapsed');
  }
}

function requestHeaderNavigationUpdate() {
  if (headerAnimationFrame) return;
  headerAnimationFrame = window.requestAnimationFrame(updateHeaderNavigation);
}

window.addEventListener('scroll', requestHeaderNavigationUpdate, { passive: true });
window.addEventListener('resize', requestHeaderNavigationUpdate);
updateHeaderNavigation();

function closeMenu() {
  document.body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', '메뉴 열기');
}

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});
menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

const revealItems = document.querySelectorAll('.reveal');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
}

const boardSearch = document.querySelector('.board-search');
const searchType = document.querySelector('#search-type');
const searchKeyword = document.querySelector('#search-keyword');
const emptyState = document.querySelector('#empty-state');
const pressCard = document.querySelector('.press-card');
const postCount = document.querySelector('#post-count');
const categoryButtons = document.querySelectorAll('.customer-tabs button');
const categoryLinks = document.querySelectorAll('.customer-tabs a');
const headerSearch = document.querySelector('.search-pill');
const applyPageSize = document.querySelector('#apply-page-size');
let activeCategory = document.body.dataset.boardCategory || '공지사항';

function updateEmptyState(isSearch = false) {
  if (!searchKeyword || !emptyState) return;
  const keyword = searchKeyword.value.trim();
  if (pressCard) {
    const field = searchType.value;
    const title = pressCard.dataset.title.toLowerCase();
    const content = pressCard.dataset.content.toLowerCase();
    const query = isSearch ? keyword.toLowerCase() : '';
    const matches = activeCategory === '언론보도' && (!query || (field === 'title' ? title.includes(query) : field === 'content' ? content.includes(query) : title.includes(query) || content.includes(query)));
    pressCard.hidden = !matches;
    emptyState.hidden = matches;
    postCount.textContent = matches ? '1' : '0';
    if (!matches) emptyState.textContent = query ? `“${keyword}” 검색 결과가 없습니다.` : '등록된 게시글이 없습니다.';
    return;
  }
  emptyState.textContent = isSearch && keyword ? `“${keyword}” 검색 결과가 없습니다.` : `등록된 ${activeCategory} 게시글이 없습니다.`;
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeCategory = button.dataset.category;
    categoryButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });
    categoryLinks.forEach((link) => {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    });
    boardSearch?.reset();
    updateEmptyState();
    document.querySelector('.notice-board')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

boardSearch?.addEventListener('submit', (event) => {
  event.preventDefault();
  updateEmptyState(true);
});

boardSearch?.addEventListener('reset', () => {
  window.requestAnimationFrame(() => updateEmptyState());
});

headerSearch?.addEventListener('click', () => {
  document.querySelector('.notice-board')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (searchKeyword) window.setTimeout(() => searchKeyword.focus(), 450);
});

applyPageSize?.addEventListener('click', () => updateEmptyState(Boolean(searchKeyword?.value.trim())));
