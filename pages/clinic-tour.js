(() => {
  const stage = document.querySelector('.tour-stage');
  if (!stage) return;

  const image = stage.querySelector('img');
  const openButton = stage.querySelector('.tour-stage-open');
  const title = stage.querySelector('#tour-title');
  const description = stage.querySelector('#tour-description');
  const thumbnails = [...document.querySelectorAll('.tour-thumb')];
  const lightbox = document.querySelector('.tour-lightbox');
  const lightboxImage = lightbox.querySelector('.tour-lightbox-image');
  const arrows = [...document.querySelectorAll('.tour-gallery-arrow')];
  const statuses = document.querySelectorAll('.tour-gallery-status');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const transitions = new Map();
  const galleries = {
    lobby: [
      '../assets/main-lobby-01.jpg',
      '../assets/main-lobby-02.jpg',
      '../assets/main-lobby-03.jpg',
      '../assets/main-lobby-04.jpg',
      '../assets/main-lobby-05.jpg',
    ],
    clinic: [
      '../assets/main-clinic-gallery-01.jpg',
      '../assets/main-clinic-gallery-02.jpg',
      '../assets/main-clinic-gallery-03.jpg',
      '../assets/main-clinic-gallery-04.jpg',
    ],
    inpatient: [
      '../assets/main-inpatient-gallery-01.jpg',
      '../assets/main-inpatient-gallery-02.jpg',
      '../assets/main-inpatient-gallery-03.jpg',
      '../assets/main-inpatient-gallery-04.jpg',
    ],
    treatment: [
      '../assets/main-treatment-gallery-01.jpg',
      '../assets/main-treatment-gallery-02.jpg',
      '../assets/main-treatment-gallery-03.jpg',
      '../assets/main-treatment-gallery-04.jpg',
      '../assets/main-treatment-gallery-05.jpg',
    ],
  };
  let activeThumbnail = thumbnails[0];
  let images = [activeThumbnail.dataset.src, ...galleries[activeThumbnail.dataset.gallery]];
  let imageIndex = 0;
  let renderVersion = 0;

  const replaceImage = (target, source, alt, animate, direction) => {
    transitions.get(target)?.();
    const previous = animate && target.getAttribute('src') !== source
      && typeof target.animate === 'function' ? target.cloneNode(false) : null;
    if (previous) {
      previous.removeAttribute('id');
      previous.alt = '';
      previous.setAttribute('aria-hidden', 'true');
      previous.classList.add('tour-image-outgoing');
      target.parentElement.append(previous);
    }
    target.src = source;
    target.alt = alt;
    if (!previous) return;

    const incoming = target.animate([
      { opacity: 0, transform: `translateX(${direction * 16}px)` },
      { opacity: 1, transform: 'translateX(0)' },
    ], { duration: 360, easing: 'cubic-bezier(.22,.61,.36,1)' });
    const outgoing = previous.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 360, easing: 'ease-out' });
    const cleanup = () => {
      incoming.cancel();
      outgoing.cancel();
      previous.remove();
      transitions.delete(target);
    };
    transitions.set(target, cleanup);
    incoming.onfinish = cleanup;
  };

  const showImage = async (animate = true, direction = 1) => {
    const version = ++renderVersion;
    const source = images[imageIndex];
    const alt = `${activeThumbnail.dataset.title} 사진 ${imageIndex + 1} / ${images.length}`;
    if (animate) {
      const nextImage = new Image();
      nextImage.src = source;
      try {
        await nextImage.decode();
      } catch {
        if (version === renderVersion) statuses.forEach((status) => { status.textContent = '사진을 불러오지 못했습니다. 다시 시도해 주세요.'; });
        return;
      }
    }
    if (version !== renderVersion) return;
    const useMotion = animate && !reduceMotion.matches;
    replaceImage(image, source, alt, useMotion, direction);
    replaceImage(lightboxImage, source, alt, useMotion && lightbox.open, direction);
    title.textContent = activeThumbnail.dataset.title;
    description.textContent = activeThumbnail.dataset.description;
    openButton.setAttribute('aria-label', `${image.alt} 크게 보기`);
    statuses.forEach((status) => { status.textContent = image.alt; });
    arrows.forEach((arrow) => {
      arrow.hidden = images.length < 2;
      const direction = Number(arrow.dataset.direction) < 0 ? '이전' : '다음';
      arrow.setAttribute('aria-label', `${direction} ${activeThumbnail.dataset.title} 사진`);
    });
  };

  const moveImage = (direction) => {
    imageIndex = (imageIndex + direction + images.length) % images.length;
    showImage(true, direction);
  };

  arrows.forEach((arrow) => arrow.addEventListener('click', () => moveImage(Number(arrow.dataset.direction))));
  thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', () => {
    thumbnails.forEach((item) => item.setAttribute('aria-current', String(item === thumbnail)));
    activeThumbnail = thumbnail;
    images = [thumbnail.dataset.src, ...galleries[thumbnail.dataset.gallery]];
    imageIndex = 0;
    showImage();
  }));
  openButton.addEventListener('click', () => {
    lightbox.showModal();
    document.body.classList.add('tour-lightbox-open');
  });
  lightbox.querySelector('.tour-lightbox-close').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });
  lightbox.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    moveImage(event.key === 'ArrowLeft' ? -1 : 1);
  });
  lightbox.addEventListener('close', () => {
    transitions.get(lightboxImage)?.();
    document.body.classList.remove('tour-lightbox-open');
    openButton.focus();
  });
  showImage(false);
})();
