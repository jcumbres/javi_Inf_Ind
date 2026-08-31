const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
