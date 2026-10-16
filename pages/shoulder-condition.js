const shoulderConditions = {
  rotator: {
    title: '회전근개 질환',
    hero: '../assets/subpages/shoulder/hero-rotator.png',
    heroPosition: 'center',
    subtitle: '팔을 들 때 아픈 어깨를 그냥 두지 마세요',
    description: '팔을 들어 올리고 회전시키는 힘줄이 약해지거나 손상되면<br />통증과 함께 어깨의 힘이 떨어질 수 있습니다.',
    causeTitle: '반복해서 사용하는 어깨,<br />힘줄은 서서히 약해질 수 있습니다',
    causeIntro: '노화에 따른 변화와 반복적인 팔 사용이 이어지면<br />회전근개 힘줄에 부담이 쌓여 손상될 수 있습니다.',
    causes: [
      ['반복적인<br />팔 사용', '머리 위 동작이나 반복 작업이 힘줄에 부담을 줄 수 있습니다.'],
      ['퇴행성<br />변화', '나이가 들면서 힘줄의 탄력과 회복력이 떨어질 수 있습니다.'],
      ['갑작스러운<br />충격', '넘어지거나 무거운 물건을 들 때 힘줄이 손상될 수 있습니다.'],
      ['어깨 주변<br />근육 불균형', '관절 움직임의 균형이 흐트러지면 힘줄 부담이 커질 수 있습니다.'],
    ],
    symptomTitle: '팔을 들 때 힘이 빠지고 통증이 이어진다면<br />회전근개 상태를 확인해 보세요',
    symptomIntro: '힘줄의 손상 정도에 따라 통증과 근력 저하가 함께 나타날 수 있습니다.',
    symptoms: ['팔을 들어 올릴 때 생기는 어깨 통증', '옆으로 누울 때 심해지는 야간통', '팔에 힘이 빠지고 물건 들기가 어려움', '어깨에서 팔까지 이어지는 불편함'],
    treatmentTitle: '손상 정도와 기능 상태를 살펴<br />어깨의 안정적인 움직임을 회복합니다',
    treatmentIntro: '통증을 줄이고 힘줄에 가해지는 부담을 낮추며<br />관절의 움직임과 근력을 단계적으로 회복합니다.',
    treatments: [
      ['약물치료', '진통·소염제를 활용해 통증과 염증을 완화합니다.', 'medication'],
      ['물리·운동치료', '굳어진 근육과 관절을 부드럽게 하고 어깨의 움직임을 회복합니다.', 'physical'],
      ['주사치료', '통증 유발점을 확인해 상태에 맞는 주사치료를 시행합니다.', 'injection'],
    ],
  },
  frozen: {
    title: '오십견',
    hero: '../assets/subpages/shoulder/hero-frozen-rotator.jpg',
    heroPosition: 'center 44%',
    subtitle: '굳어가는 어깨, 움직임의 변화를 살펴보세요',
    description: '어깨를 감싸는 관절낭이 두꺼워지고 뻣뻣해지면<br />통증과 함께 팔을 움직이는 범위가 줄어들 수 있습니다.',
    causeTitle: '일상 속 작은 움직임도 불편하다면,<br />어깨가 굳어가는 신호일 수 있습니다',
    causeIntro: '뚜렷한 계기 없이 생기기도 하며, 당뇨나 갑상선 질환,<br />부상 후 어깨를 오래 움직이지 않은 경우와 관련될 수 있습니다.',
    causes: [
      ['관절낭의<br />변화', '관절을 감싼 조직이 두꺼워지고 굳으면서 움직임이 제한됩니다.'],
      ['당뇨·갑상선<br />질환', '당뇨와 갑상선 질환은 오십견 발생 위험과 관련이 있습니다.'],
      ['부상 후<br />움직임 감소', '수술이나 부상 뒤 어깨를 오래 고정하면 관절이 굳을 수 있습니다.'],
      ['중년 이후<br />발생 증가', '40~60대에 흔하지만 나이만으로 판단할 수는 없습니다.'],
    ],
    symptomTitle: '팔을 올리거나 뒤로 돌리기 어렵다면<br />어깨의 운동 범위를 확인해 보세요',
    symptomIntro: '스스로 움직일 때뿐 아니라 다른 사람이 도와줘도 어깨가 잘 움직이지 않는 것이 특징입니다.',
    symptoms: ['팔을 들어 올리기 어려운 뻣뻣함', '등 뒤로 손을 보내기 힘든 움직임', '움직일 때 깊어지는 어깨 통증', '옷 입기와 머리 감기의 불편함'],
    treatmentTitle: '통증과 굳어진 정도를 살펴<br />어깨의 움직임 회복을 돕습니다',
    treatmentIntro: '통증을 조절하면서 관절 운동 범위를 단계적으로 넓힙니다.<br />증상과 경직 정도에 따라 적절한 치료 방법을 선택합니다.',
    treatments: [
      ['약물치료', '진통·소염제를 사용해 통증과 염증을 조절합니다.', 'medication'],
      ['물리·운동치료', '상태에 맞는 스트레칭과 관절 운동으로 굳어진 어깨를 회복합니다.', 'physical'],
      ['주사치료', '필요한 경우 관절 내 주사치료 등으로 통증을 줄이는 데 도움을 줍니다.', 'injection'],
    ],
  },
  calcific: {
    title: '석회성건염',
    hero: '../assets/subpages/shoulder/hero-calcific.jpg',
    heroPosition: 'center 44%',
    subtitle: '갑자기 심해진 어깨 통증, 원인을 확인하세요',
    description: '어깨 힘줄 안에 석회가 쌓이면 주변에 염증이 생겨<br />갑작스럽고 심한 통증이 나타날 수 있습니다.',
    causeTitle: '특별히 다친 기억이 없어도,<br />어깨 힘줄에 통증이 생길 수 있습니다',
    causeIntro: '석회성건염은 회전근개 힘줄에 칼슘 성분이 침착된 상태입니다.<br />원인은 명확하지 않으며, 증상과 영상검사를 함께 살펴봅니다.',
    causes: [
      ['힘줄 속<br />석회 침착', '힘줄 안에 쌓인 석회가 주변 조직을 자극해 통증을 일으킵니다.'],
      ['주변 조직의<br />염증', '석회 주변에 염증이 생기면 통증이 심해질 수 있습니다.'],
      ['어깨 사용과<br />힘줄 부담', '반복적인 힘줄 사용과 과부하가 원인의 하나로 고려됩니다.'],
      ['개인마다<br />다른 경과', '석회가 있어도 증상이 없거나 갑자기 통증이 심해질 수 있습니다.'],
    ],
    symptomTitle: '갑자기 찾아온 심한 통증이라면<br />힘줄 속 석회와 염증을 살펴보세요',
    symptomIntro: '어깨 앞쪽이나 옆쪽의 통증과 함께 팔을 움직이기 어려울 수 있습니다.',
    symptoms: ['다치지 않았는데 생긴 심한 통증', '어깨 앞쪽이나 옆쪽을 누를 때 통증', '팔을 들거나 돌리기 어려운 상태', '가만히 있어도 지속되는 어깨 통증'],
    treatmentTitle: '석회와 주변 염증을 확인해<br />통증과 움직임을 함께 관리합니다',
    treatmentIntro: '증상과 석회의 상태에 따라 약물·운동치료를 우선 고려합니다.<br />통증이 지속되면 주사나 석회 흡입술 등을 검토합니다.',
    treatments: [
      ['약물치료', '진통·소염제로 통증과 염증을 조절하고 충분한 휴식을 돕습니다.', 'medication'],
      ['물리·운동치료', '통증이 완화되면 관절 운동을 시행해 어깨 움직임을 회복합니다.', 'physical'],
      ['주사·석회 흡입술', '필요한 경우 주사 또는 초음파 유도하 석회 흡입술을 고려합니다.', 'injection'],
    ],
  },
  impingement: {
    title: '어깨 충돌증후군',
    hero: '../assets/subpages/shoulder/hero-impingement.jpg',
    heroPosition: 'center 42%',
    subtitle: '팔을 올릴 때 반복되는 통증을 살펴보세요',
    description: '팔을 들어 올릴 때 힘줄과 점액낭이 자극을 받으면<br />어깨 앞쪽이나 옆쪽에 통증이 나타날 수 있습니다.',
    causeTitle: '반복해서 팔을 드는 동작,<br />어깨 힘줄에 부담이 될 수 있습니다',
    causeIntro: '어깨 위쪽 뼈와 회전근개 사이에서 힘줄과 점액낭이 자극받습니다.<br />팔을 쓰는 습관과 통증이 생기는 움직임을 함께 확인합니다.',
    causes: [
      ['머리 위로<br />팔 들기', '머리 위로 팔을 드는 동작이 반복되면 힘줄에 부담이 쌓입니다.'],
      ['반복적인<br />작업 동작', '높은 곳에서 작업하거나 팔을 자주 들어 올리면 어깨가 자극됩니다.'],
      ['운동 중<br />어깨 사용', '수영이나 테니스처럼 팔을 크게 쓰는 운동과 관련될 수 있습니다.'],
      ['힘줄·점액낭<br />자극', '힘줄과 점액낭에 생긴 자극과 염증이 통증으로 이어집니다.'],
    ],
    symptomTitle: '올릴 때도, 내릴 때도 팔이 아프다면<br />통증이 생기는 동작을 확인하세요',
    symptomIntro: '초기에는 가벼운 불편함으로 시작할 수 있지만 방치하면 통증과 움직임 제한이 이어질 수 있습니다.',
    symptoms: ['팔을 위로 들 때 생기는 어깨 통증', '올렸던 팔을 내릴 때 느껴지는 통증', '어깨 앞쪽에서 팔 옆으로 번지는 통증', '밤에 심해지는 통증과 움직임 제한'],
    treatmentTitle: '어깨에 반복되는 자극을 줄이고<br />안정적인 움직임을 돕습니다',
    treatmentIntro: '충돌을 유발하는 활동을 조절하며 통증을 관리합니다.<br />어깨 주변 근육과 관절 움직임을 단계적으로 회복합니다.',
    treatments: [
      ['약물치료', '진통·소염제로 통증과 염증을 조절합니다.', 'medication'],
      ['물리·운동치료', '어깨의 운동 범위와 근력을 개선해 팔을 움직일 때 부담을 줄입니다.', 'physical'],
      ['주사치료', '다른 치료로 통증이 충분히 줄지 않으면 상태에 따라 고려합니다.', 'injection'],
    ],
  },
  dislocation: {
    title: '어깨 탈구',
    hero: '../assets/subpages/shoulder/hero-dislocation.jpg',
    heroPosition: 'center 47%',
    subtitle: '어깨가 빠진 듯한 통증은 빠른 확인이 필요합니다',
    description: '위팔뼈가 어깨 관절의 제자리에서 벗어나면<br />심한 통증과 함께 팔을 움직이기 어려워집니다.',
    causeTitle: '큰 충격으로 빠진 어깨,<br />관절 주변의 손상도 함께 살펴야 합니다',
    causeIntro: '넘어지거나 부딪힌 뒤 어깨가 탈구될 수 있으며,<br />인대·관절와순·뼈 등 주변 조직의 손상이 동반될 수 있습니다.',
    causes: [
      ['낙상과<br />직접 충격', '넘어지거나 어깨에 강한 충격을 받으면 관절이 빠질 수 있습니다.'],
      ['스포츠 중<br />외상', '운동 중 충돌이나 무리한 움직임이 손상으로 이어집니다.'],
      ['느슨한<br />관절 인대', '관절을 지지하는 인대가 느슨한 경우 탈구 위험이 높아집니다.'],
      ['이전의<br />탈구 경험', '한 번 빠진 어깨는 관절이 불안정해져 다시 빠질 수 있습니다.'],
    ],
    symptomTitle: '어깨 모양이 달라지고 움직이지 못한다면,<br />즉시 진료를 받아야 합니다',
    symptomIntro: '탈구가 의심되면 팔을 억지로 움직이거나 스스로 맞추지 말고 검사를 받아야 합니다.',
    symptoms: ['갑자기 생긴 심한 어깨 통증', '어깨 모양의 변화와 부종', '팔을 움직이기 어렵거나 힘이 빠짐', '팔이나 손의 저림 또는 감각 저하'],
    treatmentTitle: '관절의 위치와 손상 상태를 확인해<br />회복과 재발 예방을 돕습니다',
    treatmentIntro: '급성 탈구는 의료진의 정복과 손상 평가가 우선입니다.<br />안정 후에는 단계적 재활을 진행하고 재발 위험을 살핍니다.',
    treatments: [
      ['통증 조절', '의료진의 평가에 따라 통증을 조절하고 주변 동반 손상 여부를 확인합니다.', 'medication'],
      ['고정·재활치료', '정복 후 필요한 기간 동안 관절을 보호하고 단계적으로 근력을 회복합니다.', 'physical'],
      ['정복·수술적 평가', '의료진이 관절을 제자리로 맞추며 반복 탈구나 큰 손상은 수술 여부를 평가합니다.', 'consultation'],
    ],
  },
  labral: {
    title: '관절와순 손상',
    hero: '../assets/subpages/shoulder/hero-labral.jpg',
    heroPosition: 'center 48%',
    subtitle: '어깨 깊은 곳의 통증과 걸리는 느낌을 확인하세요',
    description: '어깨 관절을 안정적으로 받쳐주는 관절와순이 손상되면<br />충돌과 함께 걸림이나 불안정한 느낌이 생길 수 있습니다.',
    causeTitle: '크게 다친 순간부터 반복 동작까지,<br />어깨를 지지하는 조직에 부담이 됩니다',
    causeIntro: '관절와순은 어깨 관절의 가장자리를 감싸는 연골성 조직입니다.<br />강한 충격이나 반복적인 팔 사용으로 손상될 수 있습니다.',
    causes: [
      ['넘어지며<br />팔로 짚기', '팔을 뻗어 바닥을 짚거나 어깨에 직접 충격을 받으면 손상될 수 있습니다.'],
      ['갑작스러운<br />팔 당김', '무거운 물건을 들거나 팔이 갑자기 당겨질 때 부담이 커집니다.'],
      ['반복적인<br />던지기 동작', '공을 던지거나 머리 위로 팔을 반복해 쓰는 동작이 영향을 줄 수 있습니다.'],
      ['어깨 탈구와<br />동반 손상', '어깨가 관절에서 빠질 때 관절와순이 함께 손상될 수 있습니다.'],
    ],
    symptomTitle: '움직일 때 걸리거나 빠질 듯하다면,<br />관절의 안정성을 확인해 보세요',
    symptomIntro: '깊은 어깨 통증이나 걸림은 다른 어깨질환에서도 나타나므로 진찰과 검사를 함께 살펴야 합니다.',
    symptoms: ['팔을 들 때 느껴지는 깊은 어깨 통증', '움직일 때 걸리거나 잡히는 느낌', '어깨가 빠질 듯한 불안정한 느낌', '팔의 힘이 줄고 움직임이 제한됨'],
    treatmentTitle: '손상 부위와 활동 수준에 맞춰<br />안정적인 어깨 사용을 돕습니다',
    treatmentIntro: '통증을 유발하는 활동을 줄이고 관절을 지지하는 근육을 강화합니다.<br />손상 정도와 활동 수준에 따라 치료 방법을 결정합니다.',
    treatments: [
      ['약물치료', '휴식과 진통·소염제 등을 통해 어깨 통증과 염증을 조절합니다.', 'medication'],
      ['물리·운동치료', '회전근개와 어깨 주변 근육을 강화해 관절의 안정성과 기능 회복을 돕습니다.', 'physical'],
      ['손상 평가·치료', '증상이 지속되거나 불안정성이 크면 손상 정도에 따라 수술적 치료를 검토합니다.', 'consultation'],
    ],
  },
  sports: {
    title: '스포츠 어깨 손상',
    hero: '../assets/subpages/shoulder/hero-sports.png',
    heroPosition: 'center 44%',
    subtitle: '운동 중 반복되는 어깨 통증을 넘기지 마세요',
    description: '던지기와 머리 위 동작이 반복되거나 충격을 받으면<br />힘줄·인대·관절와순 등 여러 조직이 손상될 수 있습니다.',
    causeTitle: '더 많이 쓰는 만큼,<br />어깨의 회복과 균형도 중요합니다',
    causeIntro: '운동 종류와 자세, 반복 사용량에 따라 부담이 달라집니다.<br />통증이 생긴 동작과 손상된 조직을 함께 확인합니다.',
    causes: [
      ['반복적인<br />머리 위 동작', '공을 던지거나 팔을 반복해 올리면 관절에 부담이 쌓입니다.'],
      ['운동 중<br />직접 충격', '충돌이나 낙상으로 어깨 힘줄과 인대가 손상될 수 있습니다.'],
      ['어깨 주변<br />근육 불균형', '관절을 움직이는 근육의 균형 변화가 어깨에 영향을 줍니다.'],
      ['움직임과<br />유연성 변화', '관절 움직임이 줄거나 특정 부위가 느슨해지면 손상 위험이 커집니다.'],
    ],
    symptomTitle: '평소 하던 동작이 아프고 힘이 떨어진다면,<br />운동을 잠시 멈추고 확인하세요',
    symptomIntro: '운동 중 통증과 힘의 저하, 걸림, 불안정감이 생길 수 있습니다.',
    symptoms: ['공을 던지거나 팔을 들 때 통증', '운동 후에도 이어지는 어깨 불편함', '팔의 힘이나 운동 범위가 줄어듦', '걸리는 느낌 또는 어깨 불안정감'],
    treatmentTitle: '손상된 조직과 운동 동작을 살펴<br />단계적인 활동 복귀를 돕습니다',
    treatmentIntro: '통증을 조절하고 어깨의 움직임과 근력을 회복합니다.<br />회복 상태에 맞춰 운동 강도와 반복 횟수를 조절합니다.',
    treatments: [
      ['약물·활동 조절', '진통·소염제와 활동 조절로 통증과 염증을 관리합니다.', 'activity'],
      ['물리·운동치료', '어깨 관절과 유연성을 회복하고 부담을 줄이는 운동 동작을 익힙니다.', 'physical'],
      ['주사·추가 치료', '통증 원인에 따라 주사치료를 고려하며 손상이 지속되면 추가 치료를 검토합니다.', 'injection'],
    ],
  },
};

const pageKey = document.body.dataset.condition;
const page = shoulderConditions[pageKey] || shoulderConditions.frozen;
const treatmentImages = {
  medication: '../assets/subpages/frozen-shoulder/treatment-medication.png',
  physical: '../assets/subpages/frozen-shoulder/treatment-physical.jpg',
  injection: '../assets/subpages/frozen-shoulder/treatment-injection.jpg',
  consultation: '../assets/subpages/shoulder/treatment-consultation.jpg',
  activity: '../assets/subpages/shoulder/treatment-activity.jpg',
};
const tabs = [
  ['rotator', '회전근개 질환', 'rotator-cuff.html'],
  ['frozen', '오십견', 'frozen-shoulder.html'],
  ['calcific', '석회성건염', 'calcific-tendinitis.html'],
  ['impingement', '어깨충돌증후군', 'shoulder-impingement.html'],
  ['dislocation', '어깨탈구', 'shoulder-dislocation.html'],
  ['labral', '관절와순손상', 'shoulder-labral-tear.html'],
  ['sports', '스포츠손상', 'shoulder-sports-injury.html'],
];

document.title = `${page.title} | 삼성G정형외과`;
document.querySelector('meta[name="description"]')?.setAttribute('content', `삼성G정형외과 ${page.title} 진료 안내`);

const renderTabs = () => tabs.map(([key, label, href]) => `<a href="${href}"${key === pageKey ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const renderCauses = () => page.causes.map(([title, description], index) => `
  <article class="cause-point reveal">
    <span class="cause-number">${index + 1}</span>
    <span class="cause-dot" aria-hidden="true"></span>
    <h3>${title}</h3>
    <p>${description}</p>
  </article>`).join('');
const renderSymptoms = () => page.symptoms.map((symptom) => `<li><span aria-hidden="true">✓</span>${symptom}</li>`).join('');
const renderTreatments = () => page.treatments.map(([title, description, image]) => `
  <article class="treatment-card reveal">
    <img src="${treatmentImages[image]}" alt="${title} 안내 이미지" />
    <div class="treatment-card-copy"><span class="round-check" aria-hidden="true">✓</span><h3>${title}</h3><p>${description}</p></div>
  </article>`).join('');

document.querySelector('#main').innerHTML = `
  <section class="disease-hero" style="--hero-image:url('${page.hero}');--hero-position:${page.heroPosition}" aria-labelledby="disease-title">
    <div class="disease-hero-shade"></div>
    <div class="disease-hero-inner reveal">
      <p class="breadcrumb"><span class="home-mark" aria-hidden="true">⌂</span> 삼성G정형외과 <span aria-hidden="true">›</span> 어깨질환 <span aria-hidden="true">›</span> ${page.title}</p>
      <h1 id="disease-title">${page.title}</h1>
      <h2>${page.subtitle}</h2>
      <p>${page.description}</p>
    </div>
    <nav class="disease-tabs" aria-label="어깨질환 종류">${renderTabs()}</nav>
  </section>

  <section class="causes" aria-labelledby="causes-title">
    <div class="section-inner">
      <div class="section-heading reveal"><h2 id="causes-title">${page.causeTitle}</h2><p>${page.causeIntro}</p></div>
      <div class="cause-timeline">${renderCauses()}</div>
    </div>
  </section>

  <section class="symptoms" aria-labelledby="symptoms-title">
    <div class="symptoms-shade"></div>
    <div class="symptoms-inner section-inner">
      <div class="symptoms-copy reveal">
        <h2 id="symptoms-title">${page.symptomTitle}</h2>
        <p>${page.symptomIntro}</p>
        <ul class="symptom-checklist">${renderSymptoms()}</ul>
      </div>
    </div>
  </section>

  <section class="treatments" aria-labelledby="treatments-title">
    <div class="section-inner">
      <div class="section-heading reveal"><h2 id="treatments-title">${page.treatmentTitle}</h2><p>${page.treatmentIntro}</p></div>
      <div class="treatment-grid">${renderTreatments()}</div>
    </div>
  </section>

  <section class="contact-us" id="contact-us" aria-labelledby="contact-us-title">
    <div class="contact-us-shade"></div>
    <div class="section-inner contact-us-inner reveal">
      <p class="eyebrow">Contact Us</p><h2 id="contact-us-title">상담문의</h2><p>진료와 치료에 대한 궁금증을 편하게 문의해 주세요.</p>
      <div class="contact-us-links">
        <a class="contact-kakao" href="https://pf.kakao.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 44 34" aria-hidden="true"><path d="M22 2C10.95 2 2 8.72 2 17c0 5.27 3.62 9.91 9.1 12.58L9 34l7.1-2.82c1.87.53 3.85.82 5.9.82 11.05 0 20-6.72 20-15S33.05 2 22 2Z"/><text x="22" y="21">TALK</text></svg>카카오톡 채널</a>
        <a class="contact-phone" href="tel:0507-1452-3000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg>0507.1452.3000</a>
        <a class="contact-naver" href="https://talk.naver.com" target="_blank" rel="noreferrer"><strong aria-hidden="true">N</strong>네이버 톡톡</a>
      </div>
    </div>
  </section>`;

const menuButton = document.querySelector('.menu-toggle');
const siteHeader = document.querySelector('.site-header');
const desktopHeader = window.matchMedia('(min-width: 801px)');
const updateHeaderNavigation = () => siteHeader?.classList.toggle('is-nav-collapsed', desktopHeader.matches && window.scrollY > 80);
window.addEventListener('scroll', updateHeaderNavigation, { passive: true });
window.addEventListener('resize', updateHeaderNavigation);
updateHeaderNavigation();

menuButton?.addEventListener('click', () => {
  const isOpen = document.body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
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
  }, { threshold: 0.1 });
  revealItems.forEach((item) => observer.observe(item));
}
