document.addEventListener('DOMContentLoaded', () => {
  /** ======================
   *  HERO SLIDESHOW
   *  Schimbare automată imagini fundal
   * ====================== */
  const heroSlides = document.querySelectorAll('.hero-background img');
  let heroIndex = 0;

  if (heroSlides.length > 0) {
    heroSlides[0].classList.add('active');

    setInterval(() => {
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }, 5000);
  }

  /** ======================
   *  COLLECTION SLIDERS
   *  Funcționalitate butoane prev / next
   * ====================== */
  const sliders = document.querySelectorAll('.collection-slider');

  sliders.forEach(slider => {
    const track = slider.querySelector('.slider-track');
    const prev = slider.querySelector('.slider-prev');
    const next = slider.querySelector('.slider-next');

    // Match dimension in CSS (image size + gap)
    const imageWidth = 280;
    const gap = 20;
    const scrollAmount = imageWidth + gap;

    const updateArrows = () => {
      if (track.scrollLeft <= 5) {
        prev.style.opacity = '0.4';
        prev.style.pointerEvents = 'none';
      } else {
        prev.style.opacity = '1';
        prev.style.pointerEvents = 'auto';
      }

      if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 5) {
        next.style.opacity = '0.4';
        next.style.pointerEvents = 'none';
      } else {
        next.style.opacity = '1';
        next.style.pointerEvents = 'auto';
      }
    };

    updateArrows();

    prev.addEventListener('click', () => {
      track.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(updateArrows, 600);
    });

    next.addEventListener('click', () => {
      track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(updateArrows, 600);
    });

    track.addEventListener('scroll', updateArrows);
  });
});
