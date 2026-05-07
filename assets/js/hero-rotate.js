// Rotates the big poster "theme" word on the homepage (distinct Swiss poster vibe)
(function () {
  const el = document.getElementById("themeWord");
  if (!el) return;

  const words = [
    "EXPERIMENTS",
    "VERIFICATION",
    "DISCOVERY",
    "SYSTEMS",
  ];

  let i = 0;
  const set = () => {
    el.classList.remove("swap");
    // force reflow
    void el.offsetWidth;
    el.textContent = words[i % words.length];
    el.classList.add("swap");
    i += 1;
  };

  set();
  setInterval(set, 2600);
})();
