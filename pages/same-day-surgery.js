const assetRoot = '../assets/subpages/same-day-surgery/';

const surgeryPages = {
  benign: {
    title: '양성종괴 제거', file: 'benign-mass-removal.html', hero: 'hero-benign.png', heroPosition: 'center 51%',
    subtitle: '크기와 위치를 확인한 뒤 치료 방향을 정합니다',
    description: '피부 아래에 생긴 종괴는 종류와 발생 위치가 다양하므로<br />주변 신경·혈관과의 관계를 확인하는 과정이 필요합니다.',
    introImage: 'intro-benign.png', introTitle: '양성종괴란?',
    introText: '피부나 피하조직, 근육과 신경 주변 등에 발생하는 비암성 덩어리를 양성종괴라고 합니다.<br /><br />천천히 자라고 통증이 없는 경우가 많지만 크기가 커지거나 주변 조직을 압박하면 통증, 저림, 움직임 제한이 나타날 수 있습니다.',
    brandTitle: '삼성G정형외과<br />양성종괴 제거', brandText: '작은 종괴도 발생 위치에 따라<br />세심한 검사와 제거 계획이 필요합니다.',
    points: ['종괴 위치<br />확인','상태별<br />제거 계획','조직검사<br />연계'],
    pointIcons: ['icon-select-cursor.png','icon-calendar-check.png','icon-detail-exam.png'],
    criteriaTitle: '제거를 고려할 수 있는 경우', criteriaIntro: '종괴가 점차 커지거나 통증·저림, 반복되는 염증으로 불편함이 이어진다면<br />검사를 통해 상태를 확인하고 제거 여부를 고려할 수 있습니다.',
    criteria: ['종괴의 크기가 점차 커지는 경우','통증이나 압박감, 저림이 동반되는 경우','염증과 불편함이 반복해서 나타나는 경우','움직임을 방해하거나 지속적으로 마찰되는 경우'],
    processImage: 'process-benign.png', processTitle: '양성종괴 제거 과정',
    steps: ['진료 및 촉진','영상검사','치료 계획 수립','종괴 제거','경과 확인'],
    careTitle: '제거 후 관리', careText: '상처는 청결히 관리하고 당김·압박은 피하세요.<br />붉어짐·열감·분비물·통증 악화 시 즉시 진료받으세요.'
  },
  carpal: {
    title: '손목터널증후군 감압술', file: 'carpal-tunnel-release.html', hero: 'hero-carpal.jpg', heroPosition: 'center 40%',
    subtitle: '손 저림의 원인과 신경 기능을 먼저 확인합니다',
    description: '손목 안에서 눌린 정중신경의 압박을 줄여<br />저림과 통증, 손 기능의 회복을 돕는 수술입니다.',
    introImage: 'intro-carpal.png', introTitle: '손목터널증후군 감압술이란?',
    introText: '손목터널의 지붕을 이루는 횡수근인대를 유리하여 정중신경에 가해지는 압박을 줄이는 수술입니다.<br /><br />증상의 정도와 검사 결과, 보존적 치료에 대한 반응을 살펴 수술의 필요성과 방법을 결정합니다.',
    brandTitle: '삼성G정형외과<br />손목터널증후군 감압술', brandText: '신경의 압박 위치와 손 기능을 함께 살핍니다.<br />당일 퇴원 여부는 수술 후 회복 상태에 따라 결정합니다.',
    points: ['신경 기능<br />평가','상태별<br />감압 계획','감각·근력<br />경과 확인'],
    pointIcons: ['icon-nerve-signal.png','icon-calendar-check.png','icon-progress-clock.png'],
    criteriaTitle: '감압술을 고려하는 경우', criteriaIntro: '저림이 지속되고 손 기능, 검사 결과를 살펴<br />보존적 치료에 대한 반응과 함께 수술 필요성을 판단합니다.',
    criteria: ['보존적 치료에도 저림이 지속되는 경우','야간 통증이 반복되어 잠을 방해하는 경우','감각 저하나 엄지 근력 약화가 있는 경우','검사에서 신경 기능 저하가 확인되는 경우'],
    processImage: 'process-carpal.png', processTitle: '손목터널증후군 감압술 과정',
    steps: ['진료·기능 평가','필요 검사','수술 계획','신경 감압','회복 확인'],
    careTitle: '감압술 후 관리', careText: '상처는 안내에 따라 관리하고 손목 꺾기·하중은 조절하세요.<br />손가락 운동·일상 복귀는 회복에 맞추고 감각·근력 변화를 확인하세요.'
  },
  trigger: {
    title: '방아쇠수지 유리술', file: 'trigger-finger-release.html', hero: 'hero-trigger.jpg', heroPosition: 'center 48%',
    subtitle: '걸리는 손가락, 힘줄이 움직이는 공간을 살펴봅니다',
    description: '힘줄의 움직임을 방해하는 A1 활차를 유리하여<br />손가락이 편하게 움직이는 정상 통로를 확보합니다.',
    introImage: 'intro-trigger.png', introTitle: '방아쇠수지 유리술이란?',
    introText: '손가락 굽힘힘줄이 지나가는 통로의 A1 활차를 열어 힘줄이 더 원활하게 움직일 수 있도록 하는 수술입니다.<br /><br />증상이 심하거나 보존적 치료 후에도 걸림이 지속되는 경우, 손가락이 굽힌 채 잠기는 경우 등을 함께 평가합니다.',
    brandTitle: '삼성G정형외과<br />방아쇠수지 유리술', brandText: '걸림의 위치와 손가락 움직임을 함께 확인합니다.<br />당일 퇴원 여부는 수술 후 회복 상태에 따라 결정합니다.',
    points: ['걸림 위치<br />확인','활차 유리<br />계획','손가락 기능<br />회복 관리'],
    pointIcons: ['icon-select-cursor.png','icon-calendar-check.png','icon-hand-mobility.png'],
    criteriaTitle: '유리술을 고려하는 경우', criteriaIntro: '걸림과 잠김, 통증이 일상생활에 주는 불편을 확인하고<br />이전 치료의 반응을 살펴 수술 필요성을 판단합니다.',
    criteria: ['치료 후에도 손가락 걸림이 지속되는 경우','손가락이 굽힌 채 쉽게 펴기 어려운 경우','통증으로 쥐고 펴는 동작이 불편한 경우','뻣뻣함과 움직임 제한이 이어지는 경우'],
    processImage: 'process-trigger.jpg', processTitle: '방아쇠수지 유리술 과정',
    steps: ['진료·동작 확인','수술 적합성','마취 계획','활차 유리','경과 확인'],
    careTitle: '유리술 후 관리', careText: '상처 관리·손가락 운동은 의료진 안내에 따르세요.<br />강한 쥐기·반복 작업을 조절하고 붓기·통증 악화 시 진료받으세요.'
  },
  dequervain: {
    title: '드퀘르뱅병 유리술', file: 'de-quervain-release.html', hero: 'hero-dequervain.jpg', heroPosition: 'center 47%',
    subtitle: '엄지 쪽 손목 통증, 힘줄 통로의 압박을 확인합니다',
    description: '엄지 쪽 손목의 좁아진 힘줄 통로를 열어<br />힘줄이 지나가는 압박과 마찰을 줄여주는 수술입니다.',
    introImage: 'intro-dequervain.png', introTitle: '드퀘르뱅병 유리술이란?',
    introText: '엄지 쪽 손목의 힘줄을 둘러싼 건초를 유리하여 자극받는 힘줄이 움직일 공간을 확보하는 수술입니다.<br /><br />증상이 심하거나 보존적 치료에도 통증이 지속되면 신경과 힘줄의 위치를 살펴 수술 필요성을 판단합니다.',
    brandTitle: '삼성G정형외과<br />드퀘르뱅병 유리술', brandText: '주변 신경을 고려해 힘줄 통로의 압박을 줄입니다.<br />당일 퇴원 여부는 수술 후 회복 상태에 따라 결정합니다.',
    points: ['통증 위치<br />평가','주변 구조<br />확인','움직임<br />회복 관리'],
    pointIcons: ['icon-exam-paper.png','icon-detail-exam.png','icon-hand-mobility.png'],
    criteriaTitle: '유리술을 고려하는 경우', criteriaIntro: '엄지 쪽 손목 통증의 원인과 힘줄 상태를 확인합니다.<br />증상이 심하거나 보존적 치료로 호전되지 않으면 수술을 검토합니다.',
    criteria: ['보존적 치료 후에도 통증이 지속되는 경우','잡거나 드는 동작에 심한 통증이 있는 경우','붓기와 압통으로 손 사용이 불편한 경우','엄지·손목 움직임의 제한이 이어지는 경우'],
    processImage: 'process-dequervain.jpg', processTitle: '드퀘르뱅병 유리술 과정',
    steps: ['진료·상태 확인','필요 검사','수술 계획','건초 유리','회복 확인'],
    careTitle: '유리술 후 관리', careText: '상처·봉합 관리는 안내에 따르고 엄지·손목의 반복 사용은 줄이세요.<br />통증·힘의 회복에 맞춰 일상으로 복귀하세요.'
  },
  fracture: {
    title: '비절개 골절 수술', file: 'minimally-invasive-fracture-surgery.html', hero: 'hero-fracture.jpg', heroPosition: 'center 52%',
    subtitle: '골절의 위치와 안정성에 맞는 고정 방법을 선택합니다',
    description: '피부를 크게 열지 않고 뼈의 위치를 맞춘 뒤<br />필요에 따라 작은 피부 통로로 핀을 넣어 고정합니다.',
    introImage: 'intro-fracture.jpg', introTitle: '비절개 골절 수술이란?',
    introText: '적합한 골절에서 피부를 크게 열지 않고 뼈의 위치를 맞추는 폐쇄정복과 필요 시 경피적 핀 고정 등을 포함하는 치료입니다.<br /><br />골절 형태와 안정성에 따라 적용 여부가 달라지며 정확한 평가가 필요합니다.',
    brandTitle: '삼성G정형외과<br />비절개 골절 수술', brandText: '골절 형태와 안정성에 맞는 고정 방법을 선택합니다.<br />당일 퇴원 여부는 수술 후 회복 상태에 따라 결정합니다.',
    points: ['골절 형태<br />확인','정렬·고정<br />평가','뼈 유합<br />경과 확인'],
    pointIcons: ['icon-detail-exam.png','icon-exam-paper.png','icon-progress-clock.png'],
    criteriaTitle: '수술 방법을 결정하는 기준', criteriaIntro: '골절 위치와 어긋남, 정복 후 안정성을 함께 확인합니다.<br />피부를 크게 열지 않는 방법의 적용 여부는 골절 상태에 따라 달라집니다.',
    criteria: ['골절 위치와 관절면 침범 여부','뼈의 각도·회전과 어긋난 정도','폐쇄정복 가능성과 고정 후 안정성','피부·신경·혈관의 동반 손상 여부'],
    processImage: 'process-fracture.png', processTitle: '비절개 골절 수술 과정',
    steps: ['진료·영상검사','수술 계획','마취·정복','필요 시 고정','유합 확인'],
    careTitle: '골절 수술 후 관리', careText: '고정·핀 부위 관리와 체중 부하·움직임은 의료진 지침을 따르세요.<br />정기검사로 정렬·유합 확인, 통증 악화·저림·피부색 변화 시 즉시 진료.'
  },
  wart: {
    title: '티눈 및 사마귀 제거술', file: 'corn-wart-removal.html', hero: 'hero-wart.jpg', heroPosition: 'center 48%',
    subtitle: '비슷해 보이는 피부 병변, 원인을 구분해야 합니다',
    description: '압박으로 생기는 티눈과 바이러스성 사마귀를 구분하고,<br />병변의 위치와 깊이에 맞는 제거 방법을 선택합니다.',
    introImage: 'intro-wart.jpg', introTitle: '티눈 및 사마귀 제거술이란?',
    introText: '티눈은 반복적인 압력과 마찰로, 사마귀는 바이러스 감염으로 발생하므로 병변을 구분한 뒤 치료 방법을 정합니다.<br /><br />각질 제거, 약물, 냉동치료 등을 고려하며 일부 병변은 절제나 레이저 등의 제거 치료를 검토합니다.',
    brandTitle: '삼성G정형외과<br />티눈 및 사마귀 제거술', brandText: '병변의 원인을 구분해 제거와 재발 관리를 계획합니다.<br />당일 퇴원 여부는 수술 후 회복 상태에 따라 결정합니다.',
    points: ['병변 종류<br />감별','상태별<br />치료 선택','상처·재발<br />경과 확인'],
    pointIcons: ['icon-detail-exam.png','icon-select-cursor.png','icon-progress-clock.png'],
    criteriaTitle: '제거 치료 전 확인할 사항', criteriaIntro: '티눈과 사마귀를 구분하고 병변의 범위와 피부 상태를 확인합니다.<br />통증과 재발 요인, 기존 치료 반응에 맞춰 제거 방법을 결정합니다.',
    criteria: ['티눈·사마귀의 구분과 병변의 깊이','보행이나 압박으로 생기는 통증','반복되는 마찰·압박과 병변의 재발','주변 감염과 상처 회복에 영향을 주는 요인'],
    processImage: 'process-wart.jpg', processTitle: '티눈 및 사마귀 제거술 과정',
    steps: ['진료·병변 감별','범위 확인','치료법 선택','선택적 제거','상처·재발 확인'],
    careTitle: '제거 후 관리', careText: '치료 부위는 물에 오래 담그지 말고 안내에 따라 관리하세요.<br />티눈은 압박·마찰 주의, 사마귀는 접촉 후 손 씻기·재발 확인.'
  },
  ingrown: {
    title: '내성 발톱 교정술', file: 'ingrown-nail-correction.html', hero: 'hero-ingrown.jpg', heroPosition: 'center 48%',
    subtitle: '파고드는 발톱, 통증과 염증의 반복을 살펴봅니다',
    description: '발톱 가장자리가 피부를 자극하는 부위를 확인하고<br />염증과 재발 정도에 맞춰 교정 또는 부분 제거를 검토합니다.',
    introImage: 'intro-ingrown.jpg', introTitle: '내성 발톱 교정술이란?',
    introText: '발톱 가장자리가 주변 피부를 파고들어 생기는 통증과 염증을 줄이기 위한 치료입니다.<br /><br />발톱의 형태와 염증 정도에 따라 교정 방법을 선택하며, 반복되는 경우 부분 발톱 제거와 뿌리 부위 치료를 검토합니다.',
    brandTitle: '삼성G정형외과<br />내성 발톱 교정술', brandText: '발톱의 형태와 염증 상태에 맞춰 치료를 선택합니다.<br />당일 퇴원 여부는 수술 후 회복 상태에 따라 결정합니다.',
    points: ['자극 부위<br />확인','염증·재발<br />평가','상처 관리<br />안내'],
    pointIcons: ['icon-select-cursor.png','icon-exam-paper.png','icon-hand-mobility.png'],
    criteriaTitle: '교정 치료를 고려하는 경우', criteriaIntro: '발톱이 피부를 자극하는 위치와 염증 정도를 살펴봅니다.<br />통증과 재발 여부, 상처 회복 요인에 맞춰 치료 방법을 결정합니다.',
    criteria: ['발톱 가장자리가 피부를 파고드는 경우','신발 착용이나 보행 시 통증이 있는 경우','붓기·발적·진물 등 염증이 동반되는 경우','치료 후에도 같은 부위에 증상이 반복되는 경우'],
    processImage: 'process-ingrown.png', processTitle: '내성 발톱 교정술 과정',
    steps: ['진료·상태 확인','교정 계획','필요 시 마취','교정·부분 제거','상처 확인'],
    careTitle: '교정 후 관리', careText: '드레싱은 안내에 따르고 발가락 압박·자극은 피하세요.<br />회복 후 발톱은 너무 짧게 자르지 말고 붉어짐·열감·분비물·통증 악화 시 진료받으세요.'
  }
};

const pageKey = document.body.dataset.treatment;
const page = surgeryPages[pageKey] || surgeryPages.benign;
const tabs = Object.entries(surgeryPages).map(([key,item]) => [key,item.title,item.file]);
const tabMarkup = tabs.map(([key,label,href]) => `<a href="${href}"${key === pageKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const pointMarkup = page.points.map((item,index) => `<li><small>POINT ${String(index + 1).padStart(2,'0')}</small><img class="surgery-point-icon" src="${assetRoot}${page.pointIcons[index]}" alt="" aria-hidden="true" /><strong>${item}</strong></li>`).join('');
const criteriaMarkup = page.criteria.map((item,index) => `<li><strong>${String(index + 1).padStart(2,'0')}</strong><span>${item}</span></li>`).join('');
const stepMarkup = page.steps.map((item,index) => `<li><span class="surgery-step-badge">STEP<br />${String(index + 1).padStart(2,'0')}</span><span class="surgery-step-dot" aria-hidden="true"></span><strong>${item}</strong></li>`).join('');

document.title = `${page.title} | 삼성G정형외과`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `삼성G정형외과 ${page.title} 안내`);
if (!document.querySelector('#main').hasAttribute('data-prerendered')) document.querySelector('#main').innerHTML = `
  <section class="surgery-hero" style="--hero-image:url('${assetRoot}${page.hero}');--hero-position:${page.heroPosition}" aria-labelledby="surgery-title"><div class="surgery-hero-inner reveal"><p class="breadcrumb"><span class="home-mark">⌂</span> 삼성G정형외과 <span>›</span> 특화치료 <span>›</span> 당일퇴원 수술 <span>›</span> ${page.title}</p><h1 id="surgery-title">${page.title}</h1><h2>${page.subtitle}</h2><p>${page.description}</p></div><nav class="surgery-tabs" aria-label="당일퇴원 수술 종류">${tabMarkup}</nav></section>
  <section class="surgery-overview" aria-labelledby="overview-title"><div class="section-inner surgery-overview-inner"><article class="surgery-overview-row reveal"><img class="surgery-overview-image" src="${assetRoot}${page.introImage}" alt="${page.title} 설명 이미지" /><div class="surgery-overview-copy"><h2 id="overview-title">${page.introTitle}</h2><p>${page.introText}</p></div></article><article class="surgery-overview-row is-reverse reveal"><img class="surgery-overview-image" src="${assetRoot}surgeon.jpg" alt="수술을 준비하는 의료진" /><div class="surgery-overview-copy"><h2>${page.brandTitle}</h2><p>${page.brandText}</p><ol class="surgery-points">${pointMarkup}</ol></div></article></div></section>
  <section class="surgery-criteria" aria-labelledby="criteria-title"><div class="section-inner surgery-criteria-grid"><div class="surgery-criteria-copy reveal"><h2 id="criteria-title">${page.criteriaTitle}</h2><p>${page.criteriaIntro}</p></div><ol class="surgery-criteria-list reveal">${criteriaMarkup}</ol></div></section>
  <section class="surgery-process" style="--process-image:url('${assetRoot}${page.processImage}')" aria-labelledby="process-title"><div class="section-inner surgery-process-inner"><h2 id="process-title" class="reveal">${page.processTitle}</h2><ol class="surgery-steps reveal">${stepMarkup}</ol></div></section>
  <section class="surgery-aftercare-section" aria-labelledby="aftercare-title"><div class="section-inner"><article class="surgery-aftercare reveal"><div><span class="surgery-aftercare-mark" aria-hidden="true">✓</span><h3 id="aftercare-title">${page.careTitle}</h3><p>${page.careText}</p></div></article></div></section>
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
