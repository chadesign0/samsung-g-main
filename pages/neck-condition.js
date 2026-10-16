const conditionKey = document.body.dataset.condition;

const conditions = {
  'cervical-disc': {
    title: '목디스크',
    subtitle: '편안한 일상을 위한 맞춤 목 진료',
    description: '목디스크는 목뼈 사이의 디스크가 돌출되어 주변 신경을 압박하면서<br> 목과 어깨 통증, 팔과 손의 저림을 유발하는 질환입니다.',
    hero: '../assets/subpages/neck/hero-cervical-disc-v2.png',
    heroPosition: 'center',
    causeTitle: '목디스크<br>작은 불편도 놓치지 마세요',
    causeIntro: '목의 뻐근함이 잠시 나아져도 신경 자극이 이어지면 어깨와 팔까지 통증이 퍼질 수 있습니다.<br>고개를 돌리기 어렵거나 손끝 감각이 둔해지는 증상이 반복된다면 목 상태를 확인해 보는 것이 좋습니다.',
    causes: [
      ['자연스러운 노화', '디스크의 수분과 탄력이 감소해 신경이 자극받을 수 있습니다.'],
      ['장시간 숙인 자세', '스마트폰과 모니터를 향해 고개를 숙이는 자세가 목에 부담을 줍니다.'],
      ['누적되는 목의 부담', '오랜 시간 반복되는 부담이 목 주변 구조에 영향을 줄 수 있습니다.'],
      ['갑작스러운 외부 자극', '외부 충격이나 무리한 움직임이 증상의 계기가 될 수 있습니다.'],
    ],
    symptomFlipped: true,
    symptomTitle: '목과 팔의 불편함,<br>가볍게 넘기지 마세요',
    symptomIntro: '목디스크는 목에만 통증이 나타나는 것이 아니라 어깨와 팔, 손끝까지 다양한 증상으로 이어질 수 있습니다.',
    symptoms: ['목을 뒤로 젖히거나 돌릴 때 심해지는 통증', '어깨에서 팔까지 퍼지는 뻐근함과 통증', '손가락이 저리거나 감각이 둔해지는 증상', '물건을 자주 떨어뜨리거나 손에 힘이 빠짐'],
    treatmentTitle: '증상과 신경 자극 정도에 따른<br>단계별 치료가 필요합니다',
    treatmentIntro: '초기에는 약물치료와 물리·운동치료를 통해 통증을 줄이고 목의 움직임과 기능 회복을 돕습니다.<br>팔 저림이나 통증이 지속되는 경우에는 상태에 따라 주사치료를 고려할 수 있습니다.',
  },
  'forward-head-posture': {
    title: '거북목·일자목',
    subtitle: '익숙한 자세가 목의 균형을 무너뜨립니다',
    description: '고개를 숙이거나 머리를 앞으로 내민 자세가 반복되면<br> 목과 어깨 주변에 부담이 쌓일 수 있습니다.',
    hero: '../assets/subpages/neck/hero-forward-head-v2.png',
    heroPosition: 'center',
    causeTitle: '거북목 일자목<br>평소 자세에서 시작될 수 있습니다',
    causeIntro: '스마트폰이나 모니터를 볼 때 머리가 앞으로 나온 자세가 반복되면 목의 자연스러운 곡선과 주변 근육의 균형이 흐트러질 수 있습니다.<br>목 뒤가 쉽게 피로하거나 어깨가 자주 뭉친다면 일상 속 자세부터 점검해 보세요.',
    causes: [
      ['장시간 화면 사용', '오래 내려다보는 습관은 머리의 무게를 목과 어깨에 집중시킵니다.'],
      ['맞지 않는 작업 환경', '높이가 맞지 않는 모니터와 의자가 목의 긴장을 높일 수 있습니다.'],
      ['굽은 등과 말린 어깨', '등과 어깨의 정렬이 무너지면 고개가 앞으로 나오기 쉽습니다.'],
      ['부족한 움직임과 근력', '활동량이 줄어들면 목과 어깨를 지지하는 힘이 약해질 수 있습니다.'],
    ],
    symptomTitle: '목과 어깨에 쌓이는 피로,<br>자세가 보내는 신호입니다',
    symptomIntro: '거북목·일자목은 목 주변의 긴장과 통증뿐 아니라 어깨와 등까지 불편함을 이어지게 할 수 있습니다.',
    symptoms: ['오래 앉아 있을수록 목과 어깨의 뻐근함', '고개를 돌리거나 젖힐 때 느껴지는 뻣뻣함', '뒤통수에서 관자놀이까지 이어지는 두통', '바른 자세를 유지하기 어려움'],
    treatmentTitle: '목의 정렬과 움직임을 고려한<br>단계별 관리가 필요합니다',
    treatmentIntro: '거북목·일자목은 생활 자세를 점검하고 긴장된 근육과 약해진 부위의 균형을 함께 관리해야 합니다.<br>증상과 움직임의 정도에 맞춰 통증을 줄이고 편안한 자세를 되찾도록 돕습니다.',
  },
  'cervical-spinal-stenosis': {
    title: '경추척추관협착증',
    subtitle: '손과 보행의 변화도 살펴야 합니다',
    description: '목의 척추관이 좁아지면서 신경이나 척수가 압박되어<br> 목 통증뿐 아니라 손의 감각과 움직임에도 영향을 줄 수 있습니다.',
    hero: '../assets/subpages/neck/hero-stenosis-v2.png',
    heroPosition: 'center',
    causeTitle: '경추 척추관협착증<br>퇴행성 변화에서 시작될 수 있습니다',
    causeIntro: '나이가 들면서 뼈와 디스크, 인대가 변형되면 척수가 지나가는 공간이 점차 좁아질 수 있습니다.<br>손 저림이나 움직임의 변화가 반복된다면 경추와 신경 상태를 확인해 보세요.',
    causes: [
      ['퇴행성 변화', '나이가 들면서 디스크와 관절이 변형되어 척추관이 좁아질 수 있습니다.'],
      ['디스크의 돌출', '디스크가 밀려나오면서 신경이나 척수를 압박할 수 있습니다.'],
      ['뼈돌기와 인대 비후', '척추 구조의 변화가 공간을 좁히고 압박을 만들 수 있습니다.'],
      ['선천적으로 좁은 척추관', '태어날 때부터 좁은 경우에는 작은 변화에도 증상이 나타날 수 있습니다.'],
    ],
    symptomFlipped: true,
    symptomTitle: '손의 움직임과 걸음걸이 변화,<br>척수가 보내는 신호일 수 있습니다',
    symptomIntro: '경추 척추관협착증은 목과 팔의 통증을 넘어 손의 세밀한 움직임과 보행에도 영향을 줄 수 있습니다.',
    symptoms: ['목이 뻣뻣하고 어깨와 팔까지 이어지는 통증', '손가락이 저리거나 감각이 둔해지는 증상', '글씨 쓰기 등 세밀한 동작의 어려움', '힘이 빠지거나 걸음이 불안정해지는 증상'],
    treatmentTitle: '신경 압박과 증상의 정도에 맞춘<br>신중한 치료가 필요합니다',
    treatmentIntro: '통증이 경미한 초기에는 약물치료와 물리치료로 증상을 완화하며 경과를 살필 수 있습니다.<br>손의 힘이 약해지거나 보행 장애가 나타난다면 신경 압박 정도를 빠르게 확인해야 합니다.',
  },
  'cervicogenic-headache': {
    title: '경추성 두통',
    subtitle: '두통만 다스려서는 반복될 수 있습니다',
    description: '목의 관절과 주변 근육에 생긴 문제가 머리까지 통증을 전달할 수 있습니다.<br> 뒷목에서 시작된 통증이 한쪽 머리로 번지거나 자주 반복된다면 경추 상태를 함께 살펴보세요.',
    hero: '../assets/subpages/neck/hero-headache-v2.png',
    heroPosition: 'center',
    causeTitle: '경추성 두통,<br>목 주변의 문제에서 시작될 수 있습니다',
    causeIntro: '장시간 유지하는 자세와 경추 관절의 움직임 저하, 주변 근육의 긴장은 두통으로 이어질 수 있습니다.<br>머리가 아플 때 뒷목까지 뻐근하다면 통증의 원인을 함께 확인해 보세요.',
    causes: [
      ['잘못된 자세', '고개를 앞으로 내민 자세가 반복되면 목에 부담과 긴장이 쌓일 수 있습니다.'],
      ['경추 관절의 기능 저하', '뒤통수와 머리 주변으로 통증이 이어질 수 있습니다.'],
      ['목 주변 근육의 긴장', '근육이 과도하게 긴장하면 목에서 시작된 통증이 퍼질 수 있습니다.'],
      ['외상 및 퇴행성 변화', '목의 구조 변화가 경추 관절과 근육을 자극할 수 있습니다.'],
    ],
    symptomTitle: '목에서 시작되는 두통,<br>움직일 때 더욱 뚜렷해질 수 있습니다',
    symptomIntro: '경추성 두통은 단순히 머리만 아픈 것이 아니라 목의 움직임과 자세 변화에 따라 불편함이 함께 나타날 수 있습니다.',
    symptoms: ['뒷목에서 뒤통수와 관자놀이로 퍼지는 통증', '한쪽 머리에 반복적으로 나타나는 통증', '목을 돌리거나 젖힐 때 심해지는 두통', '목의 움직임 제한과 어깨 끝의 불편함'],
    treatmentTitle: '통증이 시작된 원인을 살펴<br>목의 기능을 함께 관리합니다',
    treatmentIntro: '경추성 두통은 목의 상태와 통증 양상을 확인한 뒤 약물치료와 물리·운동치료를 함께 적용할 수 있습니다.<br>통증이 반복되거나 심한 경우에는 상태에 따라 주사치료를 고려합니다.',
  },
  'neck-myofascial-pain': {
    title: '목·어깨 근막통증 증후군',
    subtitle: '단순한 근육통으로 넘기지 마세요',
    description: '근육과 근막에 통증 유발점이 생기면 목과 어깨가 지속적으로 뻐근하고<br> 머리나 팔처럼 떨어진 부위까지 통증이 번질 수 있습니다.',
    hero: '../assets/subpages/neck/hero-myofascial-v2.png',
    heroPosition: 'center',
    causeTitle: '반복되는 목·어깨 통증,<br>일상 속 근육 부담에서 시작될 수 있습니다',
    causeIntro: '같은 자세를 오래 유지하거나 특정 근육을 반복적으로 사용하면 목과 어깨의 긴장이 풀리지 않고 통증 유발점으로 이어질 수 있습니다.',
    causes: [
      ['장시간 유지되는 자세', '스마트폰을 오래 사용하면 목과 어깨 근육의 부담이 커질 수 있습니다.'],
      ['반복적인 근육 사용', '같은 동작을 반복하면 특정 근육에 과도한 긴장이 생길 수 있습니다.'],
      ['근육의 손상', '무리한 운동이나 움직임이 근육 손상과 통증을 만들 수 있습니다.'],
      ['스트레스와 피로', '긴장과 피로가 지속되면 통증이 회복되지 않고 반복될 수 있습니다.'],
    ],
    symptomTitle: '누르면 다른 곳까지 퍼지는 통증,<br>근막통증증후군의 특징일 수 있습니다',
    symptomIntro: '목과 어깨 근육에 단단하게 뭉친 부위가 생기고 해당 부위를 누르면 주변이나 떨어진 곳까지 통증이 전달될 수 있습니다.',
    symptoms: ['목과 어깨가 무겁고 뻐근한 느낌', '근육을 눌렀을 때 퍼져 나가는 통증', '팔을 움직일 때 느껴지는 불편함', '뒤통수나 팔 주변까지 이어지는 연관통'],
    treatmentTitle: '굳어진 근육과 통증 유발점을 확인해<br>편안한 움직임을 되찾도록 돕습니다',
    treatmentIntro: '통증이 발생한 근육과 불균형 원인을 확인한 뒤 약물치료와 물리·운동치료를 함께 적용할 수 있습니다.<br>통증 유발점이 뚜렷한 경우에는 상태에 따라 주사치료를 고려합니다.',
  },
};

const tabs = [
  ['cervical-disc', '목디스크', 'cervical-disc.html'],
  ['forward-head-posture', '거북목·일자목', 'forward-head-posture.html'],
  ['cervical-spinal-stenosis', '경추척추관협착증', 'cervical-spinal-stenosis.html'],
  ['cervicogenic-headache', '경추성 두통', 'cervicogenic-headache.html'],
  ['neck-myofascial-pain', '목·어깨 근막통증증후군', 'neck-myofascial-pain.html'],
];

const causeImages = [
  '../assets/subpages/neck/cause-screen.jpg',
  '../assets/subpages/neck/cause-aging.jpg',
  '../assets/subpages/neck/cause-strain.jpg',
  '../assets/subpages/neck/cause-fatigue.jpg',
];

const condition = conditions[conditionKey] || conditions['cervical-disc'];
const main = document.querySelector('#main');

const cardMarkup = condition.causes.map(([title, description], index) => `
  <article class="cause-card reveal" tabindex="0" role="button" aria-expanded="false">
    <img src="${causeImages[index]}" alt="${title} 관련 목 건강 이미지">
    <div class="cause-card-copy">
      <h3>${title}</h3>
      <p class="cause-card-description">${description}</p>
      <span class="plus-mark" aria-hidden="true">+</span>
    </div>
  </article>`).join('');

const tabMarkup = tabs.map(([key, label, href]) => `<a href="${href}"${key === conditionKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const symptomMarkup = condition.symptoms.map((symptom) => `<li><span aria-hidden="true">✓</span>${symptom}</li>`).join('');

if (main) {
  main.innerHTML = `
    <section class="disease-hero" aria-labelledby="disease-title" style="--hero-image:url('${condition.hero}');--hero-position:${condition.heroPosition}">
      <div class="disease-hero-shade"></div>
      <div class="disease-hero-inner reveal">
        <p class="breadcrumb"><span class="home-mark" aria-hidden="true">⌂</span> 삼성G정형외과 <span aria-hidden="true">›</span> 척추센터 <span aria-hidden="true">›</span> 목 <span aria-hidden="true">›</span> ${condition.title}</p>
        <h1 id="disease-title">${condition.title}</h1>
        <h2>${condition.subtitle}</h2>
        <p>${condition.description}</p>
      </div>
      <nav class="disease-tabs" aria-label="목 질환 종류">${tabMarkup}</nav>
    </section>

    <section class="causes" aria-labelledby="causes-title">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2 id="causes-title">${condition.causeTitle}</h2>
          <p>${condition.causeIntro}</p>
        </div>
        <div class="cause-grid" aria-label="${condition.title}의 주요 원인">${cardMarkup}</div>
      </div>
    </section>

    <section class="symptoms${condition.symptomFlipped ? ' is-flipped' : ''}" aria-labelledby="symptoms-title">
      <div class="symptoms-shade"></div>
      <div class="symptoms-inner section-inner">
        <div class="symptoms-copy reveal">
          <h2 id="symptoms-title">${condition.symptomTitle}</h2>
          <p>${condition.symptomIntro}</p>
          <ul class="symptom-checklist" aria-label="${condition.title}의 대표 증상">${symptomMarkup}</ul>
        </div>
      </div>
    </section>

    <section class="treatments" aria-labelledby="treatments-title">
      <div class="section-inner">
        <div class="section-heading reveal">
          <h2 id="treatments-title">${condition.treatmentTitle}</h2>
          <p>${condition.treatmentIntro}</p>
        </div>
        <div class="treatment-list">
          <article class="treatment-row reveal">
            <img src="../assets/subpages/frozen-shoulder/treatment-medication.png" alt="약물치료 이미지">
            <div class="treatment-copy"><span class="check-mark" aria-hidden="true">✓</span><h3>약물치료</h3><p>진통·소염제 등을 활용해 목과 어깨의 통증과 염증을 완화합니다.</p></div>
          </article>
          <article class="treatment-row treatment-row-reverse reveal">
            <div class="treatment-copy"><span class="check-mark" aria-hidden="true">✓</span><h3>물리·운동치료</h3><p>긴장된 근육을 이완하고 목의 움직임과 기능을 회복하도록 돕습니다.</p></div>
            <img src="../assets/subpages/frozen-shoulder/treatment-physical.jpg" alt="물리 운동치료 이미지">
          </article>
          <article class="treatment-row reveal">
            <img src="../assets/subpages/frozen-shoulder/treatment-injection.jpg" alt="주사치료 이미지">
            <div class="treatment-copy"><span class="check-mark" aria-hidden="true">✓</span><h3>주사치료</h3><p>통증 유발점이나 신경 주변에 약물을 적용해 통증 완화를 돕습니다.</p></div>
          </article>
        </div>
      </div>
    </section>

    <section class="contact-us" id="contact-us" aria-labelledby="contact-us-title">
      <div class="contact-us-shade"></div>
      <div class="section-inner contact-us-inner reveal">
        <p class="eyebrow">Contact Us</p>
        <h2 id="contact-us-title">상담문의</h2>
        <p>진료와 치료에 대해 궁금한 점을 남겨 주세요.</p>
        <div class="contact-us-links">
          <a class="contact-kakao" href="https://pf.kakao.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 44 34" aria-hidden="true"><path d="M22 2C10.95 2 2 8.72 2 17c0 5.27 3.62 9.91 9.1 12.58L9 34l7.1-2.82c1.87.53 3.85.82 5.9.82 11.05 0 20-6.72 20-15S33.05 2 22 2Z"/><text x="22" y="21">TALK</text></svg>카카오톡 채널</a>
          <a class="contact-phone" href="tel:031-452-3000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg>031-452-3000</a>
          <a class="contact-naver" href="https://talk.naver.com" target="_blank" rel="noreferrer"><strong aria-hidden="true">N</strong>네이버 톡톡</a>
        </div>
      </div>
    </section>`;
}

document.title = `${condition.title} | 삼성G정형외과`;
const metaDescription = document.querySelector('meta[name="description"]');
metaDescription?.setAttribute('content', `삼성G정형외과 ${condition.title} 진료 안내`);

const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.main-nav a');
const siteHeader = document.querySelector('.site-header');
const desktopHeader = window.matchMedia('(min-width: 801px)');
let headerAnimationFrame = 0;

function updateHeaderNavigation() {
  headerAnimationFrame = 0;
  if (!siteHeader) return;
  if (!desktopHeader.matches) {
    siteHeader.classList.remove('is-nav-collapsed');
    return;
  }
  const collapsed = siteHeader.classList.contains('is-nav-collapsed');
  if (!collapsed && window.scrollY > 80) siteHeader.classList.add('is-nav-collapsed');
  else if (collapsed && window.scrollY <= 8) siteHeader.classList.remove('is-nav-collapsed');
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
  const open = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
});
menuLinks.forEach((link) => link.addEventListener('click', closeMenu));

const causeCards = document.querySelectorAll('.cause-card');
causeCards.forEach((card) => {
  const toggleCard = () => {
    const expand = !card.classList.contains('is-expanded');
    causeCards.forEach((item) => {
      item.classList.remove('is-expanded');
      item.setAttribute('aria-expanded', 'false');
    });
    card.classList.toggle('is-expanded', expand);
    card.setAttribute('aria-expanded', String(expand));
  };
  card.addEventListener('click', toggleCard);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCard();
    }
  });
});

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
  }, { threshold: .12 });
  revealItems.forEach((item) => observer.observe(item));
}
