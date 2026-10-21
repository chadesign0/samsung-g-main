const conditionKey = document.body.dataset.condition;

const conditions = {
  'lumbar-disc': {
    title: '허리디스크', subtitle: '편안한 일상을 위한 맞춤 허리 진료',
    description: '허리디스크는 척추뼈 사이의 디스크가 돌출되어 주변 신경을 압박하면서<br>허리 통증과 다리 저림을 유발하는 질환입니다.',
    hero: '../assets/subpages/lumbar-disc/hero-lumbar-disc-v2.png',
    causeTitle: '허리디스크<br>통증이 시작될 때 관리해야 합니다',
    causeIntro: '통증이 잠시 줄어들더라도 돌출된 디스크가 신경을 계속 압박하면 허리 통증과 다리 저림이 심해질 수 있습니다.<br>허리를 숙이거나 오래 앉아 있을 때 불편함이 나타난다면 초기에 상태를 확인해야 합니다.',
    causes: [['퇴행성 변화', '나이가 들면서 디스크의 수분과 탄력이 감소해 손상되기 쉬워집니다.'], ['잘못된 자세', '허리를 구부정하게 유지하면 디스크에 부담이 커질 수 있습니다.'], ['반복되는 허리 부담', '허리를 반복적으로 사용하는 동작이 원인이 될 수 있습니다.'], ['갑작스러운 충격', '무리한 동작이나 디스크가 손상되면서 증상이 발생할 수 있습니다.']],
    symptomTitle: '허리 통증과 다리 저림,<br>몸이 보내는 경고입니다',
    symptomIntro: '허리를 숙일 때 통증이 심해지고, 한쪽 다리까지 저리거나 당길 수 있습니다.<br>이러한 증상이 반복된다면 허리디스크로 인한 신경 압박을 확인해 보세요.',
    symptoms: ['허리를 숙이거나 오래 앉을 때 심해지는 통증', '엉덩이부터 다리까지 이어지는 방사통', '다리가 저리거나 감각이 둔해지는 증상', '다리에 힘이 빠지거나 걷기 불편한 증상'],
    treatmentTitle: '증상과 신경 압박 정도에 맞춘<br>치료가 필요합니다',
    treatmentIntro: '초기에는 약물치료와 물리·운동치료를 통해 통증을 줄이고 허리 기능을 회복합니다.<br>증상이 지속되거나 통증이 심한 경우에는 상태에 따라 주사치료를 시행할 수 있습니다.',
    treatmentTexts: ['진통·소염제 등을 활용해 허리 통증과 신경 주변의 염증을 완화합니다.', '허리 주변 근육을 강화하고 자세와 척추 안정성을 개선하도록 돕습니다.', '증상과 신경 압박 상태에 따라 염증과 통증을 줄이는 주사치료를 시행합니다.'],
  },
  'lumbar-spinal-stenosis': {
    title: '척추관협착증', subtitle: '걷다가 자꾸 멈춰 서게 된다면 살펴보세요',
    description: '신경이 지나가는 척추관이 좁아지면 허리뿐 아니라<br>엉덩이와 다리에 저림, 통증, 힘 빠짐이 나타날 수 있습니다.',
    hero: '../assets/subpages/lumbar-disc/hero-lumbar-stenosis.png',
    causeTitle: '좁아진 신경 통로,<br>대부분 서서히 진행되는 변화에서 시작됩니다',
    causeIntro: '디스크와 관절이 노화되거나 주변 인대가 두꺼워지면 신경이 지나가는 공간이 좁아져 증상이 발생할 수 있습니다.',
    causes: [['척추의 퇴행성 변화', '노화로 척추 관절이 변형되면서 척추관 내부 공간이 점차 좁아질 수 있습니다.'], ['디스크의 변화', '디스크가 뒤쪽으로 돌출되면 신경이 지나가는 공간을 압박할 수 있습니다.'], ['인대 비후와 뼈돌기', '인대가 두꺼워지거나 뼈돌기가 자라면서 신경 통로가 좁아질 수 있습니다.'], ['선천적으로 좁은 척추관', '태어날 때부터 척추관이 좁은 경우에는 증상이 나타날 수 있습니다.']],
    symptomTitle: '오래 걸을수록 심해지는 다리 통증,<br>잠시 쉬면 편안해지기도 합니다',
    symptomIntro: '서 있거나 걸을 때 엉덩이와 다리가 아프고 저리지만 앉거나 허리를 앞으로 숙이면 증상이 줄어드는 특징이 있습니다.',
    symptoms: ['걸을수록 심해지는 엉덩이와 다리 통증', '종아리와 발까지 이어지는 저림과 감각 저하', '다리에 힘이 빠지거나 무거워지는 느낌', '앉거나 허리를 숙였을 때 완화되는 증상'],
    treatmentTitle: '신경 압박과 보행 상태를 확인해<br>현재 증상에 맞는 치료를 적용합니다',
    treatmentIntro: '초기에는 통증과 신경 주변의 염증을 줄이고 허리를 지지하는 근육의 기능을 회복하는 치료를 시행할 수 있습니다.',
    treatmentTexts: ['진통·소염제 등을 활용하여 허리와 다리에 나타나는 통증을 조절합니다.', '상태에 맞는 근육 이완과 움직임 치료를 통해 허리의 부담을 줄이고 신체 기능 회복을 돕습니다.', '신경 주변의 염증과 통증을 줄이는 데 도움을 주며 증상과 검사 결과에 따라 적용 여부를 결정합니다.'],
  },
  'lumbar-spondylolisthesis': {
    title: '척추전방전위증', subtitle: '밀려난 척추가 신경을 자극할 수 있습니다',
    description: '위쪽 척추뼈가 아래쪽보다 앞으로 밀려나면<br>허리 통증과 함께 엉덩이·다리까지 불편함이 이어질 수 있습니다.',
    hero: '../assets/subpages/lumbar-disc/hero-lumbar-spondylolisthesis.png',
    causeTitle: '척추가 앞으로 밀리는 이유,<br>발생 유형에 따라 다르게 나타납니다',
    causeIntro: '척추 관절의 노화나 뼈의 결손, 선천적인 구조 이상 등으로 척추의 안정성이 약해지면서 발생할 수 있습니다.',
    causes: [['척추의 퇴행성 변화', '노화되어 척추를 지지하는 힘이 약해지면 위쪽 척추뼈가 앞으로 밀릴 수 있습니다.'], ['척추분리증', '연결 부위에 결손이 생기면 척추가 불안정해져 전방전위증으로 이어질 수 있습니다.'], ['선천적인 구조 이상', '태어날 때부터 모양이 약하면 성장 과정에서 척추가 이동할 수 있습니다.'], ['외상 및 뼈 질환', '뼈를 약하게 만드는 질환으로 인해 척추의 정상적인 배열이 달라질 수 있습니다.']],
    symptomTitle: '허리를 펴거나 오래 서 있을 때<br>통증이 더욱 뚜렷해질 수 있습니다',
    symptomIntro: '밀려난 척추가 주변 신경을 압박하면 허리뿐 아니라 엉덩이와 다리까지 통증이나 저림이 이어질 수 있습니다.',
    symptoms: ['반복되는 허리 통증과 뻣뻣함', '엉덩이부터 다리까지 이어지는 통증과 저림', '오래 서 있거나 걸을 때 심해지는 불편함', '다리에 힘이 빠지거나 걷기 어려운 증상'],
    treatmentTitle: '척추의 이동 정도와 신경 상태를 확인해<br>허리의 안정성을 높이는 치료를 적용합니다',
    treatmentIntro: '초기에는 통증을 줄이고 척추 주변 근육의 기능을 강화하여 허리에 가해지는 부담을 줄이는 치료를 시행할 수 있습니다.',
    treatmentTexts: ['진통·소염제 등을 활용하여 허리와 다리에 나타나는 통증을 완화합니다.', '척추의 안정성을 고려해 긴장된 근육을 이완하고 허리 주변의 균형과 움직임 회복을 돕습니다.', '압박된 신경 주변의 염증과 통증을 줄이는 데 도움을 주며 증상과 검사 결과에 따라 적용합니다.'],
  },
  'lumbar-spondylolysis': {
    title: '척추분리증', subtitle: '반복되는 허리 통증을 가볍게 넘기지 마세요',
    description: '척추뼈 뒤쪽 연결 부위에 미세한 균열이나 결손이 생기면<br>활동할 때 허리 통증이 반복적으로 나타날 수 있습니다.',
    hero: '../assets/subpages/lumbar-disc/hero-lumbar-spondylolysis.png',
    causeTitle: '척추뼈의 약한 연결 부위,<br>반복적인 허리 부담으로 손상될 수 있습니다',
    causeIntro: '허리를 자주 뒤로 젖히거나 강한 충격이 반복되면 척추뼈 연결 부위에 피로가 쌓여 균열이 발생할 수 있습니다.',
    causes: [['반복적인 허리 과신전', '허리를 젖히는 동작이 반복되면 척추뼈 뒤쪽에 지속적인 부담이 가해질 수 있습니다.'], ['과도한 운동과 신체활동', '허리를 많이 사용하는 운동은 척추에 반복적인 충격을 줄 수 있습니다.'], ['선천적으로 약한 뼈 구조', '연결 부위가 약한 경우에는 비교적 작은 부담에도 손상이 발생할 수 있습니다.'], ['성장기의 반복 손상', '허리를 무리하게 사용하면 척추분리증이 나타날 가능성이 커질 수 있습니다.']],
    symptomTitle: '활동할 때 심해지는 허리 통증,<br>휴식하면 줄어들기도 합니다',
    symptomIntro: '허리를 뒤로 젖히거나 운동한 뒤 통증이 심해지고 엉덩이나 허벅지 뒤쪽까지 불편함이 이어질 수 있습니다.',
    symptoms: ['허리 중앙에서 반복되는 뻐근한 통증', '허리를 뒤로 젖힐 때 심해지는 불편함', '운동이나 신체활동 후 증가하는 허리 통증', '엉덩이와 허벅지 뒤쪽으로 이어지는 통증'],
    treatmentTitle: '척추 안정성 확인과<br>허리 부담 완화',
    treatmentIntro: '초기에는 통증을 유발하는 활동을 조절하면서 주변 근육을 강화하고 허리의 안정성을 높이는 치료를 시행합니다.',
    treatmentTexts: ['진통·소염제 등을 활용하여 허리의 통증과 염증을 완화합니다.', '척추 상태를 고려해 긴장된 근육을 이완하고 허리 주변의 균형과 움직임 회복을 돕습니다.', '통증이 지속되는 부위를 확인한 후 적용하며 염증과 불편함을 줄이는 데 도움을 줍니다.'],
  },
  'acute-low-back-pain': {
    title: '급성 허리통증', subtitle: '갑자기 시작된 통증에도 원인이 있습니다',
    description: '허리 근육이나 인대가 손상되면 움직이기 어려울 정도로<br>통증과 뻣뻣함이 갑작스럽게 나타날 수 있습니다.',
    hero: '../assets/subpages/lumbar-disc/hero-acute-low-back-pain.png',
    causeTitle: '예고 없이 찾아온 허리 통증,<br>일상의 작은 움직임에서도 시작될 수 있습니다',
    causeIntro: '무거운 물건을 들거나 허리를 갑자기 비트는 동작은 근육과 인대, 척추 구조물에 부담을 줄 수 있습니다.',
    causes: [['무거운 물건 들기', '허리의 힘만으로 들어 올리면 근육과 인대가 손상될 수 있습니다.'], ['갑작스러운 움직임', '숙이거나 비트는 동작으로 인해 주변 조직에 무리가 생길 수 있습니다.'], ['잘못된 자세', '불안정한 자세가 지속되면 허리에 부담이 쌓여 통증이 발생할 수 있습니다.'], ['디스크와 관절의 자극', '갑작스러운 압력이 가해지면 염증과 통증이 나타날 수 있습니다.']],
    symptomTitle: '움직이는 순간 나타나는 날카로운 통증,<br>허리가 굳은 듯 불편할 수 있습니다',
    symptomIntro: '허리를 숙이거나 일어설 때 통증이 심해지고 주변 근육이 긴장하면서 움직임이 제한될 수 있습니다.',
    symptoms: ['갑작스럽게 나타나는 찌르는 듯한 허리 통증', '허리를 숙이거나 펴기 어려운 증상', '허리 주변 근육의 긴장과 경직', '엉덩이나 다리까지 이어지는 통증'],
    treatmentTitle: '통증이 시작된 원인을 확인해<br>허리의 움직임을 단계적으로 회복합니다',
    treatmentIntro: '무리한 동작을 줄이고 통증이 심한 시기에는 상태에 맞춰 약물치료와 움직임 회복치료를 적용합니다.',
    treatmentTexts: ['진통·소염제나 근육 이완제 등을 활용하여 통증과 근육의 긴장을 완화합니다.', '통증 상태를 고려해 긴장된 근육을 이완하고 허리의 움직임과 신체 균형 회복을 돕습니다.', '통증이 심하거나 신경 자극이 동반된 경우 원인 부위를 확인해 선택적으로 적용합니다.'],
  },
  'lumbar-myofascial-pain': {
    title: '근막통증증후군', subtitle: '쉬어도 남는 뻐근함을 살펴보세요',
    description: '허리 근육과 근막에 통증 유발점이 생기면<br>묵직한 통증이 지속되거나 주변으로 번질 수 있습니다.',
    hero: '../assets/subpages/lumbar-disc/hero-lumbar-myofascial.png',
    causeTitle: '허리 근육에 쌓인 긴장,<br>통증 유발점으로 이어질 수 있습니다',
    causeIntro: '잘못된 자세와 반복적인 허리 사용으로 근육이 긴장하면 충분히 쉬어도 쉽게 풀리지 않는 통증이 나타날 수 있습니다.',
    causes: [['장시간 앉아 있는 자세', '허리를 굽힌 채 오래 앉아 있으면 특정 근육에 부담이 집중될 수 있습니다.'], ['반복적인 허리 사용', '같은 동작을 반복하면 허리 근육에 피로가 쌓일 수 있습니다.'], ['갑작스러운 근육 손상', '허리를 빠르게 움직이면 근육과 근막이 손상될 수 있습니다.'], ['근육 불균형', '잘못된 자세가 지속되면 허리 주변 근육의 균형이 흐트러질 수 있습니다.']],
    symptomTitle: '한 곳을 눌렀는데 주변까지 아프다면,<br>통증 유발점을 확인해 보세요',
    symptomIntro: '단단하게 뭉친 허리 근육을 눌렀을 때 통증이 심해지고 엉덩이나 골반 주변까지 불편함이 이어질 수 있습니다.',
    symptoms: ['깊고 묵직하게 지속되는 허리 통증', '누르면 통증이 재현되는 단단한 부위', '엉덩이와 골반 주변으로 번지는 통증', '허리가 굳은 듯한 느낌과 움직임 제한'],
    treatmentTitle: '굳어진 근육과 통증 유발점을 확인해<br>허리의 편안한 움직임을 회복합니다',
    treatmentIntro: '통증이 발생한 근육과 생활 습관을 살펴본 뒤 긴장을 완화하고 움직임을 개선하는 치료를 시행합니다.',
    treatmentTexts: ['진통·소염제나 근육 이완제 등을 활용하여 통증과 근육의 긴장을 완화합니다.', '굳어진 근육과 근막을 부드럽게 이완하여 허리의 움직임과 근육 균형 회복을 돕습니다.', '통증 유발점을 확인해 해당 부위에 적용하며 반복되는 근육 통증을 줄이는 데 도움을 줍니다.'],
  },
};

const tabs = [
  ['lumbar-disc', '허리디스크', 'lumbar-disc.html'],
  ['lumbar-spinal-stenosis', '척추관협착증', 'lumbar-spinal-stenosis.html'],
  ['lumbar-spondylolisthesis', '척추전방전위증', 'lumbar-spondylolisthesis.html'],
  ['lumbar-spondylolysis', '척추분리증', 'lumbar-spondylolysis.html'],
  ['acute-low-back-pain', '급성 허리통증', 'acute-low-back-pain.html'],
  ['lumbar-myofascial-pain', '근막통증증후군', 'lumbar-myofascial-pain.html'],
];

const condition = conditions[conditionKey] || conditions['lumbar-disc'];
const main = document.querySelector('#main');
const tabMarkup = tabs.map(([key, label, href]) => `<a href="${href}"${key === conditionKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const causeMarkup = condition.causes.map(([title, description]) => `<article class="cause-card reveal"><h3>${title}</h3><span class="cause-divider" aria-hidden="true"></span><p>${description}</p></article>`).join('');
const symptomMarkup = condition.symptoms.map((symptom) => `<li><span aria-hidden="true">✓</span>${symptom}</li>`).join('');

if (main) {
  main.innerHTML = `
    <section class="disease-hero" aria-labelledby="disease-title" style="--hero-image:url('${condition.hero}')"><div class="disease-hero-shade"></div><div class="disease-hero-inner reveal"><p class="breadcrumb"><span class="home-mark" aria-hidden="true">⌂</span> 삼성G정형외과 <span aria-hidden="true">›</span> 척추 클리닉 <span aria-hidden="true">›</span> 허리 <span aria-hidden="true">›</span> ${condition.title}</p><h1 id="disease-title">${condition.title}</h1><h2>${condition.subtitle}</h2><p>${condition.description}</p></div><nav class="disease-tabs" aria-label="허리 질환 종류">${tabMarkup}</nav></section>
    <section class="causes" aria-labelledby="causes-title"><div class="section-inner"><div class="section-heading reveal"><h2 id="causes-title">${condition.causeTitle}</h2><p>${condition.causeIntro}</p></div><div class="cause-grid" aria-label="${condition.title}의 주요 원인">${causeMarkup}</div></div></section>
    <section class="symptoms" aria-labelledby="symptoms-title"><div class="symptoms-shade"></div><div class="symptoms-inner section-inner"><div class="symptoms-copy reveal"><h2 id="symptoms-title">${condition.symptomTitle}</h2><p>${condition.symptomIntro}</p><ul class="symptom-checklist" aria-label="${condition.title}의 대표 증상">${symptomMarkup}</ul></div></div></section>
    <section class="treatments" aria-labelledby="treatments-title"><div class="section-inner"><div class="section-heading reveal"><h2 id="treatments-title">${condition.treatmentTitle}</h2><p>${condition.treatmentIntro}</p></div><div class="treatment-list">
      <article class="treatment-row reveal"><img src="../assets/subpages/lumbar-disc/treatment-medication.png" alt="약물치료 이미지"><div class="treatment-copy"><span class="check-mark" aria-hidden="true">✓</span><h3>약물치료</h3><p>${condition.treatmentTexts[0]}</p></div></article>
      <article class="treatment-row treatment-row-reverse reveal"><div class="treatment-copy"><span class="check-mark" aria-hidden="true">✓</span><h3>물리·운동치료</h3><p>${condition.treatmentTexts[1]}</p></div><img src="../assets/subpages/lumbar-disc/treatment-physical-lumbar.png" alt="물리 운동치료 이미지"></article>
      <article class="treatment-row reveal"><img src="../assets/subpages/lumbar-disc/treatment-injection.png" alt="주사치료 이미지"><div class="treatment-copy"><span class="check-mark" aria-hidden="true">✓</span><h3>주사치료</h3><p>${condition.treatmentTexts[2]}</p></div></article>
    </div></div></section>
`;
}

document.title = `${condition.title} | 삼성G정형외과`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `삼성G정형외과 ${condition.title} 진료 안내`);

const menuButton = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.main-nav a');
const siteHeader = document.querySelector('.site-header');
const desktopHeader = window.matchMedia('(min-width: 801px)');
let headerAnimationFrame = 0;

function updateHeaderNavigation() {
  headerAnimationFrame = 0;
  if (!siteHeader) return;
  if (!desktopHeader.matches) { siteHeader.classList.remove('is-nav-collapsed'); return; }
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
