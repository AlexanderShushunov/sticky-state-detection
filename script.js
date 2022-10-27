function addStickyStateDetection({ elem, guard }) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === guard) {
          elem.classList.toggle('sticky', !entry.isIntersecting);
        }
      });
    },
    {
      rootMargin: '-10px', // see --global-padding
      threshold: 1.0,
    },
  );
  observer.observe(guard);
}

addStickyStateDetection({
  elem: document.getElementsByClassName('header')[0],
  guard: document.getElementsByClassName('top-guard')[0],
});

addStickyStateDetection({
  elem: document.getElementsByClassName('action-button')[0],
  guard: document.getElementsByClassName('bottom-guard')[0],
});