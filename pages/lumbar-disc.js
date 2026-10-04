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

const causeCards = document.querySelectorAll('.cause-card');

function setCauseCardExpanded(card, expanded) {
  card.classList.toggle('is-expanded', expanded);
  card.setAttribute('aria-expanded', String(expanded));
}

function closeOtherCauseCards(activeCard) {
  causeCards.forEach((card) => {
    if (card !== activeCard) setCauseCardExpanded(card, false);
  });
}

causeCards.forEach((card) => {
  const toggleCard = () => {
    const shouldExpand = !card.classList.contains('is-expanded');
    closeOtherCauseCards(card);
    setCauseCardExpanded(card, shouldExpand);
  };

  card.addEventListener('click', toggleCard);

  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard();
    }

    if (event.key === 'Escape') {
      setCauseCardExpanded(card, false);
      card.blur();
    }
  });
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

if (reduceMotion || !('IntersectionObserver' in window)) {
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
