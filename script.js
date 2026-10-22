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

const careContent = {
  'one-stop': {
    title: '원스톱 진료',
    description: '삼성G정형외과는 찾아오시는 모든 분들이 편안한 일상으로 돌아갈 수 있도록<br />한 분 한 분의 이야기에 귀 기울이며 충분한 시간을 할애하고,<br />꼼꼼한 진단과 개인별 상태에 맞는 치료를 제공합니다.',
    href: 'pages/one-stop-care.html',
    images: ['assets/subpages/one-stop-care/procedure-room.png', 'assets/main-one-stop-consultation.png'],
    alts: ['원스톱 진료실', '의료진의 초음파 진료 모습'],
  },
  day: {
    title: '낮병동 운영',
    description: '당일 입원부터 수술·시술, 안정과 경과 관찰을 거쳐 퇴원까지 이어집니다.<br />의료진이 환자 상태를 확인하며 당일 치료와 회복 과정을 살피고,<br />퇴원 후 주의사항과 필요한 진료 일정을 안내합니다.',
    href: 'pages/day-hospital.html',
    images: ['assets/main-day-hospital-01.png', 'assets/main-day-hospital-02.png'],
    alts: ['낮병동 침상과 개인 수납 공간', '낮병동 병실 전경'],
  },
  knee: {
    title: '특화치료',
    description: '환자의 증상과 생활 패턴을 세심하게 살핀 뒤<br />주사·재활·비수술 치료를 단계적으로 연결해<br />일상 복귀에 필요한 치료 계획을 제안합니다.',
    href: 'pages/knee-osteoarthritis.html',
    images: ['assets/clinic-room.webp', 'assets/subpages/doctors/doctor-procedure.png'],
    alts: ['정밀 진단실', '특화 시술 모습'],
  },
  spine: {
    title: '척추 클리닉',
    description: '허리 통증과 다리 저림의 원인을 정밀하게 확인하고<br />증상과 진행 단계에 맞춘 비수술 중심의 치료로<br />편안한 움직임을 회복하도록 돕습니다.',
    href: 'pages/lumbar-disc.html',
    images: ['assets/main-spine-center-01.png', 'assets/main-spine-center-02.png'],
    alts: ['허리 통증으로 불편을 겪는 모습', '척추와 허리 통증을 표현한 이미지'],
  },
  joint: {
    title: '관절 클리닉',
    description: '무릎과 어깨 관절의 통증 원인을 정확히 구분하고<br />관절을 보존하는 치료부터 재활까지 환자별 상태에 맞춰<br />회복 과정을 함께 설계합니다.',
    href: 'pages/knee-osteoarthritis.html',
    images: ['assets/main-joint-center-01.png', 'assets/main-joint-center-02.png'],
    alts: ['무릎 통증으로 불편을 겪는 모습', '의료진의 어깨 관절 진료 모습'],
  },
  surgery: {
    title: '수액치료',
    description: '환자의 컨디션과 회복 단계에 맞춰 필요한 영양과 수분을 보충하고<br />진료 과정과 연계한 체계적인 관리로<br />빠른 일상 복귀를 지원합니다.',
    href: '#',
    unavailableMessage: '수액치료 상세 안내는 준비 중입니다. 진료 문의는 031-452-3000으로 연락해 주세요.',
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
    if (content.unavailableMessage) {
      carePanelLink.dataset.unavailableMessage = content.unavailableMessage;
      carePanelLink.setAttribute('aria-disabled', 'true');
      carePanelLink.setAttribute('aria-label', '수액치료 자세히 보기 (준비 중)');
    } else {
      delete carePanelLink.dataset.unavailableMessage;
      carePanelLink.removeAttribute('aria-disabled');
      carePanelLink.removeAttribute('aria-label');
    }
    carePanelImages.forEach((image, index) => {
      image.src = content.images[index];
      image.alt = content.alts[index];
    });
  });
});

const spaceFeature = document.querySelector('.space-feature');
const spaceFeatureOpen = spaceFeature.querySelector('.space-feature-open');
const spaceFeatureImage = spaceFeature.querySelector('img');
const spaceFeatureTitle = spaceFeature.querySelector('figcaption strong');
const spaceFeatureDescription = spaceFeature.querySelector('figcaption span');
const spaceThumbnails = document.querySelectorAll('.space-thumb');
const spaceGalleryArrows = spaceFeature.querySelectorAll('.space-gallery-arrow');
const spaceGalleryStatus = spaceFeature.querySelector('.space-gallery-status');
const spaceGalleryImages = {
  lobby: [
    'assets/main-lobby-01.jpg',
    'assets/main-lobby-02.jpg',
    'assets/main-lobby-03.jpg',
    'assets/main-lobby-04.jpg',
    'assets/main-lobby-05.jpg',
  ],
  clinic: [
    'assets/main-clinic-gallery-01.jpg',
    'assets/main-clinic-gallery-02.jpg',
    'assets/main-clinic-gallery-03.jpg',
    'assets/main-clinic-gallery-04.jpg',
  ],
  inpatient: [
    'assets/main-inpatient-gallery-01.jpg',
    'assets/main-inpatient-gallery-02.jpg',
    'assets/main-inpatient-gallery-03.jpg',
    'assets/main-inpatient-gallery-04.jpg',
  ],
  treatment: [
    'assets/main-treatment-gallery-01.jpg',
    'assets/main-treatment-gallery-02.jpg',
    'assets/main-treatment-gallery-03.jpg',
    'assets/main-treatment-gallery-04.jpg',
    'assets/main-treatment-gallery-05.jpg',
  ],
};
let activeSpaceThumbnail = spaceThumbnails[0];
let activeSpaceImages = [activeSpaceThumbnail.dataset.src, ...spaceGalleryImages[activeSpaceThumbnail.dataset.gallery]];
let spaceImageIndex = 0;
const placeLightbox = document.querySelector('.place-lightbox');
const placeLightboxImage = placeLightbox.querySelector('.place-lightbox-image');
const placeLightboxClose = placeLightbox.querySelector('.place-lightbox-close');
const placeLightboxStatus = placeLightbox.querySelector('.space-gallery-status');
const galleryArrows = [...spaceGalleryArrows, ...placeLightbox.querySelectorAll('.space-gallery-arrow')];

const showSpaceImage = () => {
  spaceFeatureImage.src = activeSpaceImages[spaceImageIndex];
  spaceFeatureImage.alt = `${activeSpaceThumbnail.dataset.title} 사진 ${spaceImageIndex + 1} / ${activeSpaceImages.length}`;
  spaceFeature.dataset.full = spaceFeatureImage.src;
  spaceFeatureOpen.setAttribute('aria-label', `${spaceFeatureImage.alt} 크게 보기`);
  spaceGalleryStatus.textContent = spaceFeatureImage.alt;
  placeLightboxImage.src = spaceFeatureImage.src;
  placeLightboxImage.alt = spaceFeatureImage.alt;
  placeLightboxStatus.textContent = spaceFeatureImage.alt;
  galleryArrows.forEach((arrow) => {
    arrow.hidden = activeSpaceImages.length < 2;
    const direction = Number(arrow.dataset.direction) < 0 ? '이전' : '다음';
    arrow.setAttribute('aria-label', `${direction} ${activeSpaceThumbnail.dataset.title} 사진`);
  });
};

const moveSpaceImage = (direction) => {
  spaceImageIndex = (spaceImageIndex + direction + activeSpaceImages.length) % activeSpaceImages.length;
  showSpaceImage();
};

galleryArrows.forEach((arrow) => {
  arrow.addEventListener('click', () => {
    moveSpaceImage(Number(arrow.dataset.direction));
  });
});

showSpaceImage();

const openPlaceLightbox = () => {
  placeLightbox.showModal();
  document.body.classList.add('lightbox-open');
};

spaceThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    spaceThumbnails.forEach((item) => item.classList.toggle('active', item === thumbnail));
    spaceFeatureTitle.textContent = thumbnail.dataset.title;
    spaceFeatureDescription.textContent = thumbnail.dataset.description;
    activeSpaceThumbnail = thumbnail;
    activeSpaceImages = [thumbnail.dataset.src, ...spaceGalleryImages[thumbnail.dataset.gallery]];
    spaceImageIndex = 0;
    showSpaceImage();
  });
});

spaceFeatureOpen.addEventListener('click', openPlaceLightbox);

placeLightboxClose.addEventListener('click', () => placeLightbox.close());
placeLightbox.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
  event.preventDefault();
  moveSpaceImage(event.key === 'ArrowLeft' ? -1 : 1);
});
placeLightbox.addEventListener('click', (event) => {
  if (event.target === placeLightbox) placeLightbox.close();
});
placeLightbox.addEventListener('close', () => {
  document.body.classList.remove('lightbox-open');
  spaceFeatureOpen.focus();
});
