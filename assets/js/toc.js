// Highlight the current section link in the sidebar TOC
(function () {
  const toc = document.querySelector(".toc");
  if (!toc) return;

  const links = Array.from(toc.querySelectorAll('a[href^="#"]'));
  const targets = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

  const setActive = (id) => {
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  };

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => (b.intersectionRatio||0) - (a.intersectionRatio||0))[0];
    if (visible?.target?.id) setActive(visible.target.id);
  }, { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.25, 0.5] });

  targets.forEach(el => observer.observe(el));
  if (location.hash) setActive(location.hash.replace("#",""));
})();
