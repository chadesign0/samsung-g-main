const handConditions = {
  tennis: {
    title: '테니스엘보', hero: '../assets/subpages/hand/hero-tennis-elbow.jpg', heroPosition: 'center 48%',
    subtitle: '악수나 컵 들기도 불편해질 수 있습니다',
    description: '손목을 펴는 힘줄이 반복적으로 손상되면<br />팔꿈치 바깥쪽부터 손목까지 통증이 이어질 수 있습니다.',
    causeTitle: '운동을 하지 않아도,<br />반복되는 손목 사용으로 발생할 수 있습니다',
    causeIntro: '노화에 따른 변화와 반복적인 팔 사용이 이어지면<br />회전근개에 염증이나 손상이 발생할 수 있습니다.',
    causes: [
      ['반복적인 손목 사용', '손목을 자주 펴거나 비트는 동작이 반복되면 팔꿈치 힘줄에 부담이 쌓일 수 있습니다.'],
      ['라켓 스포츠', '테니스나 배드민턴을 잘못된 자세로 반복하면 팔꿈치 바깥쪽에 강한 충격이 전달될 수 있습니다.'],
      ['직업적인 팔 사용', '조리나 도장, 공구 사용처럼 같은 동작을 반복하면 전완부 근육과 힘줄이 과도하게 사용될 수 있습니다.'],
      ['힘줄의 퇴행성 변화', '나이가 들면서 힘줄의 탄력과 회복력이 감소하면 작은 자극에도 손상이 발생할 수 있습니다.'],
    ],
    symptomTitle: '팔꿈치 바깥쪽의 찌릿한 통증,<br />손목을 움직일 때 더 심해질 수 있습니다',
    symptomIntro: '팔꿈치 바깥쪽의 힘줄 부위를 누르거나 손목을 움직일 때 통증이 이어질 수 있습니다.',
    symptoms: ['팔꿈치 바깥쪽을 눌렀을 때 나타나는 통증', '물건을 잡거나 들어 올릴 때 느껴지는 불편함', '손목을 펴거나 비틀 때 심해지는 통증', '악수하거나 컵을 들 때 느껴지는 힘 빠짐'],
    treatmentTitle: '힘줄의 손상 정도와 사용 습관을 확인해<br />팔꿈치의 부담을 줄이는 치료를 적용합니다',
    treatmentIntro: '통증을 유발하는 동작을 줄이면서 힘줄의 긴장을 완화하고<br />손목과 팔꿈치 기능을 회복하는 치료를 시행합니다.',
    treatments: [['약물치료', '진통·소염제를 활용하여 팔꿈치 힘줄 주변의 통증을 완화합니다.', 'medication'], ['물리·운동치료', '굳어진 근육과 관절을 부드럽게 이완하여 팔꿈치 움직임과 근육 균형 회복을 돕습니다.', 'exercise'], ['주사치료', '통증 유발점을 확인해 해당 부위에 적용하며 반복되는 근육 통증을 줄이는 데 도움을 줍니다.', 'injection']],
  },
  golf: {
    title: '골프엘보', hero: '../assets/subpages/hand/hero-golf-elbow.jpg', heroPosition: 'center 53%',
    subtitle: '팔꿈치 안쪽의 통증, 손목 사용을 살펴보세요',
    description: '손목을 굽히고 물건을 쥐는 동작이 반복되면<br />팔꿈치 안쪽 힘줄에 부담이 쌓여 통증이 생길 수 있습니다.',
    causeTitle: '골프를 하지 않아도,<br />반복되는 손 사용으로 발생할 수 있습니다',
    causeIntro: '팔꿈치 안쪽에 붙는 힘줄이 반복적인 부담으로 손상되는 질환입니다.<br />일상 동작과 운동 습관을 함께 살펴 원인을 확인합니다.',
    causes: [['반복적인 손 사용', '손목을 굽히거나 팔을 안쪽으로 돌리는 동작이 반복되면 힘줄에 부담이 쌓입니다.'], ['강한 쥐기 동작', '공구나 운동기구를 세게 쥐는 동작은 팔꿈치 안쪽 힘줄을 과도하게 사용할 수 있습니다.'], ['운동 자세와 장비', '골프나 던지기 동작에서 잘못된 자세와 맞지 않는 장비가 부담을 높일 수 있습니다.'], ['힘줄의 변화', '나이가 들면서 힘줄이 약해지면 반복되는 작은 자극에도 통증이 생길 수 있습니다.']],
    symptomTitle: '팔꿈치 안쪽이 아프고 쥐는 힘이 줄었다면,<br />힘줄의 상태를 확인해 보세요',
    symptomIntro: '손목을 굽히거나 물건을 꽉 잡을 때 통증이 심해질 수 있습니다.',
    symptoms: ['팔꿈치 안쪽을 누를 때 느껴지는 통증', '물건을 쥐거나 들어 올릴 때의 불편함', '손목을 굽히거나 팔을 돌릴 때의 통증', '쥐는 힘의 감소와 손목 움직임의 제한'],
    treatmentTitle: '반복되는 힘줄 부담을 줄이고<br />팔꿈치의 편안한 움직임을 돕습니다',
    treatmentIntro: '통증을 유발하는 활동을 조절하고 손상 정도를 확인합니다.<br />증상에 맞춰 약물, 재활 및 추가 치료를 검토합니다.',
    treatments: [['약물·활동 조절', '진통·소염제로 통증을 조절하고 힘줄에 부담을 주는 활동을 줄입니다.', 'medication'], ['물리·운동치료', '통증이 완화되면 스트레칭과 근력 운동을 단계적으로 시행합니다.', 'exercise'], ['추가 치료 평가', '증상이 지속되면 주사 등의 추가 치료와 위험을 살펴 치료 방향을 결정합니다.', 'injection']],
  },
  carpal: {
    title: '손목터널증후군', hero: '../assets/subpages/hand/hero-carpal-tunnel.jpg', heroPosition: 'center 50%',
    subtitle: '밤에 반복되는 손 저림을 확인해 보세요',
    description: '손목의 좁은 통로에서 정중신경이 눌리면<br />손가락 저림과 감각 저하, 손의 힘 빠짐이 나타날 수 있습니다.',
    causeTitle: '손끝이 저리고 감각이 둔해진다면,<br />손목을 지나는 신경을 살펴야 합니다',
    causeIntro: '손목터널 안의 압력이 높아지면서 정중신경이 압박되는 질환입니다.<br />손 사용 습관과 신체적 요인이 함께 영향을 줄 수 있습니다.',
    causes: [['좁은 손목터널', '타고난 손목터널의 크기나 구조에 따라 신경이 눌리기 쉬울 수 있습니다.'], ['반복적인 손 사용', '오랜 시간 같은 동작을 반복하면 힘줄 주변 조직이 붓고 신경을 압박할 수 있습니다.'], ['손목을 굽힌 자세', '손목을 심하게 굽히거나 젖힌 자세를 오래 유지하면 신경의 압력이 가해집니다.'], ['동반 질환과 부종', '당뇨, 갑상선 질환, 류마티스관절염이나 임신 중 부종과 관련될 수 있습니다.']],
    symptomTitle: '밤마다 손이 저려 잠에서 깬다면,<br />감각과 손의 힘을 확인해 보세요',
    symptomIntro: '엄지·검지·중지와 약지 일부에 저림이 나타나는 경우가 많습니다.',
    symptoms: ['엄지·검지·중지에 반복되는 저림', '밤에 심해져 잠을 깨우는 손의 불편함', '단추 끼우기 등 섬세한 동작의 어려움', '쥐는 힘이 줄어 물건을 떨어뜨리는 증상'],
    treatmentTitle: '신경의 압박 정도를 확인해<br />손의 감각과 기능 회복을 돕습니다',
    treatmentIntro: '손목 자세와 활동을 조절하고 증상의 경과를 살펴봅니다.<br />신경 손상이 심하거나 증상이 지속되면 수술적 치료도 검토합니다.',
    treatments: [['약물·통증 조절', '필요에 따라 통증을 조절하면서 신경의 압박 상태를 함께 평가합니다.', 'medication'], ['보조기·운동치료', '손목을 편 자세로 보호하고 상태에 맞는 운동을 시행합니다.', 'exercise'], ['주사·수술 평가', '주사는 일시적 완화에 도움이 되며 심한 압박은 수술 여부를 평가합니다.', 'injection']],
  },
  tenosynovitis: {
    title: '손목건초염', hero: '../assets/subpages/hand/hero-wrist-tenosynovitis.jpg', heroPosition: 'center 48%',
    subtitle: '엄지 쪽 손목 통증, 힘줄의 움직임을 살펴보세요',
    description: '엄지를 움직이는 힘줄과 주변 통로가 자극을 받으면<br />물건을 잡거나 손목을 돌릴 때 통증이 생길 수 있습니다.',
    causeTitle: '엄지를 쓰는 작은 동작도 아프다면,<br />손목 힘줄 주변의 변화를 확인하세요',
    causeIntro: '손목건초염 중 드퀘르뱅병은 엄지 쪽 힘줄이 지나는 통로에 생기는 문제입니다.<br />정확한 원인은 다양하며 반복적 엄지 사용으로 증상이 심해질 수 있습니다.',
    causes: [['엄지와 손목 사용', '타이핑이나 문자 입력처럼 엄지와 손목을 쓰는 동작이 증상을 악화시킬 수 있습니다.'], ['쥐기와 들어 올리기', '물건을 세게 쥐거나 들어 올리고 손목을 비트는 동작이 힘줄을 자극할 수 있습니다.'], ['임신과 출산 후', '임신·출산 전후의 변화와 관련이 있으며 아기를 안는 동작에서 통증을 느끼기도 합니다.'], ['힘줄 통로의 변화', '힘줄을 감싼 조직이 두꺼워지면 힘줄이 부드럽게 움직이기 어려워집니다.']],
    symptomTitle: '엄지 쪽 손목이 붓고 움직일 때 아프다면,<br />힘줄 주변 조직을 살펴보세요',
    symptomIntro: '통증은 손목에서 시작해 팔 쪽으로 이어질 수 있습니다.',
    symptoms: ['엄지 쪽 손목의 통증과 누를 때의 압통', '물건을 쥐거나 들어 올릴 때의 통증', '엄지 쪽 손목 주변의 부기', '엄지를 움직일 때 걸리는 느낌과 불편함'],
    treatmentTitle: '엄지와 손목에 가해지는 부담을 줄여<br />힘줄이 편안하게 움직이도록 돕습니다',
    treatmentIntro: '통증을 유발하는 동작을 줄이고 힘줄 주변의 자극을 관리합니다.<br />증상의 정도와 치료 반응에 따라 치료 방법을 선택합니다.',
    treatments: [['약물치료', '상태에 따라 진통·소염제를 사용해 통증과 부종을 줄입니다.', 'medication'], ['보조기·활동 조절', '엄지와 손목을 보호하는 보조기와 활동 조절로 힘줄의 부담을 줄입니다.', 'exercise'], ['주사·수술 평가', '필요하면 주사치료를 고려하고 지속되는 증상은 수술 여부를 평가합니다.', 'injection']],
  },
  trigger: {
    title: '방아쇠수지', hero: '../assets/subpages/hand/hero-trigger-finger.jpg', heroPosition: 'center 48%',
    subtitle: '손가락이 걸리거나 펴지지 않는다면 확인하세요',
    description: '손가락을 굽히는 힘줄이 통로를 매끄럽게 지나지 못하면<br />움직일 때 걸리거나 튕기는 느낌이 생길 수 있습니다.',
    causeTitle: '구부린 손가락이 쉽게 펴지지 않는다면,<br />힘줄이 지나는 통로를 확인하세요',
    causeIntro: '힘줄이나 이를 감싸는 통로가 두꺼워지면 손가락의 움직임이 제한됩니다.<br />뚜렷한 계기 없이 생기기도 하며 반복적인 쥐기 동작과 관련될 수 있습니다.',
    causes: [['반복적인 쥐기', '일이나 취미로 물건을 반복해서 쥐고 펴는 동작이 발생과 관련될 수 있습니다.'], ['힘줄 통로의 변화', '힘줄이 두꺼워지거나 통로가 좁아지면 힘줄이 지나갈 때 걸림이 생길 수 있습니다.'], ['동반 질환', '당뇨나 류마티스관절염 등 일부 질환이 있는 경우 더 흔하게 나타날 수 있습니다.'], ['나이와 개인 요인', '중년 여성에게 흔하며 손 사용량이 늘지 않아도 증상이 시작될 수 있습니다.']],
    symptomTitle: '손가락을 펼 때 딸깍 걸리는 느낌,<br />아침에 더 불편할 수 있습니다',
    symptomIntro: '손가락 안쪽 손바닥 부위의 통증이나 콩알 크기의 결절이 만져질 수 있습니다.',
    symptoms: ['손가락을 굽히고 펼 때 걸리거나 튕김', '손가락 아래 손바닥을 누를 때 통증', '아침이나 쉬고 난 뒤 심해지는 뻣뻣함', '손가락이 굽힌 상태로 잠기는 증상'],
    treatmentTitle: '힘줄의 걸림과 통증을 살펴<br />자연스러운 손가락 움직임을 돕습니다',
    treatmentIntro: '반복적인 쥐기 동작을 줄이고 힘줄의 움직임을 확인합니다.<br />통증과 걸림의 정도에 맞춰 단계적으로 치료합니다.',
    treatments: [['약물·활동 조절', '필요한 약물로 통증을 조절하며 반복적인 쥐기와 집기 동작을 줄입니다.', 'medication'], ['보조기·운동치료', '보조기로 손가락을 보호하고 부드러운 운동으로 뻣뻣함을 관리합니다.', 'exercise'], ['주사·수술 평가', '주사치료를 고려할 수 있으며 잠김이 지속되면 수술 여부를 평가합니다.', 'injection']],
  },
  arthritis: {
    title: '손목·손가락 관절염', hero: '../assets/subpages/hand/hero-hand-arthritis.jpg', heroPosition: 'center 52%',
    subtitle: '손의 통증과 뻣뻣함, 관절의 변화를 살펴보세요',
    description: '손목과 손가락 관절에 연골 손상이나 염증이 생기면<br />일상적인 쥐기와 비틀기 동작도 불편해질 수 있습니다.',
    causeTitle: '자주 쓰는 손목과 손가락,<br />관절이 보내는 신호를 확인하세요',
    causeIntro: '퇴행성 변화, 염증성 질환, 과거 손상 등 원인이 다양합니다.<br />통증이 생긴 관절과 증상의 경과를 함께 살펴봅니다.',
    causes: [['퇴행성 변화', '시간이 지나며 관절 연골이 닳으면 움직임이 매끄럽지 않고 통증이 생길 수 있습니다.'], ['염증성 관절질환', '류마티스관절염 등으로 관절을 둘러싼 조직에 염증이 생길 수 있습니다.'], ['과거의 관절 손상', '골절이나 탈구로 관절면이 손상된 뒤 시간이 지나 관절염이 나타날 수 있습니다.'], ['반복되는 관절 부담', '이미 불편한 관절을 오래 쓰거나 물건을 세게 쥐면 통증과 부기가 심해질 수 있습니다.']],
    symptomTitle: '손마디가 붓고 뻣뻣하다면,<br />관절의 염증과 손상 정도를 살펴보세요',
    symptomIntro: '손을 쓰거나 뒤틀음이 심해지거나 아침에 뻣뻣할 수 있습니다.',
    symptoms: ['손목이나 손가락 관절의 반복되는 통증', '손마디의 부기와 열감', '아침에 느껴지는 뻣뻣함과 움직임 제한', '병뚜껑을 열거나 물건을 쥐기 어려움'],
    treatmentTitle: '관절염의 원인과 진행 정도에 맞춰<br />손의 기능을 지키는 치료를 돕습니다',
    treatmentIntro: '관절의 부담을 줄이며 통증과 염증을 관리합니다.<br />염증성 질환이나 심한 관절 손상은 추가 평가가 필요합니다.',
    treatments: [['약물치료', '관절염의 원인에 맞는 약물로 통증과 염증을 조절합니다.', 'medication'], ['보조기·활동 조절', '아픈 관절을 보호하고 손 사용량을 조절해 일상의 부담을 줄입니다.', 'exercise'], ['주사·수술 평가', '필요에 따라 주사치료를 고려하며 손상이 심하면 수술 여부를 평가합니다.', 'injection']],
  },
};

const pageKey = document.body.dataset.condition;
const page = handConditions[pageKey] || handConditions.tennis;
const tabs = [
  ['tennis', '테니스엘보', 'tennis-elbow.html'], ['golf', '골프엘보', 'golf-elbow.html'],
  ['carpal', '손목터널증후군', 'carpal-tunnel-syndrome.html'], ['tenosynovitis', '손목건초염', 'wrist-tenosynovitis.html'],
  ['trigger', '방아쇠수지', 'trigger-finger.html'], ['arthritis', '손목·손가락 관절염', 'hand-wrist-arthritis.html'],
];
const treatmentImages = { medication: '../assets/subpages/frozen-shoulder/treatment-medication.png', exercise: '../assets/subpages/hand/treatment-exercise.jpg', injection: '../assets/subpages/frozen-shoulder/treatment-injection.jpg' };

document.title = `${page.title} | 삼성G정형외과`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `삼성G정형외과 ${page.title} 진료 안내`);
const tabMarkup = tabs.map(([key,label,href]) => `<a href="${href}"${key === pageKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const causeMarkup = page.causes.map(([title,description]) => `<li><strong><span aria-hidden="true">✓</span>${title}</strong><p>${description}</p></li>`).join('');
const symptomMarkup = page.symptoms.map((item) => `<li><span aria-hidden="true">✓</span>${item}</li>`).join('');
const treatmentMarkup = page.treatments.map(([title,description,image]) => `<article class="treatment-step"><img src="${treatmentImages[image]}" alt="${title} 안내 이미지" /><span class="step-check" aria-hidden="true">✓</span><h3>${title}</h3><p>${description}</p></article>`).join('');

document.querySelector('#main').innerHTML = `
  <section class="disease-hero" style="--hero-image:url('${page.hero}');--hero-position:${page.heroPosition}" aria-labelledby="disease-title"><div class="disease-hero-shade"></div><div class="disease-hero-inner reveal"><p class="breadcrumb"><span class="home-mark">⌂</span> 삼성G정형외과 <span>›</span> 관절 클리닉 <span>›</span> 손·팔꿈치 <span>›</span> ${page.title}</p><h1 id="disease-title">${page.title}</h1><h2>${page.subtitle}</h2><p>${page.description}</p></div><nav class="disease-tabs" aria-label="손·팔꿈치 질환 종류">${tabMarkup}</nav></section>
  <section class="hand-causes" aria-labelledby="causes-title"><div class="section-inner"><div class="section-heading section-heading-centered reveal"><h2 id="causes-title">${page.causeTitle}</h2><p>${page.causeIntro}</p></div><ul class="cause-list reveal">${causeMarkup}</ul></div></section>
  <section class="hand-symptoms" aria-labelledby="symptoms-title"><div class="symptoms-shade"></div><div class="section-inner hand-symptoms-inner"><div class="hand-symptoms-copy reveal"><h2 id="symptoms-title">${page.symptomTitle}</h2><p>${page.symptomIntro}</p><ul class="symptom-checklist">${symptomMarkup}</ul></div></div></section>
  <section class="hand-treatments" aria-labelledby="treatments-title"><div class="section-inner"><div class="section-heading reveal"><h2 id="treatments-title">${page.treatmentTitle}</h2><p>${page.treatmentIntro}</p></div><div class="treatment-flow reveal">${treatmentMarkup}</div></div></section>
  <section class="contact-us" id="contact-us" aria-labelledby="contact-us-title"><div class="contact-us-shade"></div><div class="section-inner contact-us-inner"><p class="eyebrow">Contact Us</p><h2 id="contact-us-title">상담문의</h2><p>진료와 치료에 대해 궁금한 점을 남겨 주세요.</p><div class="contact-us-links"><a class="contact-kakao" href="https://pf.kakao.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 44 34" aria-hidden="true"><path d="M22 2C10.95 2 2 8.72 2 17c0 5.27 3.62 9.91 9.1 12.58L9 34l7.1-2.82c1.87.53 3.85.82 5.9.82 11.05 0 20-6.72 20-15S33.05 2 22 2Z"/><text x="22" y="21">TALK</text></svg>카카오톡 채널</a><a class="contact-phone" href="tel:031-452-3000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg>031-452-3000</a><a class="contact-naver" href="https://talk.naver.com" target="_blank" rel="noreferrer"><strong>N</strong>네이버 톡톡</a></div></div></section>`;

const menuButton = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');
const desktopHeader = window.matchMedia('(min-width: 801px)');
const updateHeader = () => siteHeader?.classList.toggle('is-nav-collapsed', desktopHeader.matches && window.scrollY > 80);
window.addEventListener('scroll', updateHeader, { passive: true }); window.addEventListener('resize', updateHeader); updateHeader();
menuButton?.addEventListener('click', () => { const open = document.body.classList.toggle('menu-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기'); });
const revealItems = document.querySelectorAll('.reveal');
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) revealItems.forEach((item) => item.classList.add('visible'));
else { const observer = new IntersectionObserver((entries,currentObserver) => entries.forEach((entry) => { if (!entry.isIntersecting) return; entry.target.classList.add('visible'); currentObserver.unobserve(entry.target); }), { threshold: .1 }); revealItems.forEach((item) => observer.observe(item)); }
