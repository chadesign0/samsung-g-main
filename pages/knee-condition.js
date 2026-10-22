const kneeConditions = {
  osteoarthritis: {
    title: '퇴행성무릎관절염', hero: '../assets/subpages/knee/hero-osteoarthritis.jpg', heroPosition: 'center 49%',
    subtitle: '계단을 오르내릴 때의 통증부터 살펴보세요',
    description: '무릎을 보호하는 연골이 점차 닳으며 관절 사이의 마찰이 커져<br />통증과 뻣뻣함이 반복적으로 나타날 수 있습니다.',
    introTitle: '서서히 닳아가는 무릎 연골,<br />다양한 요인이 변화를 앞당길 수 있습니다',
    introText: '나이가 들면서 연골의 탄력과 회복력이 감소하고, 반복되는 움직임으로 무릎의 부담이 쌓이면 관절의 마모가 점차 빨라질 수 있습니다.<br />연골이 얇아져 뼈 사이의 마찰이 증가하면 염증과 통증이 발생하고, 무릎이 뻣뻣하거나 움직임이 불편해질 수 있습니다.',
    causeTitle: '퇴행성 무릎관절염의 주요 원인',
    causes: ['노화로 인한 변화', '반복적인 무릎 사용', '과거의 무릎 손상', '체중 증가와 근력 저하', '무릎 정렬의 불균형'],
    symptomTitle: '움직일 때 아프고 쉬고 나면 뻣뻣하다면,<br />무릎 관절의 변화를 확인해 보세요',
    symptomIntro: '관절 내 연골이 닳으며 통증이 심해지고<br />오래 쉬었다가 움직이면 무릎이 굳은 듯 느껴질 수 있습니다.',
    symptoms: ['걷거나 계단을 오르내릴 때 나타나는 통증', '앉았다 일어설 때 느껴지는 무릎 뻣뻣함', '관절 주변의 붓기와 열감', '움직일 때 발생하는 마찰음과 힘 빠짐'],
    treatmentTitle: '연골 상태와 무릎 기능을 확인해<br />관절의 부담을 줄이는 치료를 적용합니다',
    treatmentIntro: '통증의 정도와 진행 상태를 살펴 근육을 강화하고<br />관절의 안정성과 움직임을 유지하도록 돕습니다.',
    treatments: [['약물치료', '진통·소염제를 활용하여 무릎 관절의 통증과 염증을 완화합니다.', 'medication'], ['물리·운동치료', '굳어진 관절의 움직임을 부드럽게 하고 무릎 주변 근육의 균형과 기능 회복을 돕습니다.', 'exercise'], ['주사치료', '관절의 염증과 통증 상태를 확인해 적용하며 움직임의 불편함을 줄이는 데 도움을 줍니다.', 'injection']],
  },
  meniscus: {
    title: '반월상연골판 손상', hero: '../assets/subpages/knee/hero-meniscus-tear.jpg', heroPosition: 'center 52%',
    subtitle: '무릎 안쪽의 통증과 걸리는 느낌을 살펴보세요',
    description: '무릎 사이에서 충격을 흡수하는 반월상연골판이 손상되면<br />통증과 붓기, 관절의 걸리는 증상이 나타날 수 있습니다.',
    introTitle: '무릎의 충격을 나누는 연골판,<br />비틀림과 퇴행에 약해질 수 있습니다',
    introText: '반월상연골판은 허벅지뼈와 정강이뼈 사이에서 하중을 분산하고 관절의 안정성을 돕습니다.<br />갑작스러운 회전이나 퇴행성 변화로 손상되면 무릎을 굽히고 펴는 동작이 불편해질 수 있습니다.',
    causeTitle: '반월상연골판 손상의 주요 원인',
    causes: ['갑작스러운 방향 전환', '발을 딛고 무릎 비틀기', '운동 중 충돌과 외상', '노화에 따른 조직 변화', '약해진 연골판의 손상'],
    symptomTitle: '무릎이 붓고 걸리는 느낌이 든다면,<br />연골판의 손상을 확인해 보세요',
    symptomIntro: '관절 안쪽이나 바깥쪽에 아프고 무릎이 걸리거나<br />끝까지 펴지지 않는 느낌이 동반될 수 있습니다.',
    symptoms: ['관절 안쪽·바깥쪽의 통증', '활동 후 반복되는 붓기', '굽히고 펼 때 걸리는 느낌', '무릎이 잠기거나 힘이 빠짐'],
    treatmentTitle: '손상의 위치와 형태를 확인해<br />무릎 기능을 지키는 치료를 계획합니다',
    treatmentIntro: '통증과 잠김 증상, 일상생활에 불편한 정도에 따라<br />보존적 치료와 수술적 치료의 필요성을 판단합니다.',
    treatments: [['통증 조절', '활동량을 조절하고 필요에 따라 약물로 통증과 붓기를 줄입니다.', 'medication'], ['운동·재활치료', '관절의 움직임과 주변 근육을 회복하도록 단계적으로 운동합니다.', 'exercise'], ['수술 필요성 평가', '잠김이나 통증이 지속되는 경우 손상 형태를 확인해 치료 방향을 검토합니다.', 'consult']],
  },
  cruciate: {
    title: '십자인대 손상', hero: '../assets/subpages/knee/hero-cruciate-injury.jpg', heroPosition: 'center 48%',
    subtitle: '무릎이 꺾이거나 흔들리는 느낌을 확인하세요',
    description: '무릎의 앞뒤 움직임과 회전을 조절하는 십자인대가 손상되면<br />관절이 불안정해지고 통증과 붓기가 생길 수 있습니다.',
    introTitle: '무릎의 안정성을 지키는 인대,<br />강한 충격과 회전에 손상될 수 있습니다',
    introText: '전방·후방십자인대는 무릎 안에서 정강이뼈가 지나치게 움직이지 않도록 잡아줍니다.<br />급격한 방향 전환이나 착지, 무릎 뒤쪽 충격으로 인대가 손상되면 관절의 안정성이 떨어집니다.',
    causeTitle: '십자인대 손상의 주요 원인',
    causes: ['급격한 방향 전환', '불안정한 점프 착지', '굽힌 무릎에 강한 충격', '과도한 회전과 젖힘', '운동 중 충돌과 외상'],
    symptomTitle: '다친 뒤 붓고 무릎이 흔들린다면,<br />인대의 안정성을 확인해 보세요',
    symptomIntro: '손상 당시 무릎에서 소리가 나거나 통증과 붓기가 생기며<br />걷거나 방향을 바꿀 때 무릎이 빠지는 듯할 수 있습니다.',
    symptoms: ['손상 당시 느끼는 통증과 소리', '다친 뒤 나타나는 무릎 붓기', '방향 전환 시 꺾이는 느낌', '걷거나 체중을 싣기 어려움'],
    treatmentTitle: '인대의 손상 정도와 활동 수준에 맞춰<br />안정성을 회복하는 치료를 계획합니다',
    treatmentIntro: '전방·후방 인대의 상태와 동반 손상을 고려하여<br />보조기, 재활치료와 수술의 필요성을 판단합니다.',
    treatments: [['초기 통증 관리', '부하를 줄이고 필요에 따라 약물·보조기로 무릎을 보호합니다.', 'brace'], ['단계별 재활치료', '움직임과 근력, 균형을 회복하며 일상과 운동 복귀를 준비합니다.', 'exercise'], ['수술 필요성 평가', '지속되는 불안정성이나 동반 손상은 인대 재건 등 수술을 검토합니다.', 'consult']],
  },
  cartilage: {
    title: '무릎 연골 손상', hero: '../assets/subpages/knee/hero-cartilage-injury.jpg', heroPosition: 'center 54%',
    subtitle: '움직일 때 반복되는 관절 깊은 통증을 살펴보세요',
    description: '뼈의 끝을 덮어 움직임을 부드럽게 하는 관절연골이 손상되면<br />무릎의 통증과 붓기, 움직임의 불편함이 생길 수 있습니다.',
    introTitle: '부드러운 움직임을 돕는 관절연골,<br />손상 범위에 맞춘 관리가 필요합니다',
    introText: '관절연골은 뼈 표면의 마찰을 줄여주는 조직으로 반복된 압박이나 외상에 의해 손상될 수 있습니다.<br />회복이 어렵고 손상이 진행되면 통증이 심해져 범위와 깊이에 따라 치료가 달라집니다.',
    causeTitle: '무릎 연골 손상의 주요 원인',
    causes: ['무릎에 가해진 외상', '반복되는 관절 부하', '인대·연골판 동반 손상', '관절 정렬의 불균형', '시간에 따른 연골 마모'],
    symptomTitle: '무릎 깊은 곳이 아프고 붓는다면,<br />관절연골의 상태를 확인해 보세요',
    symptomIntro: '체중을 싣거나 활동한 뒤 통증과 붓기가 반복되고<br />무릎이 뻣뻣하거나 걸리는 듯한 느낌이 생길 수 있습니다.',
    symptoms: ['체중을 실을 때 깊은 통증', '활동 뒤 반복되는 관절 붓기', '무릎을 움직일 때 뻣뻣함', '굽히고 펼 때 걸리는 느낌'],
    treatmentTitle: '손상 부위와 깊이를 살펴<br />관절의 부담을 줄이는 치료를 계획합니다',
    treatmentIntro: '통증과 기능을 조절하는 치료를 우선 고려하며<br />손상 범위와 동반 질환에 따라 치료 방향을 정합니다.',
    treatments: [['통증·부하 관리', '통증을 유발하는 활동을 조절하고 필요에 따라 약물치료를 적용합니다.', 'medication'], ['운동·재활치료', '무릎 주변 근력을 강화하고 관절에 가해지는 부담을 조절합니다.', 'exercise'], ['연골 치료 평가', '국소 손상의 크기와 상태에 따라 연골 복원술 등의 재생술을 살펴봅니다.', 'consult']],
  },
  patellofemoral: {
    title: '슬개대퇴통증증후군', hero: '../assets/subpages/knee/hero-patellofemoral-pain.jpg', heroPosition: 'center 54%',
    subtitle: '계단과 쪼그려 앉기에서 앞무릎 통증이 있나요?',
    description: '무릎뼈 주변이나 뒤쪽에 통증이 나타나는 질환으로<br />반복되는 부하와 근력·움직임의 불균형이 관련될 수 있습니다.',
    introTitle: '무릎 앞쪽에 반복되는 통증,<br />생활 동작과 근력 균형을 살펴봅니다',
    introText: '슬개대퇴통증증후군은 무릎뼈 주변과 뒤쪽의 통증을 말하며 운동을 하지 않아도 생깁니다.<br />반복된 부하나 무릎뼈의 움직임 변화가 관련되며 관절염 등 다른 원인과 구분하는 것이 필요합니다.',
    causeTitle: '슬개대퇴통증증후군의 주요 원인',
    causes: ['달리기·점프의 반복', '갑자기 늘어난 운동량', '허벅지·엉덩이 근력 저하', '무릎뼈 움직임의 불균형', '반복되는 무릎 굽힘'],
    symptomTitle: '계단이나 오래 앉은 뒤 앞무릎이 아프다면,<br />무릎뼈 주변의 부담을 확인해 보세요',
    symptomIntro: '계단을 오르내리거나 쪼그려 앉을 때 아프고<br />무릎을 굽힌 채 오래 앉아 있어도 통증이 생길 수 있습니다.',
    symptoms: ['무릎뼈 주변의 둔한 통증', '계단을 오르내릴 때 통증', '쪼그려 앉을 때 앞무릎 통증', '오래 앉아 있다 일어날 때 통증'],
    treatmentTitle: '운동량과 움직임을 조절하고<br />무릎을 지지하는 근력을 회복합니다',
    treatmentIntro: '활동 조절과 운동치료를 중심으로 통증을 관리하며<br />일상 동작에서 무릎에 쌓이는 부담을 줄입니다.',
    treatments: [['활동·통증 조절', '통증을 유발하는 운동을 조절하고 필요에 따라 진통제를 사용합니다.', 'medication'], ['근력·운동치료', '허벅지와 엉덩이 근육을 강화하고 무릎의 움직임을 함께 조절합니다.', 'exercise'], ['지속 통증 평가', '통증이 이어지는 다른 원인을 살펴 보조 치료와 치료 방향을 조정합니다.', 'consult']],
  },
  tendinitis: {
    title: '무릎 힘줄염', hero: '../assets/subpages/knee/hero-tendinitis.jpg', heroPosition: 'center 52%',
    subtitle: '뛰거나 계단을 오를 때 힘줄 부위가 아픈가요?',
    description: '슬개건 등 무릎 힘줄에 반복적인 부담이 쌓이면<br />국소 통증이 생기고 운동과 일상 동작이 불편해질 수 있습니다.',
    introTitle: '반복된 부하로 예민해진 힘줄,<br />회복 단계에 맞는 운동이 필요합니다',
    introText: '무릎 힘줄은 허벅지 근육의 힘을 전달하며 무릎을 펴고 몸을 지탱하는 동작을 돕습니다.<br />단단해진 슬개건 주변은 충격에 예민해지며 운동 부하와 회복 상태를 함께 확인해야 합니다.',
    causeTitle: '무릎 힘줄염의 주요 원인',
    causes: ['반복되는 점프와 달리기', '갑작스러운 운동량 증가', '회복 시간의 부족', '허벅지 근력의 저하', '근육·힘줄의 유연성 저하'],
    symptomTitle: '뛸 때 아프고 힘줄을 누르면 아프다면,<br />무릎에 쌓인 부담을 확인해 보세요',
    symptomIntro: '무릎뼈 아래 등 힘줄 부위가 아프고 누르면 민감하며<br />운동 중이나 운동 뒤에 통증이 심해질 수 있습니다.',
    symptoms: ['무릎뼈 아래 힘줄 부위 통증', '힘줄 부위를 누를 때 압통', '점프·달리기 중 심해지는 통증', '계단을 오르거나 무릎을 펼 때 통증'],
    treatmentTitle: '힘줄에 가해지는 부담을 조절하고<br />점진적인 운동으로 기능을 회복합니다',
    treatmentIntro: '통증을 유발하는 동작을 조절하고 과도한 운동을 피하며<br />증상에 맞춰 운동 강도를 높여갑니다.',
    treatments: [['부하·통증 관리', '운동량을 조절하고 필요에 따라 약물로 단기적인 통증을 줄입니다.', 'medication'], ['점진적 운동치료', '스트레칭과 단계적인 근력운동으로 힘줄의 부하를 견디도록 돕습니다.', 'exercise'], ['지속 통증 평가', '호전이 없으면 힘줄 상태를 재평가해 추가 치료의 필요성을 판단합니다.', 'consult']],
  },
  sports: {
    title: '스포츠 무릎 손상', hero: '../assets/subpages/knee/hero-sports-injury.jpg', heroPosition: 'center 50%',
    subtitle: '운동 중 다친 무릎, 손상 부위부터 확인하세요',
    description: '회전과 착지, 충돌이 많은 운동 중에는 인대와 연골판 등<br />여러 조직이 함께 손상되어 통증과 불안정성이 생길 수 있습니다.',
    introTitle: '운동 중 갑자기 다친 무릎,<br />손상된 구조와 기능을 함께 살펴봅니다',
    introText: '스포츠 무릎 손상은 인대와 연골판, 힘줄 등 여러 조직의 손상을 포함하는 넓은 개념입니다.<br />다친 상황과 붓기, 불안정한 느낌을 확인하고 동반 손상 여부에 맞춰 치료를 계획합니다.',
    causeTitle: '스포츠 무릎 손상의 주요 원인',
    causes: ['급정지와 방향 전환', '불안정한 점프 착지', '상대 선수와의 충돌', '넘어지며 무릎 비틀림', '반복되는 과도한 부하'],
    symptomTitle: '운동 후 붓고 체중을 싣기 어렵다면,<br />무릎의 손상 부위를 확인해 보세요',
    symptomIntro: '손상 부위에 따라 통증과 붓기, 잠김, 불안정성이 나타납니다.<br />심한 통증이나 보행 어려움이 있다면 조기에 평가가 필요합니다.',
    symptoms: ['운동 중 갑자기 나타난 통증', '다친 뒤 생긴 붓기와 뻣뻣함', '무릎이 걸리거나 흔들리는 느낌', '체중을 싣거나 걷기 어려움'],
    treatmentTitle: '손상 조직과 운동 목표에 맞춰<br />안전한 복귀를 위한 치료를 계획합니다',
    treatmentIntro: '급성기에는 무릎을 보호하고 통증을 조절하며<br />기능 회복 정도를 확인하면서 운동에 복귀합니다.',
    treatments: [['초기 보호·관리', '부하를 줄이고 상태에 따라 약물·보조기로 통증을 관리합니다.', 'model'], ['기능 회복 재활', '근력과 균형, 동작 조절 능력을 회복해 단계적으로 운동에 복귀합니다.', 'exercise'], ['동반 손상 평가', '인대·연골판 등 손상 정도에 따라 수술을 포함한 치료 방향을 정합니다.', 'consult']],
  },
};

const pageKey = document.body.dataset.condition;
const page = kneeConditions[pageKey] || kneeConditions.osteoarthritis;
const tabs = [
  ['osteoarthritis','퇴행성무릎관절염','knee-osteoarthritis.html'], ['meniscus','반월상연골판 손상','meniscus-tear.html'],
  ['cruciate','십자인대 손상','cruciate-ligament-injury.html'], ['cartilage','무릎 연골 손상','knee-cartilage-injury.html'],
  ['patellofemoral','슬개대퇴통증증후군','patellofemoral-pain-syndrome.html'], ['tendinitis','무릎 힘줄염','knee-tendinitis.html'],
  ['sports','스포츠 무릎 손상','sports-knee-injury.html'],
];
const treatmentImages = {
  medication: '../assets/subpages/frozen-shoulder/treatment-medication.png',
  exercise: '../assets/subpages/hand/treatment-exercise.jpg',
  injection: '../assets/subpages/frozen-shoulder/treatment-injection.jpg',
  consult: '../assets/subpages/shoulder/treatment-consultation.jpg',
  brace: '../assets/subpages/knee/treatment-knee-brace.jpg',
  model: '../assets/subpages/knee/treatment-knee-model.jpg',
};

document.title = `${page.title} | 삼성G정형외과`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `삼성G정형외과 ${page.title} 진료 안내`);
const tabMarkup = tabs.map(([key,label,href]) => `<a href="${href}"${key === pageKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const causeMarkup = page.causes.map((title) => `<li><strong>${title}</strong></li>`).join('');
const symptomMarkup = page.symptoms.map((item) => `<li><span aria-hidden="true">✓</span>${item}</li>`).join('');
const treatmentMarkup = page.treatments.map(([title,description,image]) => `<article class="knee-treatment-step"><img src="${treatmentImages[image]}" alt="${title} 안내 이미지" /><span class="knee-step-check" aria-hidden="true">✓</span><h3>${title}</h3><p>${description}</p></article>`).join('');

if (!document.querySelector('#main').hasAttribute('data-prerendered')) document.querySelector('#main').innerHTML = `
  <section class="disease-hero" style="--hero-image:url('${page.hero}');--hero-position:${page.heroPosition}" aria-labelledby="disease-title"><div class="disease-hero-shade"></div><div class="disease-hero-inner reveal"><p class="breadcrumb"><span class="home-mark">⌂</span> 삼성G정형외과 <span>›</span> 관절 클리닉 <span>›</span> 무릎 <span>›</span> ${page.title}</p><h1 id="disease-title">${page.title}</h1><h2>${page.subtitle}</h2><p>${page.description}</p></div><nav class="disease-tabs" aria-label="무릎 질환 종류">${tabMarkup}</nav></section>
  <section class="knee-intro" aria-labelledby="intro-title"><div class="section-inner"><img class="knee-intro-image reveal" src="../assets/subpages/knee/intro-consultation.png" alt="의료진이 환자에게 무릎 X-ray 검사 결과를 설명하는 모습" /><div class="knee-intro-copy reveal"><h2 id="intro-title">${page.introTitle}</h2><p>${page.introText}</p></div></div></section>
  <section class="knee-causes" aria-labelledby="causes-title"><div class="section-inner"><h2 id="causes-title" class="reveal">${page.causeTitle}</h2><ul class="knee-cause-list reveal">${causeMarkup}</ul></div></section>
  <section class="knee-symptoms" aria-labelledby="symptoms-title"><div class="knee-symptoms-shade"></div><div class="section-inner knee-symptoms-inner"><div class="knee-symptoms-copy reveal"><h2 id="symptoms-title">${page.symptomTitle}</h2><p>${page.symptomIntro}</p><ul class="symptom-checklist">${symptomMarkup}</ul></div></div></section>
  <section class="knee-treatments" aria-labelledby="treatments-title"><div class="section-inner"><div class="section-heading reveal"><h2 id="treatments-title">${page.treatmentTitle}</h2><p>${page.treatmentIntro}</p></div><div class="knee-treatment-flow reveal">${treatmentMarkup}</div></div></section>
`;

const menuButton = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');
const desktopHeader = window.matchMedia('(min-width:801px)');
const updateHeader = () => siteHeader?.classList.toggle('is-nav-collapsed', desktopHeader.matches && window.scrollY > 80);
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', updateHeader);
updateHeader();
menuButton?.addEventListener('click', () => { const open = document.body.classList.toggle('menu-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기'); });
const revealItems = document.querySelectorAll('.reveal');
if (window.matchMedia('(prefers-reduced-motion:reduce)').matches || !('IntersectionObserver' in window)) revealItems.forEach((item) => item.classList.add('visible'));
else { const observer = new IntersectionObserver((entries,currentObserver) => entries.forEach((entry) => { if (!entry.isIntersecting) return; entry.target.classList.add('visible'); currentObserver.unobserve(entry.target); }), { threshold: .1 }); revealItems.forEach((item) => observer.observe(item)); }
