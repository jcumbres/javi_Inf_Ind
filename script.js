const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
if (prefersReducedMotion) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav nav');
toggle?.addEventListener('click', () => {
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  if (!open) {
    nav.style.position='absolute'; nav.style.top='76px'; nav.style.left='0'; nav.style.right='0';
    nav.style.padding='18px 24px'; nav.style.background='#080a0c';
    nav.style.flexDirection='column'; nav.style.borderBottom='1px solid #273038';
  }
});

// Lectura de sensor simulada en la ventana "industrial-stack"
const liveValue = document.getElementById('live-value');
if (liveValue && !prefersReducedMotion) {
  let base = 24.6;
  setInterval(() => {
    const drift = (Math.random() - 0.5) * 0.6;
    base = Math.max(21, Math.min(28, base + drift));
    liveValue.textContent = `${base.toFixed(1)} °C`;
  }, 1800);
}
