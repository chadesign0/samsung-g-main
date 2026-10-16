const assetRoot = '../assets/subpages/same-day-procedure/';

const procedurePages = {
  neuroplasty: {
    title: '신경성형술', file: 'neuroplasty.html', hero: 'hero-neuroplasty.jpg', heroPosition: 'center 48%', criteriaImage: 'criteria-neuroplasty.jpg',
    subtitle: '신경 주변의 염증과 유착을 확인해야 합니다',
    description: '가는 다관 카테터를 이용해 통증 원인이 되는 부위에 접근하고<br />신경 주변의 압박과 염증을 줄이기 위한 약물을 전달합니다.',
    introImage: 'intro-neuroplasty.jpg', introTitle: '신경성형술이란?',
    introText: '신경성형술은 경피적 경막외 유착박리술이라고도 하며 가느다란 특수 카테터를 경막외 공간으로 삽입하는 치료입니다.<br /><br />카테터를 신경이 눌리거나 유착된 부위까지 이동시켜 유착을 완화하고 염증을 줄이기 위한 약물을 전달합니다.',
    brandTitle: '삼성G정형외과<br />신경성형술', brandText: '통증이 나타나는 위치와 신경의 압박 상태를 함께 확인합니다.<br />허리 통증과 다리 저림의 원인에 맞춰 시술을 계획합니다.',
    points: [
      ['통증 원인 확인','진찰과 영상검사를 통해 디스크와 협착, 신경 주변의 염증 및 유착 가능성을 확인합니다.'],
      ['영상 유도 접근','영상장비로 카테터의 위치를 확인하면서 통증의 원인이 되는 신경 주변으로 접근합니다.'],
      ['회복 단계 관리','시술 후 감각과 움직임, 통증 변화를 확인하고 상태에 맞는 생활 관리 방법을 안내합니다.']
    ],
    criteriaTitle: '시술을 고려할 수 있는 경우', criteriaIntro: '통증·저림이 반복되거나 일상생활의 불편함이 이어진다면<br />검사를 통해 신경 상태를 확인하고 시술 여부를 고려할 수 있습니다.',
    criteria: ['허리 통증이 엉덩이와 다리까지 이어지는 경우','허리디스크로 신경통이 지속되는 경우','약물·주사치료 후에도 통증이 반복되는 경우','척추 수술 후 유착으로 통증이 지속되는 경우'],
    processTitle: '신경성형술 진행 과정', steps: ['진료 및 검사','시술 계획 수립','영상장비 확인','카테터 삽입 및<br />약물 주입','회복 상태 확인'],
    careTitle: '시술 후 관리', careText: '시술 당일에는 허리를 과도하게 굽히거나 비트는 동작을 피하고 안내한 기간 동안 무거운 물건을 들지 않는 것이 좋습니다.<br />일시적인 저림이나 뻐근함이 나타날 수 있으나 통증이 심해지거나 발열, 근력 저하, 배뇨·배변의 변화가 발생한다면 상태를 확인해야 합니다.'
  },
  radiofrequency: {
    title: '고주파 수핵 감압술', file: 'radiofrequency-nucleoplasty.html', hero: 'hero-radiofrequency.jpg', heroPosition: 'center 48%', criteriaImage: 'criteria-radiofrequency.jpg',
    subtitle: '디스크의 형태와 신경 압박 상태를 함께 확인합니다',
    description: '디스크 내부에 가는 기구를 넣어 고주파 에너지로 수핵 일부를 줄이고<br />디스크 내부 압력과 신경 자극의 완화를 도모하는 시술입니다.',
    introImage: 'intro-radiofrequency.png', introTitle: '고주파 수핵 감압술이란?',
    introText: '디스크 안으로 가는 기구를 삽입해 고주파 에너지로 수핵의 일부를 줄이고 내부 압력을 낮추는 치료입니다.<br /><br />디스크의 돌출 형태와 퇴행 정도, 신경 증상을 확인해 적용 여부를 판단하며 모든 디스크 질환에 적합한 것은 아닙니다.',
    brandTitle: '삼성G정형외과<br />고주파 수핵 감압술', brandText: '증상과 영상검사 결과를 함께 살펴 통증의 원인이 되는 디스크를 확인합니다.<br />보존적 치료 반응과 디스크 상태에 맞춰 시술 방향과 이후 관리 계획을 정합니다.',
    points: [
      ['디스크 상태 확인','돌출 형태와 신경 압박, 디스크의 퇴행 정도를 함께 평가합니다.'],
      ['감압 위치 계획','영상으로 기구의 위치를 확인하며 수핵 감압의 범위와 방법을 정합니다.'],
      ['회복 경과 확인','통증과 감각·근력 변화를 살피고 생활 관리와 회복 단계를 안내합니다.']
    ],
    criteriaTitle: '시술 전 확인하는 사항', criteriaIntro: '증상과 영상검사에서 확인되는 병변을 함께 평가합니다.<br />기존 치료 반응과 디스크 형태에 따라 적용성을 판단합니다.',
    criteria: ['통증·저림과 디스크 병변의 연관성','디스크의 돌출 형태와 퇴행 정도','약물·운동 등 보존적 치료에 대한 반응','진행하는 근력 저하와 다른 치료의 필요성'],
    processTitle: '고주파 수핵 감압술 진행 과정', steps: ['진료·영상검사','시술 계획','위치 확인','수핵 감압','회복 확인'],
    careTitle: '시술 후 관리', careText: '시술 후에는 무거운 물건 들기와 허리를 심하게 굽히거나 비트는 동작을 조절하고, 안내받은 회복 계획을 따릅니다.<br />심해지는 통증이나 발열, 새로 생긴 근력 저하 또는 배뇨·배변 변화가 있으면 신속히 진료받습니다.'
  },
  rotator: {
    title: '회전근개 파열 미세 천공술', file: 'rotator-cuff-microfracture.html', hero: 'hero-rotator.jpg', heroPosition: 'center 45%', criteriaImage: 'criteria-rotator.jpg',
    subtitle: '힘줄의 파열 범위와 뼈 부착부 상태를 확인합니다',
    description: '회전근개가 붙는 뼈 부위에 미세한 구멍을 내어<br />골수 성분이 힘줄과 뼈의 접합부로 나오도록 하는 골수 자극술입니다.',
    introImage: 'intro-rotator.png', introTitle: '회전근개 미세 천공술이란?',
    introText: '회전근개가 부착되는 뼈에 작은 구멍을 내어 골수 성분의 유출을 유도하는 치료입니다. 힘줄과 뼈 사이의 치유 환경을 돕기 위한 보조적 방법으로 검토합니다.<br /><br />파열의 크기와 힘줄 상태, 봉합술의 필요성을 함께 판단하며 미세 천공술만으로 모든 파열이 회복되는 것은 아닙니다.',
    brandTitle: '삼성G정형외과<br />회전근개 파열 미세 천공술', brandText: '파열의 범위와 힘줄의 질, 뼈 상태를 함께 살펴 골수 자극술의 적용 여부를 판단합니다.<br />봉합술 필요 여부와 병행 치료를 구분하고 이후 보호 및 재활 계획을 함께 정합니다.',
    points: [
      ['파열 범위 평가','영상검사와 진찰로 힘줄의 파열 범위와 부착부 상태를 확인합니다.'],
      ['골수 자극 계획','뼈의 미세 천공 위치와 범위를 검토하고 병행 치료를 계획합니다.'],
      ['보호·재활 관리','치료 부위를 보호하고 봉합 여부에 맞춰 재활 단계를 안내합니다.']
    ],
    criteriaTitle: '치료 전 확인하는 사항', criteriaIntro: '파열과 뼈 부착부 상태에 맞춰 골수 자극술을 검토합니다.<br />봉합술 필요 여부와 예상되는 효과·한계를 함께 설명합니다.',
    criteria: ['회전근개의 파열 크기와 범위','힘줄의 퇴행 정도와 뼈 부착부 상태','봉합술 필요 여부와 병행 치료 계획','보호 기간과 단계별 재활 가능 여부'],
    processTitle: '회전근개 파열 미세 천공술 진행 과정', steps: ['진료·영상검사','치료 계획','부착부 확인','미세 천공','회복·재활'],
    careTitle: '시술 후 관리', careText: '보조기 사용과 어깨를 움직이는 범위는 파열 상태와 병행 봉합 여부에 따라 달라집니다. 안내받은 보호·재활 계획을 따릅니다.<br />통증이 줄어든 후에도 무거운 물건 들기와 강한 어깨 운동은 임의로 시작하지 말고, 회복 상태를 확인한 뒤 단계적으로 진행합니다.'
  },
  calcific: {
    title: '석회성 건염 석회 흡입술', file: 'calcific-tendinitis-lavage.html', hero: 'hero-calcific.jpg', heroPosition: 'center 48%', criteriaImage: 'criteria-calcific.jpg',
    subtitle: '석회의 위치와 성상을 확인해 치료 방법을 정합니다',
    description: '초음파로 힘줄 속 석회 침착 부위를 확인한 뒤<br />바늘을 이용해 석회를 세척하고 흡인하는 치료입니다.',
    introImage: 'intro-calcific.png', introTitle: '석회성 건염 석회 흡입술이란?',
    introText: '어깨 힘줄에 쌓인 석회를 초음파로 확인하고 바늘로 접근해 세척·흡인을 시도하는 치료입니다.<br /><br />석회의 크기와 단단한 정도, 위치에 따라 제거 가능한 양과 반응이 달라지며 통증의 다른 원인도 함께 평가합니다.',
    brandTitle: '삼성G정형외과<br />석회성 건염 석회 흡입술', brandText: '석회가 보이는 위치와 실제 통증 부위를 함께 확인해 치료 대상을 정합니다.<br />석회의 성상과 힘줄 상태를 살펴 흡인 가능성과 이후 회복 계획을 안내합니다.',
    points: [
      ['석회 상태 확인','초음파 등 영상검사로 석회의 크기·위치와 주변 힘줄을 확인합니다.'],
      ['영상 유도 흡인','초음파로 바늘의 위치를 확인하며 석회 세척과 흡인을 시도합니다.'],
      ['통증·기능 관리','통증과 움직임을 살피고 잔여 석회와 증상에 따라 추가 치료를 검토합니다.']
    ],
    criteriaTitle: '시술 전 확인하는 사항', criteriaIntro: '석회 침착과 증상의 연관성을 먼저 확인합니다.<br />석회의 성상과 기존 치료 반응에 따라 흡인 여부를 판단합니다.',
    criteria: ['영상검사에서 확인되는 석회의 위치','석회의 크기·성상과 흡인 가능성','통증과 야간 증상, 어깨 움직임의 제한','기존 치료 반응과 다른 어깨 질환의 동반'],
    processTitle: '석회성 건염 석회 흡입술 진행 과정', steps: ['진료·초음파','시술 계획','국소 마취','세척·흡인','경과 확인'],
    careTitle: '시술 후 관리', careText: '시술 직후 무리한 어깨 사용은 피하고, 통증이 허용하는 범위에서 의료진이 안내한 운동을 진행합니다.<br />석회가 일부 남거나 증상이 지속될 수 있어 경과를 확인하며, 발열·붉어짐·심해지는 통증이 있으면 진료받습니다.'
  },
  hydrodilatation: {
    title: '오십견 수액 팽창술', file: 'frozen-shoulder-hydrodilatation.html', hero: 'hero-hydrodilatation.jpg', heroPosition: 'center 48%', criteriaImage: 'criteria-hydrodilatation.jpg',
    subtitle: '굳어진 관절낭과 어깨의 움직임을 함께 살펴봅니다',
    description: '어깨 관절 안에 생리식염수와 약물을 주입해 관절낭을 팽창시키고<br />통증과 관절 움직임의 개선을 도모하는 치료입니다.',
    introImage: 'intro-hydrodilatation.png', introTitle: '오십견 수액 팽창술이란?',
    introText: '오십견으로 굳어진 어깨 관절낭에 생리식염수와 국소마취제 등의 약물을 주입해 관절낭을 늘려주는 치료입니다. 필요에 따라 스테로이드를 함께 사용합니다.<br /><br />관절의 운동 범위와 통증을 확인해 적용 여부를 판단하며 시술 후 상태에 맞는 운동과 재활을 함께 진행합니다.',
    brandTitle: '삼성G정형외과<br />오십견 수액 팽창술', brandText: '능동·수동 운동 범위를 확인해 어깨가 굳은 정도를 평가합니다.<br />힘줄 파열 등 다른 원인을 구분하고 시술과 재활 운동을 함께 계획합니다.',
    points: [
      ['관절 움직임 평가','진찰과 필요한 검사로 관절이 굳지 않은 다른 질환을 확인합니다.'],
      ['관절낭 팽창','영상으로 주입 위치를 확인하고 관절 내에 수액과 약물을 주입합니다.'],
      ['단계별 운동 관리','시술 후 통증에 맞춰 스트레칭과 재활을 단계적으로 안내합니다.']
    ],
    criteriaTitle: '시술 전 확인하는 사항', criteriaIntro: '어깨가 굳은 원인과 운동 제한의 정도를 확인합니다.<br />기존 치료 반응과 다른 어깨 질환을 함께 평가합니다.',
    criteria: ['능동·수동 운동 범위의 제한 정도','통증과 강직이 일상생활에 주는 불편','약물·운동·주사 치료 후의 변화','다른 어깨 질환과 약물 관련 주의사항'],
    processTitle: '오십견 수액 팽창술 진행 과정', steps: ['진료·운동 평가','시술 계획','위치 확인','수액 팽창','운동·경과 확인'],
    careTitle: '시술 후 관리', careText: '시술 후에는 안내받은 스트레칭과 재활을 꾸준히 시행하되, 강한 통증을 참고 어깨를 억지로 움직이지 않습니다.<br />스테로이드를 사용한 경우 당뇨 환자는 혈당 변화를 살피고, 발열이나 붓기·통증이 심해지면 진료받습니다.'
  },
  nerveBlock: {
    title: '신경차단술', file: 'nerve-block.html', hero: 'hero-nerve-block.jpg', heroPosition: 'center 46%', criteriaImage: 'criteria-nerve-block.jpg',
    subtitle: '통증의 경로와 원인 신경을 확인합니다',
    description: '통증과 관련된 신경 주변에 약물을 주입해<br />통증 완화와 원인 부위의 평가를 돕는 치료입니다.',
    introImage: 'intro-nerve-block.png', introTitle: '신경차단술이란?',
    introText: '통증과 관련된 신경 주변에 국소마취제 등의 약물을 주입하는 치료입니다. 신경의 위치에 따라 스테로이드를 함께 사용하기도 합니다.<br /><br />진찰과 영상검사로 목표 부위를 정하고 주입 후 통증과 기능의 변화를 살펴 이후 치료 계획에 반영합니다.',
    brandTitle: '삼성G정형외과<br />신경차단술', brandText: '통증의 위치와 퍼지는 양상, 감각과 근력을 함께 살펴 목표 신경을 확인합니다.<br />영상 유도 방법과 주입 약물을 결정하고 반응에 따라 후속 치료를 계획합니다.',
    points: [
      ['원인 신경 평가','통증 분포와 검사 결과, 감각·근력 변화를 함께 확인합니다.'],
      ['목표 부위 주입','부위에 맞는 영상 유도로 바늘의 위치를 확인하고 계획한 약물을 주입합니다.'],
      ['반응·기능 확인','통증 완화 정도와 감각·움직임을 살펴 이후 치료에 반영합니다.']
    ],
    criteriaTitle: '시술 전 확인하는 사항', criteriaIntro: '통증의 원인과 신경 증상을 함께 평가합니다.<br />복용 중인 약과 알레르기, 기저질환을 확인해 시술을 계획합니다.',
    criteria: ['통증과 저림이 퍼지는 위치·양상','진찰·검사에서 확인되는 신경 자극 부위','기존 치료의 효과와 증상의 지속 정도','항응고제 복용, 알레르기와 기저질환'],
    processTitle: '신경차단술 진행 과정', steps: ['진료·검사','목표 부위 선정','위치 확인','약물 주입','반응 확인'],
    careTitle: '시술 후 관리', careText: '일시적으로 감각이 둔하거나 힘이 빠질 수 있어 상태를 확인한 뒤 귀가하며, 운전과 활동 범위는 안내를 따릅니다.<br />지속되는 근력 저하나 배뇨·배변 변화, 발열 또는 심해지는 통증이 있으면 신속히 진료받습니다.'
  }
};

const pageKey = document.body.dataset.procedure;
const page = procedurePages[pageKey] || procedurePages.neuroplasty;
const tabs = Object.entries(procedurePages).map(([key,item]) => [key,item.title,item.file]);
const tabMarkup = tabs.map(([key,label,href]) => `<a href="${href}"${key === pageKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const pointMarkup = page.points.map((item,index) => `<li><small>POINT ${String(index + 1).padStart(2,'0')}</small><h3>${item[0]}</h3><span aria-hidden="true"></span><p>${item[1]}</p></li>`).join('');
const criteriaMarkup = page.criteria.map((item,index) => `<li><strong>${String(index + 1).padStart(2,'0')}</strong><span>${item}</span></li>`).join('');
const stepMarkup = page.steps.map((item,index) => `<li><span class="procedure-step-badge">STEP<br />${String(index + 1).padStart(2,'0')}</span><span class="procedure-step-dot" aria-hidden="true"></span><strong>${item}</strong></li>`).join('');

document.title = `${page.title} | 삼성G정형외과`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `삼성G정형외과 ${page.title} 안내`);
document.querySelector('#main').innerHTML = `
  <section class="procedure-hero" style="--hero-image:url('${assetRoot}${page.hero}');--hero-position:${page.heroPosition}" aria-labelledby="procedure-title"><div class="procedure-hero-inner reveal"><p class="breadcrumb"><span class="home-mark">⌂</span> 삼성G정형외과 <span>›</span> 특화치료 <span>›</span> 당일퇴원 시술 <span>›</span> ${page.title}</p><h1 id="procedure-title">${page.title}</h1><h2>${page.subtitle}</h2><p>${page.description}</p></div><nav class="procedure-tabs" aria-label="당일퇴원 시술 종류">${tabMarkup}</nav></section>
  <section class="procedure-overview" aria-labelledby="overview-title"><div class="section-inner procedure-overview-inner"><article class="procedure-intro reveal"><img src="${assetRoot}${page.introImage}" alt="${page.title} 설명 이미지" /><div><h2 id="overview-title">${page.introTitle}</h2><p>${page.introText}</p></div></article><article class="procedure-clinic reveal"><img src="${assetRoot}consultation.jpg" alt="의료진의 영상 진료 모습" /><div class="procedure-clinic-copy"><h2>${page.brandTitle}</h2><p>${page.brandText}</p></div><ol class="procedure-points">${pointMarkup}</ol></article></div></section>
  <section class="procedure-criteria" style="--criteria-image:url('${assetRoot}${page.criteriaImage}')" aria-labelledby="criteria-title"><div class="section-inner procedure-criteria-grid"><div class="procedure-criteria-copy reveal"><h2 id="criteria-title">${page.criteriaTitle}</h2><p>${page.criteriaIntro}</p></div><ol class="procedure-criteria-list reveal">${criteriaMarkup}</ol></div></section>
  <section class="procedure-process" aria-labelledby="process-title"><div class="section-inner procedure-process-inner"><h2 id="process-title" class="reveal">${page.processTitle}</h2><ol class="procedure-steps reveal">${stepMarkup}</ol><article class="procedure-aftercare reveal"><span aria-hidden="true">✓</span><h3>${page.careTitle}</h3><p>${page.careText}</p></article></div></section>
  <section class="contact-us" id="contact-us" aria-labelledby="contact-us-title"><div class="contact-us-shade"></div><div class="section-inner contact-us-inner reveal"><p class="eyebrow">Contact Us</p><h2 id="contact-us-title">상담문의</h2><p>진료와 치료에 대한 궁금증을 편하게 문의해 주세요.</p><div class="contact-us-links"><a class="contact-kakao" href="https://pf.kakao.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 44 34" aria-hidden="true"><path d="M22 2C10.95 2 2 8.72 2 17c0 5.27 3.62 9.91 9.1 12.58L9 34l7.1-2.82c1.87.53 3.85.82 5.9.82 11.05 0 20-6.72 20-15S33.05 2 22 2Z"/><text x="22" y="21">TALK</text></svg>카카오톡 채널</a><a class="contact-phone" href="tel:031-452-3000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg>031-452-3000</a><a class="contact-naver" href="https://talk.naver.com" target="_blank" rel="noreferrer"><strong>N</strong>네이버 톡톡</a></div></div></section>`;

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
