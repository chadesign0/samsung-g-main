(() => {
  const scriptUrl = document.currentScript.src;
  const guideUrl = new URL('tmap.html', scriptUrl).href;
  const qrUrl = new URL('assets/tmap-mobile-qr.svg', scriptUrl).href;
  const destination = 'goalname=' + encodeURIComponent('삼성G정형외과') + '&goalx=126.9456639&goaly=37.3525822';
  const appUrl = 'tmap://route?' + destination;
  const isAndroid = /Android/i.test(navigator.userAgent);
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  const mobileUrl = isAndroid
    ? 'intent://route?' + destination + '#Intent;scheme=tmap;package=com.skt.tmap.ku;S.browser_fallback_url=' + encodeURIComponent(guideUrl) + ';end'
    : appUrl;
  let dialog;
  let cancelFallback = () => {};

  function showQr(trigger) {
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'tmap-map-dialog';
      dialog.setAttribute('aria-labelledby', 'tmap-qr-title');
      dialog.innerHTML = `<button class="tmap-dialog-close" type="button" aria-label="T맵 안내 닫기" autofocus>×</button>
        <h2 id="tmap-qr-title">T맵 앱으로 길찾기</h2>
        <p>휴대폰 카메라로 QR코드를 스캔한 후<br />‘T맵 앱으로 길찾기’를 눌러 주세요.</p>
        <img class="tmap-qr" src="${qrUrl}" alt="삼성G정형외과 T맵 모바일 안내 QR코드" width="240" height="240" />
        <strong>삼성G정형외과</strong><p>경기 군포시 군포로 522 4층</p>
        <p class="tmap-help">앱이 없다면 모바일 안내 화면에서 설치할 수 있습니다.</p>`;
      document.body.append(dialog);
      dialog.querySelector('button').addEventListener('click', () => dialog.close());
      dialog.addEventListener('click', (event) => {
        const rect = dialog.getBoundingClientRect();
        if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
      });
    }
    dialog.addEventListener('close', () => trigger.focus(), { once: true });
    dialog.showModal();
  }

  document.querySelectorAll('[data-tmap-link]').forEach((link) => {
    link.setAttribute('href', isAndroid || isIOS ? mobileUrl : guideUrl);
    link.removeAttribute('target');
    link.title = isAndroid || isIOS ? 'T맵 앱에서 삼성G정형외과 길찾기' : '모바일 T맵 연결 QR코드 보기';
    link.addEventListener('click', (event) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      if (!isAndroid && !isIOS) {
        event.preventDefault();
        showQr(link);
      } else if (isIOS && window.location.pathname !== new URL(guideUrl).pathname) {
        cancelFallback();
        const clearFallback = () => {
          window.clearTimeout(timer);
          document.removeEventListener('visibilitychange', onVisibilityChange);
          window.removeEventListener('pagehide', clearFallback);
        };
        const onVisibilityChange = () => {
          if (document.hidden) clearFallback();
        };
        const timer = window.setTimeout(() => {
          clearFallback();
          if (!document.hidden) window.location.assign(guideUrl);
        }, 1800);
        document.addEventListener('visibilitychange', onVisibilityChange);
        window.addEventListener('pagehide', clearFallback, { once: true });
        cancelFallback = clearFallback;
      }
    });
  });
})();
