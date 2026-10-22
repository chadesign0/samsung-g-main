const footConditions = {
  sprain: {
    title: '발목염좌', hero: '../assets/subpages/foot/hero-ankle-sprain.jpg', heroPosition: 'center 58%',
    subtitle: '가볍게 접질렸어도 회복 상태를 살펴야 합니다',
    description: '발목이 갑작스럽게 꺾이면서 인대가 손상되면<br />통증과 부종뿐 아니라 관절의 불안정성이 남을 수 있습니다.',
    introTitle: '발목 관절을 지지하는 인대,<br />손상 정도와 회복 상태가 중요합니다',
    introText: '발목 인대는 뼈와 뼈를 연결해 관절을 안정적으로 지지합니다.<br />인대는 손상의 한 형태이며, 심한 손상이나 불충분한 회복 뒤에는 반복적으로 접질릴 수 있습니다. 통증뿐 아니라 관절의 흔들림과 동반 손상도 함께 살펴봅니다.',
    causeTitle: '순간적으로 틀어진 발목,<br />관절 인대에 손상을 줄 수 있습니다',
    causeIntro: '고르지 않은 길을 걷거나 점프 후 착지할 때의 충격을 방치하면<br />주변 인대가 늘어나거나 부분적으로 찢어질 수 있습니다.',
    causes: [['고르지 않은 지면','울퉁불퉁한 길이나 계단에서 발을 잘못 디디면 발목이 안쪽이나 바깥쪽으로 꺾일 수 있습니다.'],['스포츠 활동','달리기나 방향을 빠르게 바꾸고 점프 후 착지하는 과정에서 발목 인대에 강한 충격이 가해질 수 있습니다.'],['근육 피로와 균형 저하','발목 주변 근육이 지치거나 균형 감각이 떨어지면 움직임에 관절을 안정적으로 지지하기 어렵습니다.'],['반복된 발목 부상','이전 염좌가 충분히 회복되지 않은 상태에서는 발목의 불안정성이 커져 접질림이 계속될 수 있습니다.']],
    symptomTitle: '접질린 뒤 붓고 아픈 발목,<br />인대 손상의 정도를 확인해야 합니다',
    symptomIntro: '손상된 인대 주변에 통증과 부기가 나타나며<br />발을 디디거나 체중을 싣기가 어려울 수 있습니다.',
    symptoms: ['발목 바깥쪽을 중심으로 나타나는 통증과 압통','손상 부위에 생기는 부종과 멍','체중을 실을 때 심해지는 통증과 보행 불편','발목이 흔들리는 느낌과 움직임 제한'],
    treatmentTitle: '손상 정도와 관절의 안정성을 확인해<br />회복 단계에 맞는 치료를 적용합니다',
    treatmentIntro: '초기에는 보호·냉찜질·압박·거상으로 통증과 부종을 줄이며<br />이후 발목의 움직임과 지지 기능을 회복하도록 돕습니다.',
    treatments: [['약물치료','진통·소염제를 활용하여 손상 부위의 통증과 염증을 조절합니다.','medication'],['물리·운동치료','굳힌 발목을 부드럽게 하고 주변 근육과 관절의 균형 회복을 돕습니다.','footRehab'],['주사치료','통증이 오래 지속되거나 회복이 더딘 경우 손상 상태를 확인해 필요한 경우 선택적으로 적용합니다.','injection']],
  },
  ligament: {
    title: '발목 인대 손상', hero: '../assets/subpages/foot/hero-ankle-ligament.jpg', heroPosition: 'center 56%',
    subtitle: '자주 접질리는 발목, 인대의 안정성을 확인하세요',
    description: '발목을 지지하는 인대가 늘어나거나 찢어지면<br />통증과 부종에 더해 관절의 불안정해질 수 있습니다.',
    introTitle: '관절을 지지하는 발목 인대,<br />손상 정도와 회복 상태가 중요합니다',
    introText: '발목 인대는 뼈와 뼈를 연결해 관절을 안정적으로 지지합니다.<br />인대는 다양한 인대 손상의 한 형태이며, 심한 손상이나 불충분한 회복 뒤에는 반복적으로 접질릴 수 있습니다. 통증뿐 아니라 관절의 흔들림과 동반 손상도 함께 살펴봅니다.',
    causeTitle: '순간적인 비틀림과 재손상,<br />인대의 지지력을 떨어뜨립니다',
    causeIntro: '인대가 견딜 수 있는 범위를 넘는 힘이 가해지면<br />부분 손상부터 완전 파열까지 발생할 수 있습니다.',
    causes: [['강한 비틀림','발목이 안쪽이나 바깥쪽으로 꺾이면 인대가 지나치게 늘어날 수 있습니다.'],['착지와 방향 전환','점프 후 착지나 급격한 방향 전환은 발목 인대에 큰 부담을 줄 수 있습니다.'],['반복된 발목 부상','같은 부위를 반복해서 다치면 관절의 불안정성이 남을 수 있습니다.'],['불충분한 재활','근력과 균형 회복이 충분하지 않으면 다시 접질릴 가능성이 커집니다.']],
    symptomTitle: '통증이 남고 발목이 자주 꺾인다면,<br />인대의 회복 상태를 확인해 보세요',
    symptomIntro: '인대 주변의 통증과 부종, 멍이 생길 수 있으며<br />이후에도 발목이 흔들리거나 자주 접질릴 수 있습니다.',
    symptoms: ['발목 인대 주변의 통증과 압통','손상 부위에 나타나는 부종과 멍','체중을 실을 때 불편함과 움직임 제한','반복해서 접질리거나 발목이 빠지는 느낌'],
    treatmentTitle: '손상 정도와 관절의 안정성에 맞춰<br />보호와 재활을 단계적으로 진행합니다',
    treatmentIntro: '초기에는 통증과 부종을 관리하고 발목을 보호하며<br />회복에 따라 근력과 균형을 되찾는 재활을 시행합니다.',
    treatments: [['보호·통증 관리','상태에 따라 보조기와 약물을 사용해 발목을 보호하고 통증을 줄입니다.','medication'],['운동·재활치료','관절의 움직임과 근력, 균형을 회복해 다시 접질리는 위험을 줄입니다.','footRehab'],['수술 필요성 평가','재활 후에도 불안정성이 지속되면 인대 봉합·재건 등의 필요성을 살핍니다.','injection']],
  },
  achilles: {
    title: '아킬레스건염', hero: '../assets/subpages/foot/hero-achilles.jpg', heroPosition: 'center 73%',
    subtitle: '뒤꿈치 뒤쪽 통증과 아침의 뻣뻣함을 살펴보세요',
    description: '종아리와 뒤꿈치를 연결하는 아킬레스건에 부담이 쌓이면<br />걷거나 뛸 때 통증이 생기고 힘줄이 부을 수 있습니다.',
    introTitle: '걷고 뛰는 힘을 전달하는 힘줄,<br />반복되는 부하에 손상될 수 있습니다',
    introText: '아킬레스건은 종아리 근육의 힘을 뒤꿈치에 전달합니다.<br />반복적인 자극으로 힘줄의 중간이나 뼈에 붙는 부위가 아프고 뻣뻣해지며, 부종이나 두꺼워짐이 생길 수 있습니다. 통증의 위치와 활동량을 함께 살펴봅니다.',
    causeTitle: '갑자기 늘어난 운동량,<br />힘줄의 회복을 어렵게 합니다',
    causeIntro: '운동 부하와 신발, 종아리 유연성 등의 요인이<br />아킬레스건에 가해지는 부담을 높일 수 있습니다.',
    causes: [['급격한 운동량 증가','달리기 거리와 강도를 빠르게 늘리면 힘줄이 부하에 적응하기 어렵습니다.'],['반복되는 충격','달리기와 점프를 반복하는 활동은 힘줄에 지속적인 자극을 줍니다.'],['종아리의 뻣뻣함','종아리 근육의 유연성이 떨어지면 뒤꿈치 부착 부위의 부담이 커집니다.'],['신발과 뒤꿈치 형태','신발의 압박이나 높은 뒤꿈치뼈는 힘줄을 자극하는 요인이 됩니다.']],
    symptomTitle: '뛰거나 걸을 때 뒤꿈치가 아프다면,<br />아킬레스건의 상태를 확인해 보세요',
    symptomIntro: '아침에 힘줄이 뻣뻣하고 활동 중이나 운동 후 아플 수 있습니다.<br />갑작스러운 파열을 예방하려면 통증 여부를 확인해야 합니다.',
    symptoms: ['아킬레스건과 뒤꿈치 뒤쪽의 통증','아침에 느껴지는 힘줄의 뻣뻣함','달리기·점프 후 심해지는 통증','힘줄 부위의 부종과 두꺼워짐'],
    treatmentTitle: '힘줄의 부담을 조절하고<br />회복 단계에 맞춰 운동을 진행합니다',
    treatmentIntro: '통증을 유발하는 활동을 조절하고<br />손상 위치에 맞는 운동치료로 힘줄의 기능을 돕습니다.',
    treatments: [['부하·통증 관리','운동량을 조절하고 필요에 따라 약물 등으로 통증을 줄입니다.','medication'],['단계별 운동치료','손상 위치와 통증에 맞춰 종아리 유연성과 근력을 회복합니다.','footRehab'],['지속 통증 평가','치료에도 통증이 이어지면 재평가해 추가 치료나 수술의 필요성을 살핍니다.','injection']],
  },
  plantar: {
    title: '족저근막염', hero: '../assets/subpages/foot/hero-plantar-fasciitis.jpg', heroPosition: 'center 62%',
    subtitle: '아침 첫발을 디딜 때 뒤꿈치가 아픈가요?',
    description: '발바닥의 아치를 지지하는 족저근막에 부담이 쌓이면<br />뒤꿈치 바닥에 통증이 생기고 걸음이 불편해질 수 있습니다.',
    introTitle: '발바닥의 아치를 지지하는 근막,<br />반복되는 부담에 예민해질 수 있습니다',
    introText: '족저근막은 뒤꿈치에서 발 앞쪽으로 이어지는 조직으로 발의 아치를 지지하고 보행 중 충격을 견딥니다.<br />부담이 과해지면 뒤꿈치 근처에 통증이 나타나며 활동량과 종아리 유연성, 발의 형태를 함께 살펴봅니다.',
    causeTitle: '발바닥에 쌓이는 반복 부하,<br />근막의 자극을 높일 수 있습니다',
    causeIntro: '오래 서 있거나 운동량이 갑자기 늘면<br />발바닥이 감당해야 하는 부담이 커질 수 있습니다.',
    causes: [['반복되는 충격','달리기와 점프 같은 활동의 반복은 족저근막에 지속적인 부담을 줍니다.'],['장시간 서 있는 생활','딱딱한 바닥에서 오래 서 있으면 뒤꿈치와 발바닥에 부하가 쌓입니다.'],['근육 긴장과 발의 형태','뻣뻣한 종아리나 평발·높은 아치는 근막에 가해지는 힘에 영향을 줍니다.'],['체중·활동량 증가','체중이 늘거나 활동량이 증가하면 발바닥의 부담이 커질 수 있습니다.']],
    symptomTitle: '아침 첫걸음에 뒤꿈치가 아프다면,<br />발바닥 근막의 상태를 확인해 보세요',
    symptomIntro: '쉬었다가 움직일 때 통증이 두드러지고<br />몇 걸음 뒤 줄었다가 활동 후 다시 심해질 수 있습니다.',
    symptoms: ['아침 첫발을 디딜 때 나타나는 통증','오래 쉬었다 걷기 시작할 때의 통증','뒤꿈치 바닥을 누를 때 느끼는 압통','오래 걷거나 운동한 뒤 심해지는 통증'],
    treatmentTitle: '발바닥의 부담을 줄이고<br />근막과 종아리의 유연성을 회복합니다',
    treatmentIntro: '활동량과 신발을 조절하면서 스트레칭을 시행하고<br />통증이 오래 지속되면 추가 치료의 필요성을 평가합니다.',
    treatments: [['생활·통증 관리','충격이 큰 활동을 줄이고 신발을 조절해 발바닥의 부담과 통증을 관리합니다.','medication'],['스트레칭·운동','족저근막과 종아리를 부드럽게 늘리고 상태에 맞는 운동을 시행합니다.','stretch'],['추가 치료 평가','지속 통증은 원인을 다시 확인하고 보조기 등 추가 치료를 검토합니다.','bandage']],
  },
  hallux: {
    title: '무지외반증', hero: '../assets/subpages/foot/hero-hallux-valgus.jpg', heroPosition: 'center 45%',
    subtitle: '엄지발가락이 휘고 신발을 신을 때 아픈가요?',
    description: '엄지발가락이 둘째 발가락 쪽으로 기울고 관절 안쪽이 돌출되어<br />신발과 마찰하거나 걸을 때 통증이 생길 수 있습니다.',
    introTitle: '엄지발가락 관절의 정렬 변화,<br />모양과 보행의 불편함을 살펴봅니다',
    introText: '무지외반증은 엄지발가락 관절의 뼈 정렬이 변하는 질환입니다.<br />돌출된 부위가 신발에 눌려 붓거나 아플 수 있으며 진행하면 관절염이나 다른 발가락의 변형이 동반됩니다. 변형의 정도와 통증, 신발 착용의 불편함을 함께 평가합니다.',
    causeTitle: '발의 구조와 신발의 압박,<br />관절의 정렬에 영향을 줍니다',
    causeIntro: '타고난 발의 형태와 생활 습관이 관련되며<br />일부에서는 다른 관절 질환도 원인이 될 수 있습니다.',
    causes: [['발의 형태와 가족력','유전적으로 물려받은 발의 구조가 변형의 발생에 영향을 줄 수 있습니다.'],['앞코가 좁은 신발','발가락을 좁은 공간에 모으는 신발은 엄지발가락 관절을 압박합니다.'],['염증성 관절 질환','류마티스관절염 등은 관절 변형과 관련될 수 있습니다.'],['신경·근육의 불균형','일부 신경근육 질환은 발의 정렬과 관절 변형에 영향을 줄 수 있습니다.']],
    symptomTitle: '엄지발가락 안쪽이 튀어나와 아프다면,<br />발가락의 정렬을 확인해 보세요',
    symptomIntro: '돌출 부위가 신발에 눌려 붓거나 아프고<br />엄지발가락을 움직이거나 걸을 때 불편할 수 있습니다.',
    symptoms: ['엄지발가락이 둘째 발가락 쪽으로 기울어짐','관절 안쪽 돌출 부위의 통증과 압통','신발과 닿는 부위의 붓기·발적·굳은살','엄지발가락의 뻣뻣함과 보행 불편'],
    treatmentTitle: '신발의 압박을 줄이고<br />통증과 보행 기능에 맞춰 치료합니다',
    treatmentIntro: '보조기와 신발 조절로 압박을 줄이며<br />불편함이 지속되면 변형 교정 수술의 필요성을 평가합니다.',
    treatments: [['신발·통증 관리','앞코가 넓은 신발을 신고 필요에 따라 약물로 통증을 조절합니다.','medication'],['보조기 관리','상태에 맞는 패드나 보조기를 활용해 마찰과 부담을 줄입니다.','exercise'],['수술 필요성 평가','보존적 치료에도 보행이 불편하면 관절 정렬을 교정하는 수술을 검토합니다.','model']],
  },
  arthritis: {
    title: '발목관절염', hero: '../assets/subpages/foot/hero-ankle-arthritis.jpg', heroPosition: 'center 52%',
    subtitle: '걷기 시작할 때 뻣뻣하고 발목이 붓는가요?',
    description: '발목 관절의 연골 손상이나 염증으로 통증이 반복되면<br />관절이 뻣뻣해지고 걷는 동작이 불편해질 수 있습니다.',
    introTitle: '체중을 지탱하는 발목의 변화,<br />관절 손상의 원인부터 살펴봅니다',
    introText: '발목관절염은 연골의 마모나 관절의 염증으로 발생합니다.<br />과거 골절·탈구 등 외상 뒤에도 생길 수 있으며 통증과 부종, 움직임 제한이 보행에 영향을 줍니다. 손상 정도와 정렬, 통증 정도에 따라 치료를 함께 확인합니다.',
    causeTitle: '외상과 연골의 퇴행성 변화,<br />관절의 부담을 높일 수 있습니다',
    causeIntro: '원인에 따라 치료가 달라지므로 과거 손상과<br />현재의 관절 상태를 함께 평가해야 합니다.',
    causes: [['과거의 골절·탈구','관절면이 손상된 뒤 시간이 지나면서 외상 후 관절염이 생길 수 있습니다.'],['연골의 퇴행성 변화','연골이 점차 닳으며 관절 간격이 좁고 움직일 때 통증이 발생할 수 있습니다.'],['염증성 관절 질환','류마티스관절염 등은 관절에 염증을 일으키고 연골과 뼈를 손상시킵니다.'],['체중 부담과 가족력','과도한 체중이나 가족력은 퇴행성 관절염과 관련 있습니다.']],
    symptomTitle: '발목이 붓고 움직임이 뻣뻣하다면,<br />관절의 상태를 확인해 보세요',
    symptomIntro: '걷거나 활동할 때 아프고 쉬었다 움직일 때 뻣뻣하며<br />관절 주변의 부종과 압통이 동반될 수 있습니다.',
    symptoms: ['걷거나 발목을 움직일 때 나타나는 통증','아침이나 휴식 후 심해지는 뻣뻣함','관절 주변의 부종·열감과 압통','발목의 움직임 제한과 보행 어려움'],
    treatmentTitle: '관절의 부담과 통증을 줄이고<br />걷는 기능을 유지하도록 돕습니다',
    treatmentIntro: '원인과 진행 정도에 맞춰 약물, 운동, 보조기 등을 활용하고<br />통증과 기능 제한이 지속되면 수술적 치료를 평가합니다.',
    treatments: [['약물·부하 관리','질환에 맞춰 통증을 관리하고 활동량과 체중 부담을 조절합니다.','medication'],['운동·보조기','통증 범위 안에서 움직임을 유지하고 필요에 따라 보조기로 발목을 지지합니다.','exercise'],['추가 치료 평가','증상에 따라 주사치료를 검토하고 심한 관절 손상은 수술을 평가합니다.','model']],
  },
};

const pageKey = document.body.dataset.condition;
const page = footConditions[pageKey] || footConditions.sprain;
const tabs = [
  ['sprain','발목 염좌','ankle-sprain.html'], ['ligament','발목 인대 손상','ankle-ligament-injury.html'],
  ['achilles','아킬레스건염','achilles-tendinitis.html'], ['plantar','족저근막염','plantar-fasciitis.html'],
  ['hallux','무지외반증','hallux-valgus.html'], ['arthritis','발목관절염','ankle-arthritis.html'],
];
const treatmentImages = {
  medication: '../assets/subpages/frozen-shoulder/treatment-medication.png',
  footRehab: '../assets/subpages/foot/treatment-foot-rehab.jpg',
  injection: '../assets/subpages/frozen-shoulder/treatment-injection.jpg',
  exercise: '../assets/subpages/hand/treatment-exercise.jpg',
  model: '../assets/subpages/foot/treatment-foot-model.jpg',
  stretch: '../assets/subpages/foot/treatment-stretch.jpg',
  bandage: '../assets/subpages/foot/treatment-bandage.jpg',
};

document.title = `${page.title} | 삼성G정형외과`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `삼성G정형외과 ${page.title} 진료 안내`);
const tabMarkup = tabs.map(([key,label,href]) => `<a href="${href}"${key === pageKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const causeMarkup = page.causes.map(([title,description],index) => `<li><strong class="foot-cause-number">${String(index + 1).padStart(2,'0')}</strong><div><h3>${title}</h3><p>${description}</p></div></li>`).join('');
const symptomMarkup = page.symptoms.map((item) => `<li><span aria-hidden="true">✓</span>${item}</li>`).join('');
const treatmentMarkup = page.treatments.map(([title,description,image]) => `<article class="foot-treatment-step"><img src="${treatmentImages[image]}" alt="${title} 안내 이미지" /><h3>${title}</h3><p>${description}</p></article>`).join('');

if (!document.querySelector('#main').hasAttribute('data-prerendered')) document.querySelector('#main').innerHTML = `
  <section class="disease-hero" style="--hero-image:url('${page.hero}');--hero-position:${page.heroPosition}" aria-labelledby="disease-title"><div class="disease-hero-shade"></div><div class="disease-hero-inner reveal"><p class="breadcrumb"><span class="home-mark">⌂</span> 삼성G정형외과 <span>›</span> 관절 클리닉 <span>›</span> 발·발목 <span>›</span> ${page.title}</p><h1 id="disease-title">${page.title}</h1><h2>${page.subtitle}</h2><p>${page.description}</p></div><nav class="disease-tabs" aria-label="발·발목 질환 종류">${tabMarkup}</nav></section>
  <section class="foot-intro" aria-labelledby="intro-title"><div class="section-inner foot-intro-grid"><div class="foot-intro-copy reveal"><h2 id="intro-title">${page.introTitle}</h2><p>${page.introText}</p></div><img class="foot-intro-image reveal" src="../assets/subpages/foot/consultation-foot.jpg" alt="의사가 환자에게 발과 발목의 상태를 설명하는 모습" /></div></section>
  <section class="foot-causes" aria-labelledby="causes-title"><div class="section-inner foot-causes-grid"><div class="foot-causes-copy reveal"><h2 id="causes-title">${page.causeTitle}</h2><p>${page.causeIntro}</p></div><ol class="foot-cause-list reveal">${causeMarkup}</ol></div></section>
  <section class="foot-symptoms" aria-labelledby="symptoms-title"><div class="foot-symptoms-shade"></div><div class="section-inner foot-symptoms-inner"><div class="foot-symptoms-copy reveal"><h2 id="symptoms-title">${page.symptomTitle}</h2><p>${page.symptomIntro}</p><ul class="symptom-checklist">${symptomMarkup}</ul></div></div></section>
  <section class="foot-treatments" aria-labelledby="treatments-title"><div class="section-inner"><div class="section-heading reveal"><h2 id="treatments-title">${page.treatmentTitle}</h2><p>${page.treatmentIntro}</p></div><div class="foot-treatment-flow reveal">${treatmentMarkup}</div></div></section>
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
