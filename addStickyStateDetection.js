export function addStickyStateDetection({ elem, guard }) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === guard) {
          elem.classList.toggle('sticky', !entry.isIntersecting);
        }
      });
    },
    {
      threshold: 1.0,
    },
  );
  observer.observe(guard);
}