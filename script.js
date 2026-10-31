// current year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// gentle reveal on scroll
const targets = document.querySelectorAll('.hero, .section');
targets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('on');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

targets.forEach(el => io.observe(el));

// text selection + context menu + drag block
document.addEventListener('selectstart', e => e.preventDefault());
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('dragstart', e => e.preventDefault());
