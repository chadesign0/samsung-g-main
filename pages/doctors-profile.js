(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('.doctor-career-detail').forEach((detail) => {
    const summary = detail.querySelector('summary');
    const content = detail.querySelector('.doctor-career-content');
    if (!summary || !content || typeof detail.animate !== 'function') return;

    let expanded = detail.open;
    let animation = null;
    let frame = 0;

    const finish = () => {
      detail.open = expanded;
      animation?.cancel();
      animation = null;
      detail.style.height = '';
      detail.classList.remove('is-animating');
    };

    summary.addEventListener('click', (event) => {
      event.preventDefault();
      const startHeight = detail.getBoundingClientRect().height;
      animation?.cancel();
      window.cancelAnimationFrame(frame);
      expanded = !expanded;

      if (reduceMotion.matches) {
        finish();
        return;
      }

      detail.style.height = `${startHeight}px`;
      detail.classList.add('is-animating');
      detail.open = true;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const borderHeight = detail.offsetHeight - detail.clientHeight;
        const endHeight = summary.getBoundingClientRect().height
          + (expanded ? content.getBoundingClientRect().height : 0) + borderHeight;
        const duration = Math.min(900, Math.max(420, Math.abs(endHeight - startHeight) * .25));
        animation = detail.animate([
          { height: `${startHeight}px` },
          { height: `${endHeight}px` },
        ], { duration, easing: 'cubic-bezier(.65,0,.35,1)', fill: 'both' });
        animation.onfinish = finish;
      });
    });
  });
})();
