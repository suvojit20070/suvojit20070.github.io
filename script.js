// year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// scroll reveal
const targets = document.querySelectorAll('.section, .card, .hero > *');
targets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

targets.forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 60 + 'ms';
  io.observe(el);
});

// nav active highlight
const links = document.querySelectorAll('.nav nav a');
const sections = [...links].map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 160) current = '#' + s.id;
  });
  links.forEach(a => {
    a.style.color = a.getAttribute('href') === current ? 'var(--text)' : '';
  });
}, { passive: true });
