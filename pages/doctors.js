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

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal:not(.reveal-sequence)');
const sequentialRevealItems = Array.from(document.querySelectorAll('.reveal-sequence'));

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('visible'));
  sequentialRevealItems.forEach((item) => item.classList.add('visible'));
} else {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  revealItems.forEach((item) => observer.observe(item));

  let sequenceIndex = 0;
  let sequenceLocked = false;

  const revealNextSequenceItem = () => {
    if (sequenceLocked || sequenceIndex >= sequentialRevealItems.length) return;

    const nextItem = sequentialRevealItems[sequenceIndex];
    const bounds = nextItem.getBoundingClientRect();
    const triggerLine = window.innerHeight * 0.86;
    if (bounds.top > triggerLine || bounds.bottom < 0) return;

    nextItem.classList.add('visible');
    sequenceIndex += 1;
    sequenceLocked = true;
    window.setTimeout(() => {
      sequenceLocked = false;
      revealNextSequenceItem();
    }, 180);
  };

  window.addEventListener('scroll', revealNextSequenceItem, { passive: true });
  window.addEventListener('resize', revealNextSequenceItem);
  revealNextSequenceItem();
}
