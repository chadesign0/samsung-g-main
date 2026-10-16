(() => {
  const main = document.querySelector('#main');
  const page = document.body.dataset.hospitalPage;
  if (!main || !page) return;

  const pages = {
    greeting: {
      title: '인사말 & 비전',
      subtitle: '바른 진단에서 편안한 일상까지',
      description: '삼성G정형외과는 통증의 원인을 세심하게 살피고<br />건강한 움직임을 되찾는 모든 과정을 함께합니다.',
      content: `
        <section class="greeting-lead"><div class="hospital-page-title reveal"><h2>편안한 움직임을 되찾는 과정,<br />삼성G정형외과가 함께합니다</h2></div></section>
        <section class="greeting-message"><div class="section-inner greeting-message-grid">
          <figure class="reveal"><picture><source media="(min-width: 801px)" srcset="../assets/subpages/hospital/doctor-lee-portrait-desktop.jpg" /><img src="../assets/subpages/hospital/greeting-director.png" alt="이상현 대표원장" /></picture></figure>
          <div class="reveal"><h2>안녕하세요.<br />삼성G정형외과를 찾아주셔서 감사합니다.</h2>
            <p>관절과 척추의 통증은 걷고, 앉고, 움직이는<br />평범한 일상에 크고 작은 불편함을 만들 수 있습니다.</p>
            <p>같은 부위에서 나타나는 증상도 원인과 진행 정도가 다르기 때문에<br />현재 상태를 정확하게 확인하고 필요한 치료를 하는 과정이 중요합니다.</p>
            <p>삼성G정형외과는 불편한 증상을 세심하게 살피고<br />검사 결과와 치료 방향을 이해하기 쉽게 안내하고자 합니다.</p>
            <p>진단부터 비수술치료, 시술과 회복 관리까지<br />각자의 상태와 생활환경을 고려한 진료를 이어가겠습니다.</p>
            <p>가까운 곳에서 편안하게 찾을 수 있고<br />시간이 지나도 변함없이 신뢰할 수 있는 병원이 되겠습니다.</p>
          </div>
        </div></section>
        <section class="vision-band"><div class="section-inner vision-band-inner">
          <div class="reveal reveal-sequence" data-reveal-next-delay="750"><h2>정확한 진단과 필요한 치료로<br />건강한 움직임을 지켜드립니다.</h2><p>아픈 부위만 치료하는 데 그치지 않고<br />다시 편안한 일상으로 돌아가는 과정까지 함께하겠습니다.</p></div>
          <figure class="reveal reveal-sequence"><img src="../assets/subpages/hospital/greeting-point-01.png" alt="환자의 움직임을 진찰하는 의료진" /></figure>
        </div></section>
        <section class="vision-points"><div class="section-inner vision-points-grid">
          <article class="vision-point vision-point-copy-only reveal reveal-sequence"><div class="vision-point-copy"><small>POINT 01</small><h3>세심한 진단과 충분한 설명</h3><p>통증이 나타나는 부위와 원인을 살펴보고 필요한 검사와 상태를 함께 확인합니다.<br /><br />검사 결과와 치료 과정을 알기 쉽게 설명하여 안심하고 치료를 이어갈 수 있도록 돕겠습니다.</p></div></article>
          <article class="vision-point"><figure class="reveal reveal-sequence"><img src="../assets/subpages/hospital/greeting-point-02.png" alt="검사 결과를 설명하는 의료진" /></figure><div class="vision-point-copy reveal reveal-sequence"><small>POINT 02</small><h3>상태에 맞춘 단계적인 치료</h3><p>증상의 정도와 생활환경, 검사 결과를 종합하여 현재 상태에 필요한 치료 방법을 계획합니다.<br /><br />비수술치료부터 시술과 수술적 치료까지 불필요한 과정은 줄이고 필요한 치료를 우선하겠습니다.</p></div></article>
          <article class="vision-point"><figure class="reveal reveal-sequence"><img src="../assets/subpages/hospital/greeting-point-03.png" alt="환자에게 회복 과정을 안내하는 의료진" /></figure><div class="vision-point-copy reveal reveal-sequence"><small>POINT 03</small><h3>진료부터 회복까지 이어지는 시스템</h3><p>진료실에서 검사와 치료가 유기적으로 이어지는 시스템과 시술 후 충분한 안정을 취할 수 있는 낮병동을 운영합니다.<br /><br />치료가 끝난 이후에도 회복 상태를 세심하게 살피며 편안하게 일상으로 복귀할 수 있도록 함께하겠습니다.</p></div></article>
        </div></section>`,
    },
    tour: {
      title: '둘러보기',
      subtitle: '편안한 진료를 위해 세심하게 준비한 공간',
      description: '삼성G정형외과의 진료실과 치료 공간을<br />사진으로 미리 둘러보세요.',
      content: `
        <section class="tour-page"><div class="section-inner">
          <h2 class="reveal">삼성G정형외과 방문 전<br />원내를 미리 둘러보세요.</h2>
          <figure class="tour-stage reveal"><img id="tour-main-image" src="../assets/place-full-main.jpg" alt="삼성G정형외과 로비" /><figcaption class="tour-caption"><strong id="tour-title">로비</strong><p id="tour-description">밝고 쾌적한 공간에서 진료를 기다리는 시간까지<br />편안하게 머무를 수 있도록 세심하게 구성했습니다.</p></figcaption></figure>
          <div class="tour-thumbnails" aria-label="원내 공간 사진 선택">
            <button class="tour-thumb" type="button" aria-current="true" data-image="../assets/place-full-main.jpg" data-title="로비" data-description="밝고 쾌적한 공간에서 진료를 기다리는 시간까지|편안하게 머무를 수 있도록 세심하게 구성했습니다."><img src="../assets/place-full-main.jpg" alt="로비" /></button>
            <button class="tour-thumb" type="button" aria-current="false" data-image="../assets/place-full-top.jpg" data-title="진료실" data-description="환자의 이야기를 충분히 듣고 상태를 꼼꼼하게|확인할 수 있도록 준비한 진료 공간입니다."><img src="../assets/place-full-top.jpg" alt="진료실" /></button>
            <button class="tour-thumb" type="button" aria-current="false" data-image="../assets/place-full-left-small.jpg" data-title="치료실" data-description="치료와 회복 과정에 집중할 수 있도록|편안하고 쾌적하게 관리하는 공간입니다."><img src="../assets/place-full-left-small.jpg" alt="치료실" /></button>
            <button class="tour-thumb" type="button" aria-current="false" data-image="../assets/place-full-bottom.jpg" data-title="수액실" data-description="안정적으로 휴식을 취하며 치료받을 수 있도록|프라이버시와 편안함을 고려했습니다."><img src="../assets/place-full-bottom.jpg" alt="수액실" /></button>
          </div>
        </div></section>`,
    },
    directions: {
      title: '오시는길 & 진료안내',
      subtitle: '오시는 길과 진료시간을 안내해 드립니다',
      description: '삼성G정형외과의 위치와 진료시간을 확인하시고<br />편안하게 방문해 주세요.',
      content: `
        <section class="directions-page" id="clinic-location"><div class="section-inner">
          <div class="directions-heading reveal"><div><p class="directions-eyebrow">( Location )</p><h2>삼성G정형외과 오시는 길</h2><p class="directions-address">경기 군포시 군포로 522 4층</p><p class="directions-note">군포새마을금고 건물 옆 넓은 주차타워에 편리하게 주차하실 수 있습니다.</p></div>
          <nav class="map-links" aria-label="지도 서비스"><a href="https://map.naver.com/p/entry/place/2044656006" target="_blank" rel="noreferrer"><strong>N</strong>네이버 지도</a><a href="https://map.kakao.com" target="_blank" rel="noreferrer">● 카카오 지도</a><a href="https://tmap.life" target="_blank" rel="noreferrer"><strong>T</strong>티맵 지도</a></nav></div>
          <div class="map-placeholder reveal"><iframe title="삼성G정형외과 위치 지도" src="https://www.google.com/maps?q=37.3525822,126.9456639&amp;z=17&amp;output=embed" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
          <div class="direction-cards">
            <figure class="direction-card direction-hours reveal" id="clinic-hours"><img src="../assets/subpages/hospital/hours.png" alt="" /><figcaption><div class="hours-row"><strong>평&nbsp;&nbsp;일</strong><span>오전 08:30 - 오후 07:00</span></div><div class="hours-row"><strong>수요일</strong><span>오전 08:30 - 오후 01:00</span></div><div class="hours-row"><strong>토요일</strong><span>오전 08:30 - 오후 02:00</span></div><p>*평일 점심시간 오후 1시 - 2시</p></figcaption></figure>
            <figure class="direction-card direction-phone reveal"><img src="../assets/subpages/hospital/phone.png" alt="" /><figcaption><strong>대표전화</strong><a href="tel:031-452-3000">031-452-3000</a><p>진료 예약 및 상담이 필요하신 경우 전화주시면<br />자세한 상담과 예약을 도와드립니다.</p></figcaption></figure>
          </div>
        </div></section>`,
    },
    equipment: {
      title: '의료장비안내',
      subtitle: '정확한 진단과 치료를 위한 의료장비를 갖추고 있습니다',
      description: '삼성G정형외과에서 진단과 치료에 활용하는<br />주요 의료장비를 소개합니다.',
      content: '<section class="equipment-empty" aria-label="의료장비 안내 준비 영역"></section>',
    },
  };

  const config = pages[page];
  if (!config) return;

  const subnav = [
    ['의료진 & 치료사 안내', 'doctors.html', 'doctors'],
    ['인사말 & 비전', 'greeting-vision.html', 'greeting'],
    ['오시는길 & 진료안내', 'directions.html', 'directions'],
    ['둘러보기', 'clinic-tour.html', 'tour'],
    ['의료장비 안내', 'medical-equipment.html', 'equipment'],
  ];

  const contact = `
    <section class="contact-us" id="contact-us" aria-labelledby="contact-us-title"><div class="contact-us-shade"></div><div class="section-inner contact-us-inner reveal"><p class="eyebrow">Contact Us</p><h2 id="contact-us-title">상담문의</h2><p>진료와 치료에 대해 궁금한 점을 남겨 주세요.</p><div class="contact-us-links"><a class="contact-kakao" href="https://pf.kakao.com" target="_blank" rel="noreferrer"><svg viewBox="0 0 44 34" aria-hidden="true"><path d="M22 2C10.95 2 2 8.72 2 17c0 5.27 3.62 9.91 9.1 12.58L9 34l7.1-2.82c1.87.53 3.85.82 5.9.82 11.05 0 20-6.72 20-15S33.05 2 22 2Z"/><text x="22" y="21">TALK</text></svg>카카오톡 채널</a><a class="contact-phone" href="tel:031-452-3000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg>031-452-3000</a><a class="contact-naver" href="https://talk.naver.com" target="_blank" rel="noreferrer"><strong aria-hidden="true">N</strong>네이버 톡톡</a></div></div></section>`;

  main.innerHTML = `
    <section class="doctor-hero" aria-labelledby="hospital-hero-title"><div class="doctor-hero-shade"></div><div class="doctor-hero-inner reveal"><p class="breadcrumb"><span aria-hidden="true">⌂</span> 삼성G정형외과 <span aria-hidden="true">›</span> 병원소개 <span aria-hidden="true">›</span> ${config.title}</p><h1 id="hospital-hero-title">${config.title}</h1><h2>${config.subtitle}</h2><p class="doctor-hero-description">${config.description}</p></div><nav class="doctor-subnav" aria-label="병원소개 메뉴">${subnav.map(([label, href, id]) => `<a href="${href}"${id === page ? ' aria-current="page"' : ''}>${label}</a>`).join('')}</nav></section>
    ${config.content}${contact}`;

  if (page === 'directions') {
    main.querySelectorAll('.reveal').forEach((item) => item.classList.remove('reveal', 'reveal-sequence'));
  }

  if (page === 'directions' && location.hash) {
    window.addEventListener('load', () => document.getElementById(location.hash.slice(1))?.scrollIntoView(), { once: true });
  }

  if (page === 'tour') {
    const mainImage = document.querySelector('#tour-main-image');
    const title = document.querySelector('#tour-title');
    const description = document.querySelector('#tour-description');
    document.querySelectorAll('.tour-thumb').forEach((button) => {
      button.addEventListener('click', () => {
        document.querySelectorAll('.tour-thumb').forEach((item) => item.setAttribute('aria-current', 'false'));
        button.setAttribute('aria-current', 'true');
        mainImage.src = button.dataset.image;
        mainImage.alt = button.dataset.title;
        title.textContent = button.dataset.title;
        description.innerHTML = button.dataset.description.split('|').join('<br />');
      });
    });
  }
})();
