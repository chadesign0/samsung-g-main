(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-nav');
  if (!header || !nav) return;

  const isSubpage = window.location.pathname.includes('/pages/');
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  const desktop = window.matchMedia('(min-width: 801px)');

  const quickMenuMarkup = `
    <div class="quick-menu-main">
      <a class="quick-menu-item" href="https://pf.kakao.com" target="_blank" rel="noreferrer">
        <svg class="quick-kakao" viewBox="0 0 44 34" aria-hidden="true"><path d="M22 2C10.95 2 2 8.72 2 17c0 5.27 3.62 9.91 9.1 12.58L9 34l7.1-2.82c1.87.53 3.85.82 5.9.82 11.05 0 20-6.72 20-15S33.05 2 22 2Z"/><text x="22" y="21">TALK</text></svg>
        <span>카톡 상담</span>
      </a>
      <a class="quick-menu-item" href="https://booking.naver.com" target="_blank" rel="noreferrer">
        <svg class="quick-naver" viewBox="0 0 42 45" aria-hidden="true"><path d="M7 0h3v8H7zm25 0h3v8h-3zM1 5h40v40H1z"/><path class="quick-naver-page" d="M6 14h30v26H6z"/><text x="21" y="35">N</text></svg>
        <span>네이버 예약</span>
      </a>
      <a class="quick-menu-item" href="https://blog.naver.com" target="_blank" rel="noreferrer">
        <svg class="quick-blog" viewBox="0 0 44 40" aria-hidden="true"><path d="M7 2h30a5 5 0 0 1 5 5v21a5 5 0 0 1-5 5H24l-8 6v-6H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"/><text x="22" y="22">blog</text></svg>
        <span>블로그</span>
      </a>
    </div>
    <a class="quick-phone" href="tel:0507-1452-3000" aria-label="전화 상담 0507-1452-3000">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8c1.7 3.4 3.2 4.9 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.4.6 3.7.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.7 21 3 13.3 3 3.8c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.7.1.4 0 .8-.3 1.1l-2.2 2.2Z"/></svg>
      <span>0507<br />1452.3000</span>
    </a>
    <a class="quick-top" href="#top" aria-label="맨 위로 이동"><svg viewBox="0 0 76 76" aria-hidden="true"><path d="M20 34 38 16l18 18M38 16v44"/></svg></a>`;

  let quickMenu = document.querySelector('.quick-menu');
  if (!quickMenu) {
    quickMenu = document.createElement('aside');
    quickMenu.className = 'quick-menu';
    quickMenu.setAttribute('aria-label', '빠른 메뉴');
    quickMenu.innerHTML = `<div class="quick-menu-scale">${quickMenuMarkup}</div>`;
    document.body.append(quickMenu);
  } else if (!quickMenu.querySelector('.quick-menu-scale')) {
    const scale = document.createElement('div');
    scale.className = 'quick-menu-scale';
    while (quickMenu.firstChild) scale.append(quickMenu.firstChild);
    quickMenu.append(scale);
  }
  quickMenu.classList.add('quick-menu-fixed');

  const resolveHref = (target) => {
    if (!target || target === '#') return '#';
    if (target.startsWith('#')) return isSubpage ? `../index.html${target}` : target;
    if (target.startsWith('pages/')) return isSubpage ? target.slice(6) : target;
    return isSubpage ? `../${target}` : target;
  };

  const footer = document.querySelector('.site-footer');
  if (footer) {
    footer.id = 'footer';
    footer.classList.add('site-footer--wide');
    footer.innerHTML = `
      <div class="footer-wide-inner">
        <div class="footer-wide-content">
          <nav class="footer-wide-nav" aria-label="하단 정책 메뉴">
            <a href="#footer">이용약관</a>
            <a href="#footer">개인정보처리방침</a>
            <a href="#footer">환자의 권리장전</a>
            <a href="#footer">비급여진료비</a>
          </nav>
          <div class="footer-wide-details">
            <div class="footer-wide-address">
              <strong>주소</strong>
              <address>경기 군포시 군포로 522 4층</address>
              <span>[15855]</span>
              <div class="footer-wide-policy"><a href="#footer">이용약관</a><a href="#footer">개인정보처리방침</a></div>
            </div>
            <div class="footer-wide-contact">
              <p>대표 : 이상현</p>
              <p>사업자등록번호 : 738-92-02239</p>
              <p>이메일 : samsungggos@naver.com</p>
              <p>전화번호 : 031-452-3000</p>
              <p>팩스 : 031-452-3002</p>
            </div>
          </div>
        </div>
        <a class="footer-wide-logo" href="#top"><img src="${resolveHref('assets/logo-white.svg')}" alt="삼성G정형외과" /></a>
      </div>`;
  }

  const categories = [
    {
      id: 'hospital',
      label: '병원소개',
      href: 'pages/doctors.html',
      columns: 3,
      groups: [
        { items: [
          ['인사말 & 비전', '#'],
          ['둘러보기', '#space'],
        ] },
        { items: [
          ['오시는길 & 진료안내', '#location'],
          ['의료장비 안내', '#'],
        ] },
        { items: [
          ['의료진 & 치료사 안내', 'pages/doctors.html'],
        ] },
      ],
    },
    {
      id: 'one-stop',
      label: '원스톱 진료',
      href: 'pages/one-stop-care.html',
      columns: 2,
      groups: [
        { title: '진료실 완결형 시스템', items: [
          ['원스톱 진료 안내', 'pages/one-stop-care.html'],
        ] },
      ],
    },
    {
      id: 'day-hospital',
      label: '낮병동 운영',
      href: 'pages/day-hospital.html',
      columns: 2,
      groups: [
        { title: '낮병동 운영', items: [
          ['낮병동 입원 및 회복관리', 'pages/day-hospital.html'],
        ] },
      ],
    },
    {
      id: 'special',
      label: '특화치료',
      href: '#',
      columns: 3,
      groups: [
        { title: '당일퇴원 수술', items: [
          ['양성종괴제거', '#'], ['손목터널증후군 감압술', '#'], ['방아쇠수지 유리술', '#'],
          ['드퀘르뱅병 유리술', '#'], ['비절개 골절 수술', '#'], ['티눈 및 사마귀 제거술', '#'], ['내성 발톱 교정술', '#'],
        ] },
        { title: '당일퇴원 시술', items: [
          ['신경성형술', '#'], ['고주파 수핵 감압술', '#'], ['회전근개 파열 미세 천공술', '#'],
          ['석회성 건염 석회 흡입술', 'pages/calcific-tendinitis.html'], ['오십견 수액 팽창술', 'pages/frozen-shoulder.html'], ['신경차단술', '#'],
        ] },
        { title: '첨단 재생치료', items: [
          ['PRP', '#'], ['콜라겐 주사 치료', '#'], ['무릎 연골 자가골수세포 주입술', '#'],
        ] },
      ],
    },
    {
      id: 'spine',
      label: '척추센터',
      href: 'pages/lumbar-disc.html',
      columns: 2,
      groups: [
        { title: '목', items: [
          ['목디스크', 'pages/cervical-disc.html'], ['거북목·일자목', 'pages/forward-head-posture.html'], ['경추척추관협착증', 'pages/cervical-spinal-stenosis.html'], ['경추성 두통', 'pages/cervicogenic-headache.html'], ['목·어깨 근막통증증후군', 'pages/neck-myofascial-pain.html'],
        ] },
        { title: '허리', items: [
          ['허리디스크', 'pages/lumbar-disc.html'], ['척추관협착증', 'pages/lumbar-spinal-stenosis.html'], ['척추전방전위증', 'pages/lumbar-spondylolisthesis.html'], ['척추분리증', 'pages/lumbar-spondylolysis.html'], ['급성 허리통증', 'pages/acute-low-back-pain.html'], ['허리 근막통증증후군', 'pages/lumbar-myofascial-pain.html'],
        ] },
      ],
    },
    {
      id: 'joint',
      label: '관절센터',
      href: 'pages/knee-osteoarthritis.html',
      columns: 5,
      groups: [
        { title: '어깨', items: [
          ['회전근개 질환', 'pages/rotator-cuff.html'], ['오십견', 'pages/frozen-shoulder.html'], ['석회성건염', 'pages/calcific-tendinitis.html'],
          ['어깨 충돌증후군', 'pages/shoulder-impingement.html'], ['어깨 탈구', 'pages/shoulder-dislocation.html'], ['관절와순 손상', 'pages/shoulder-labral-tear.html'], ['스포츠 어깨 손상', 'pages/shoulder-sports-injury.html'],
        ] },
        { title: '손·팔꿈치', items: [
          ['테니스엘보', 'pages/tennis-elbow.html'], ['골프엘보', 'pages/golf-elbow.html'], ['손목터널증후군', 'pages/carpal-tunnel-syndrome.html'], ['손목건초염', 'pages/wrist-tenosynovitis.html'], ['방아쇠수지', 'pages/trigger-finger.html'], ['손목·손가락 관절염', 'pages/hand-wrist-arthritis.html'],
        ] },
        { title: '무릎', items: [
          ['퇴행성 무릎관절염', 'pages/knee-osteoarthritis.html'], ['반월상연골판 손상', 'pages/meniscus-tear.html'], ['십자인대 손상', 'pages/cruciate-ligament-injury.html'], ['무릎 연골 손상', 'pages/knee-cartilage-injury.html'],
          ['슬개대퇴통증증후군', 'pages/patellofemoral-pain-syndrome.html'], ['무릎 힘줄염', 'pages/knee-tendinitis.html'], ['스포츠 무릎 손상', 'pages/sports-knee-injury.html'],
        ] },
        { title: '고관절', items: [
          ['고관절 충돌증후군', 'pages/hip-impingement.html'], ['고관절 점액낭염', 'pages/hip-bursitis.html'], ['고관절 퇴행성관절염', 'pages/hip-osteoarthritis.html'], ['대퇴골두 무혈성괴사', 'pages/femoral-head-osteonecrosis.html'],
        ] },
        { title: '발·발목', items: [
          ['발목 염좌', 'pages/ankle-sprain.html'], ['발목 인대 손상', 'pages/ankle-ligament-injury.html'], ['아킬레스건염', 'pages/achilles-tendinitis.html'], ['족저근막염', 'pages/plantar-fasciitis.html'], ['무지외반증', 'pages/hallux-valgus.html'], ['발목관절염', 'pages/ankle-arthritis.html'],
        ] },
      ],
    },
    {
      id: 'iv',
      label: '수액치료',
      href: '#',
      columns: 2,
      groups: [
        { title: '수액치료', items: [
          ['수액치료 안내', '#'],
        ] },
      ],
    },
    {
      id: 'customer',
      label: '고객센터',
      href: 'pages/notice.html',
      columns: 3,
      groups: [
        { items: [['공지사항', 'pages/notice.html'], ['전문의 상담', '#'], ['치료 후기', '#']] },
        { items: [['언론보도', '#'], ['연구 / 학회 활동', '#']] },
        { items: [['증명서 발급', '#'], ['비급여 안내', '#']] },
      ],
    },
  ];

  const activeByFile = {
    'doctors.html': 'hospital',
    'one-stop-care.html': 'one-stop',
    'day-hospital.html': 'day-hospital',
    'lumbar-disc.html': 'spine',
    'lumbar-spinal-stenosis.html': 'spine',
    'lumbar-spondylolisthesis.html': 'spine',
    'lumbar-spondylolysis.html': 'spine',
    'acute-low-back-pain.html': 'spine',
    'lumbar-myofascial-pain.html': 'spine',
    'cervical-disc.html': 'spine',
    'forward-head-posture.html': 'spine',
    'cervical-spinal-stenosis.html': 'spine',
    'cervicogenic-headache.html': 'spine',
    'neck-myofascial-pain.html': 'spine',
    'knee-osteoarthritis.html': 'joint',
    'meniscus-tear.html': 'joint',
    'cruciate-ligament-injury.html': 'joint',
    'knee-cartilage-injury.html': 'joint',
    'patellofemoral-pain-syndrome.html': 'joint',
    'knee-tendinitis.html': 'joint',
    'sports-knee-injury.html': 'joint',
    'hip-impingement.html': 'joint',
    'hip-bursitis.html': 'joint',
    'hip-osteoarthritis.html': 'joint',
    'femoral-head-osteonecrosis.html': 'joint',
    'ankle-sprain.html': 'joint',
    'ankle-ligament-injury.html': 'joint',
    'achilles-tendinitis.html': 'joint',
    'plantar-fasciitis.html': 'joint',
    'hallux-valgus.html': 'joint',
    'ankle-arthritis.html': 'joint',
    'frozen-shoulder.html': 'joint',
    'rotator-cuff.html': 'joint',
    'calcific-tendinitis.html': 'joint',
    'shoulder-impingement.html': 'joint',
    'shoulder-dislocation.html': 'joint',
    'shoulder-labral-tear.html': 'joint',
    'shoulder-sports-injury.html': 'joint',
    'tennis-elbow.html': 'joint',
    'golf-elbow.html': 'joint',
    'carpal-tunnel-syndrome.html': 'joint',
    'wrist-tenosynovitis.html': 'joint',
    'trigger-finger.html': 'joint',
    'hand-wrist-arthritis.html': 'joint',
    'notice.html': 'customer',
  };
  const pageActiveId = activeByFile[currentFile] || '';

  nav.innerHTML = categories.map((category) => {
    const isCurrent = category.id === pageActiveId;
    return `<a class="mega-nav-link${isCurrent ? ' is-page-active' : ''}" href="${resolveHref(category.href)}" data-mega-id="${category.id}" aria-controls="mega-menu" aria-expanded="false"${isCurrent ? ' aria-current="page"' : ''}>${category.label}</a>`;
  }).join('');

  const panel = document.createElement('div');
  panel.className = 'mega-menu';
  panel.id = 'mega-menu';
  panel.setAttribute('aria-hidden', 'true');
  panel.innerHTML = `
    <div class="mega-menu-layout">
      <aside class="mega-menu-category"><strong></strong></aside>
      <div class="mega-menu-content"></div>
      <aside class="mega-menu-hours" aria-label="대표번호와 진료시간">
        <h2>대표번호</h2>
        <a class="mega-menu-phone" href="tel:0507-1452-3000">0507-1452-3000</a>
        <dl class="mega-menu-schedule">
          <dt>평일</dt><dd>오전 08:30 - 오후 07:00</dd>
          <dt>수요일</dt><dd>오전 08:30 - 오후 01:00</dd>
          <dt>토요일</dt><dd>오전 08:30 - 오후 02:00</dd>
        </dl>
        <small>*평일점심시간 오후 1시 - 2시</small>
      </aside>
    </div>`;
  header.append(panel);

  const categoryTitle = panel.querySelector('.mega-menu-category strong');
  const content = panel.querySelector('.mega-menu-content');
  const navLinks = [...nav.querySelectorAll('.mega-nav-link')];
  let closeTimer = 0;

  const itemMarkup = ([label, target]) => {
    const unavailable = !target || target === '#';
    return `<li><a href="${resolveHref(target)}"${unavailable ? ' aria-disabled="true" data-placeholder="true"' : ''}>${label}</a></li>`;
  };

  const renderCategory = (category) => {
    categoryTitle.textContent = category.label;
    content.innerHTML = `<div class="mega-menu-groups" style="--mega-columns:${category.columns || 3}">${category.groups.map((group) => `
      <section class="mega-menu-group">
        ${group.title ? `<h3>${group.title}</h3>` : ''}
        <ul>${group.items.map(itemMarkup).join('')}</ul>
      </section>`).join('')}</div>`;
  };

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const active = link.dataset.megaId === id;
      link.classList.toggle('is-mega-active', active);
      link.setAttribute('aria-expanded', String(active && panel.classList.contains('is-open')));
    });
  };

  const openMenu = (id) => {
    if (!desktop.matches) return;
    const category = categories.find((item) => item.id === id);
    if (!category) return;
    window.clearTimeout(closeTimer);
    renderCategory(category);
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    setActiveLink(id);
  };

  const closeMenu = () => {
    panel.classList.remove('is-open');
    panel.setAttribute('aria-hidden', 'true');
    navLinks.forEach((link) => {
      link.classList.remove('is-mega-active');
      link.setAttribute('aria-expanded', 'false');
    });
  };

  const scheduleClose = () => {
    window.clearTimeout(closeTimer);
    closeTimer = window.setTimeout(closeMenu, 130);
  };

  navLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => openMenu(link.dataset.megaId));
    link.addEventListener('focus', () => openMenu(link.dataset.megaId));
    link.addEventListener('click', (event) => {
      if (link.getAttribute('href') === '#') event.preventDefault();
    });
  });

  nav.addEventListener('mouseenter', () => window.clearTimeout(closeTimer));
  nav.addEventListener('mouseleave', scheduleClose);
  panel.addEventListener('mouseenter', () => window.clearTimeout(closeTimer));
  panel.addEventListener('mouseleave', scheduleClose);
  panel.addEventListener('click', (event) => {
    if (event.target.closest('[data-placeholder="true"]')) event.preventDefault();
  });

  header.addEventListener('focusout', (event) => {
    if (!header.contains(event.relatedTarget)) scheduleClose();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
  desktop.addEventListener('change', closeMenu);
})();
