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
const searchKeyword = document.querySelector('#search-keyword');
const emptyState = document.querySelector('#empty-state');
const categoryButtons = document.querySelectorAll('.customer-tabs button');
const headerSearch = document.querySelector('.search-pill');
const applyPageSize = document.querySelector('#apply-page-size');
let activeCategory = '공지사항';

function updateEmptyState(isSearch = false) {
  const keyword = searchKeyword.value.trim();
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
    boardSearch.reset();
    updateEmptyState();
    document.querySelector('.notice-board').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

boardSearch.addEventListener('submit', (event) => {
  event.preventDefault();
  updateEmptyState(true);
});

boardSearch.addEventListener('reset', () => {
  window.requestAnimationFrame(() => updateEmptyState());
});

headerSearch?.addEventListener('click', () => {
  document.querySelector('.notice-board').scrollIntoView({ behavior: 'smooth', block: 'start' });
  window.setTimeout(() => searchKeyword.focus(), 450);
});

applyPageSize?.addEventListener('click', () => updateEmptyState(Boolean(searchKeyword.value.trim())));
