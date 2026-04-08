/* ══════════════════════════════════════
   SPOTLIGHT CURSOR
   Moves a radial gradient to follow
   the mouse, creating a subtle glow.
══════════════════════════════════════ */
const spotlight = document.getElementById('spotlight');

document.addEventListener('mousemove', (e) => {
  spotlight.style.background = `radial-gradient(
    600px at ${e.clientX}px ${e.clientY}px,
    rgba(100, 255, 218, 0.05),
    transparent 80%
  )`;
});

/* ══════════════════════════════════════
   ACTIVE NAV ON SCROLL
   Highlights the nav item whose section
   is currently in the viewport.
══════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-item');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Remove active from all nav items
        navItems.forEach((n) => n.classList.remove('active'));

        // Add active to the matching nav item
        const activeLink = document.querySelector(
          `.nav-item[href="#${entry.target.id}"]`
        );
        if (activeLink) activeLink.classList.add('active');
      }
    });
  },
  { rootMargin: '-40% 0px -55% 0px' }
);

sections.forEach((section) => sectionObserver.observe(section));

/* ══════════════════════════════════════
   SMOOTH SCROLL
   Intercepts nav clicks and scrolls
   smoothly to the target section.
══════════════════════════════════════ */
navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(item.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
