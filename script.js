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

const careContent = {
  'one-stop': {
    title: '원스톱 진료',
    description: '삼성G정형외과는 찾아오시는 모든 분들이 편안한 일상으로 돌아갈 수 있도록<br />한 분 한 분의 이야기에 귀 기울이며 충분한 시간을 할애하고,<br />꼼꼼한 진단과 개인별 상태에 맞는 치료를 제공합니다.',
    href: 'pages/one-stop-care.html',
    images: ['assets/subpages/one-stop-care/procedure-room.png', 'assets/subpages/one-stop-care/doctor-procedure.png'],
    alts: ['원스톱 진료실', '의료진의 시술 모습'],
  },
  day: {
    title: '낮병동 운영',
    description: '입원 부담은 줄이고 치료와 회복 관리는 더욱 세심하게 이어갑니다.<br />시술 이후 안정과 집중적인 재활이 필요한 분을 위해<br />낮 시간 동안 편안한 회복 공간을 제공합니다.',
    href: 'pages/day-hospital.html',
    images: ['assets/subpages/day-hospital/day-hospital-benefits.png', 'assets/subpages/day-hospital/rehab-02.png'],
    alts: ['낮병동 회복 공간', '집중 재활 치료'],
  },
  knee: {
    title: '특화치료',
    description: '환자의 증상과 생활 패턴을 세심하게 살핀 뒤<br />주사·재활·비수술 치료를 단계적으로 연결해<br />일상 복귀에 필요한 치료 계획을 제안합니다.',
    href: 'pages/knee-osteoarthritis.html',
    images: ['assets/clinic-room.webp', 'assets/subpages/doctors/doctor-procedure.png'],
    alts: ['정밀 진단실', '특화 시술 모습'],
  },
  spine: {
    title: '척추센터',
    description: '허리 통증과 다리 저림의 원인을 정밀하게 확인하고<br />증상과 진행 단계에 맞춘 비수술 중심의 치료로<br />편안한 움직임을 회복하도록 돕습니다.',
    href: 'pages/lumbar-disc.html',
    images: ['assets/subpages/lumbar-disc/cause-posture.jpg', 'assets/subpages/lumbar-disc/treatment-physical-lumbar.png'],
    alts: ['허리 통증 진단', '허리 재활 치료'],
  },
  joint: {
    title: '관절센터',
    description: '무릎과 어깨 관절의 통증 원인을 정확히 구분하고<br />관절을 보존하는 치료부터 재활까지 환자별 상태에 맞춰<br />회복 과정을 함께 설계합니다.',
    href: 'pages/knee-osteoarthritis.html',
    images: ['assets/subpages/knee-osteoarthritis/treatment-injection.png', 'assets/subpages/frozen-shoulder/treatment-physical.jpg'],
    alts: ['무릎 관절 치료', '어깨 관절 재활'],
  },
  surgery: {
    title: '수액치료',
    description: '환자의 컨디션과 회복 단계에 맞춰 필요한 영양과 수분을 보충하고<br />진료 과정과 연계한 체계적인 관리로<br />빠른 일상 복귀를 지원합니다.',
    href: 'pages/one-stop-care.html',
    images: ['assets/subpages/one-stop-care/procedure-room.png', 'assets/clinic-room.webp'],
    alts: ['수액 치료 공간', '회복 관리 진료실'],
  },
};

const careTabs = document.querySelectorAll('.care-tab');
const carePanelTitle = document.querySelector('.care-panel-copy h3');
const carePanelDescription = document.querySelector('.care-panel-copy p');
const carePanelLink = document.querySelector('.care-panel-copy a');
const carePanelImages = document.querySelectorAll('.care-panel-images img');

careTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const content = careContent[tab.dataset.care];
    if (!content) return;

    careTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });

    carePanelTitle.textContent = content.title;
    carePanelDescription.innerHTML = content.description;
    carePanelLink.href = content.href;
    carePanelImages.forEach((image, index) => {
      image.src = content.images[index];
      image.alt = content.alts[index];
    });
  });
});

const spaceFeature = document.querySelector('.space-feature');
const spaceFeatureImage = spaceFeature.querySelector('img');
const spaceFeatureTitle = spaceFeature.querySelector('figcaption strong');
const spaceFeatureDescription = spaceFeature.querySelector('figcaption span');
const spaceThumbnails = document.querySelectorAll('.space-thumb');
const placeLightbox = document.querySelector('.place-lightbox');
const placeLightboxImage = placeLightbox.querySelector('.place-lightbox-image');
const placeLightboxClose = placeLightbox.querySelector('.place-lightbox-close');

const openPlaceLightbox = () => {
  placeLightboxImage.src = spaceFeature.dataset.full || spaceFeatureImage.currentSrc || spaceFeatureImage.src;
  placeLightboxImage.alt = spaceFeatureImage.alt;
  placeLightbox.showModal();
  document.body.classList.add('lightbox-open');
};

spaceThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    spaceThumbnails.forEach((item) => item.classList.toggle('active', item === thumbnail));
    spaceFeatureImage.src = thumbnail.dataset.src;
    spaceFeatureImage.alt = thumbnail.querySelector('img').alt;
    spaceFeature.dataset.full = thumbnail.dataset.src;
    spaceFeatureTitle.textContent = thumbnail.dataset.title;
    spaceFeatureDescription.textContent = thumbnail.dataset.description;
  });
});

spaceFeature.tabIndex = 0;
spaceFeature.setAttribute('role', 'button');
spaceFeature.setAttribute('aria-label', '선택한 병원 시설 사진 크게 보기');
spaceFeature.addEventListener('click', openPlaceLightbox);
spaceFeature.addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  event.preventDefault();
  openPlaceLightbox();
});

placeLightboxClose.addEventListener('click', () => placeLightbox.close());
placeLightbox.addEventListener('click', (event) => {
  if (event.target === placeLightbox) placeLightbox.close();
});
placeLightbox.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  spaceFeature.focus();
});
