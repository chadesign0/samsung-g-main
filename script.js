const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
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

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  mainNav.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
});

mainNav.addEventListener('click', (event) => {
  if (!event.target.matches('a')) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
  mainNav.classList.remove('open');
  document.body.classList.remove('menu-open');
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const focusTransition = document.querySelector('.focus-transition');
const focusStage = document.querySelector('.focus-stage');
let focusAnimationFrame = 0;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const updateFocusTransition = () => {
  focusAnimationFrame = 0;
  const bounds = focusTransition.getBoundingClientRect();
  const scrollRange = Math.max(bounds.height - window.innerHeight, 1);
  const progress = clamp(-bounds.top / scrollRange);
  const expansion = clamp(progress / 0.62);
  const easedExpansion = 1 - (1 - expansion) ** 3;
  const viewportWidth = document.documentElement.clientWidth;
  const compact = window.innerWidth <= 900;
  const narrow = window.innerWidth <= 560;
  const startWidth = compact
    ? Math.min(viewportWidth * (narrow ? 0.82 : 0.78), 390)
    : Math.min(500, viewportWidth * 0.78);
  const startHeight = startWidth * (669 / 500);
  const cardWidth = startWidth + (viewportWidth - startWidth) * easedExpansion;
  const cardHeight = startHeight + (window.innerHeight - startHeight) * easedExpansion;
  const focusFade = clamp((progress - 0.04) / 0.34);
  const captionFade = clamp(progress / 0.18);
  const shadeOpacity = clamp((progress - 0.62) / 0.2);
  const copyOpacity = clamp((progress - 0.82) / 0.16);

  focusStage.style.setProperty('--card-width', `${cardWidth.toFixed(2)}px`);
  focusStage.style.setProperty('--card-height', `${cardHeight.toFixed(2)}px`);
  focusStage.style.setProperty('--focus-fade', focusFade.toFixed(3));
  focusStage.style.setProperty('--caption-fade', captionFade.toFixed(3));
  focusStage.style.setProperty('--shade-opacity', shadeOpacity.toFixed(3));
  focusStage.style.setProperty('--copy-opacity', copyOpacity.toFixed(3));
};

const requestFocusTransitionUpdate = () => {
  if (focusAnimationFrame) return;
  focusAnimationFrame = window.requestAnimationFrame(updateFocusTransition);
};

window.addEventListener('scroll', requestFocusTransitionUpdate, { passive: true });
window.addEventListener('resize', requestFocusTransitionUpdate);
updateFocusTransition();

const hero = document.querySelector('.hero');
const heroInitialMessage = hero.querySelector('.hero-swap-initial');
const heroScrolledMessage = hero.querySelector('.hero-swap-scrolled');
let heroMessageSwapped = false;
let heroTransitionLocked = false;

const setHeroMessage = (swapped) => {
  heroMessageSwapped = swapped;
  hero.classList.toggle('is-scrolled', swapped);
  heroInitialMessage.setAttribute('aria-hidden', String(swapped));
  heroScrolledMessage.setAttribute('aria-hidden', String(!swapped));
};

const lockHeroTransition = () => {
  heroTransitionLocked = true;
  window.setTimeout(() => {
    heroTransitionLocked = false;
  }, 620);
};

window.addEventListener(
  'wheel',
  (event) => {
    const atHeroEntry = window.scrollY <= hero.offsetTop + 4;

    if (event.deltaY > 0 && atHeroEntry && (!heroMessageSwapped || heroTransitionLocked)) {
      event.preventDefault();
      if (!heroMessageSwapped) {
        setHeroMessage(true);
        lockHeroTransition();
      }
      return;
    }

    if (event.deltaY < 0 && window.scrollY <= 1 && heroMessageSwapped) {
      event.preventDefault();
      if (!heroTransitionLocked) {
        setHeroMessage(false);
        lockHeroTransition();
      }
    }
  },
  { passive: false },
);

window.addEventListener('scroll', () => {
  if (window.scrollY <= 1 && heroMessageSwapped && !heroTransitionLocked) setHeroMessage(false);
}, { passive: true });

setHeroMessage(window.scrollY > hero.offsetTop + 4);

const placePhotos = document.querySelectorAll('.space-photo');
const placeSection = document.querySelector('.space');
const placeMainPhoto = placeSection.querySelector('.space-main');
const placeBurstPhotos = placeSection.querySelectorAll('.space-photo:not(.space-main)');
const placeLightbox = document.querySelector('.place-lightbox');
const placeLightboxImage = placeLightbox.querySelector('.place-lightbox-image');
const placeLightboxClose = placeLightbox.querySelector('.place-lightbox-close');
let lastPlacePhoto = null;

placeSection.classList.add('burst-ready');

const placeBurstObserver = new IntersectionObserver(
  ([entry], observer) => {
    if (!entry.isIntersecting) return;

    const mainRect = placeMainPhoto.getBoundingClientRect();
    const originX = mainRect.left + mainRect.width / 2;
    const originY = mainRect.top + mainRect.height / 2;

    placeBurstPhotos.forEach((photo, index) => {
      const photoRect = photo.getBoundingClientRect();
      const photoX = photoRect.left + photoRect.width / 2;
      const photoY = photoRect.top + photoRect.height / 2;
      photo.style.setProperty('--burst-x', `${originX - photoX}px`);
      photo.style.setProperty('--burst-y', `${originY - photoY}px`);
      photo.style.setProperty('--burst-delay', `${index * 70}ms`);
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => placeSection.classList.add('burst-visible'));
    });
    observer.unobserve(placeSection);
  },
  { threshold: 0.12 },
);

placeBurstObserver.observe(placeSection);

const openPlaceLightbox = (photo) => {
  const image = photo.querySelector('img');
  lastPlacePhoto = photo;
  placeLightboxImage.src = photo.dataset.full || image.currentSrc || image.src;
  placeLightboxImage.alt = image.alt;
  placeLightbox.showModal();
  document.body.classList.add('lightbox-open');
};

placePhotos.forEach((photo) => {
  const image = photo.querySelector('img');
  photo.tabIndex = 0;
  photo.setAttribute('role', 'button');
  photo.setAttribute('aria-label', `${image.alt} 크게 보기`);

  photo.addEventListener('click', () => openPlaceLightbox(photo));
  photo.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    openPlaceLightbox(photo);
  });
});

placeLightboxClose.addEventListener('click', () => placeLightbox.close());
placeLightbox.addEventListener('click', (event) => {
  if (event.target === placeLightbox) placeLightbox.close();
});
placeLightbox.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  lastPlacePhoto?.focus();
});

const quickTop = document.querySelector('.quick-top');

quickTop.addEventListener('click', (event) => {
  event.preventDefault();
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});
