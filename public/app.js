const themeButton = document.querySelector('#theme');
let savedTheme;
try { savedTheme = localStorage.getItem('leo-theme'); } catch {}
function applyTheme(dark) {
  document.body.classList.toggle('dark', dark);
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.setAttribute('aria-label', dark ? '切換淺色模式' : '切換深色模式');
  themeButton.querySelector('span').textContent = dark ? '淺色模式' : '深色模式';
}
applyTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
themeButton.addEventListener('click', () => {
  const dark = !document.body.classList.contains('dark');
  applyTheme(dark);
  try { localStorage.setItem('leo-theme', dark ? 'dark' : 'light'); } catch {}
});
document.querySelector('#year').textContent = new Date().getFullYear();
const printButton = document.querySelector('#print');
let detailState;
window.addEventListener('beforeprint', () => {
  detailState = [...document.querySelectorAll('details')].map(el => [el, el.open]);
  detailState.forEach(([el]) => { el.open = true; });
});
window.addEventListener('afterprint', () => { if (detailState) detailState.forEach(([el, open]) => { el.open = open; }); });
printButton.addEventListener('click', () => window.print());
const navLinks = [...document.querySelectorAll('nav a')];
const observer = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navLinks.forEach(link => {
    const active = link.hash === '#' + visible.target.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current');
  });
}, {rootMargin: '-15% 0px -55% 0px', threshold: 0});
document.querySelectorAll('main section').forEach(section => observer.observe(section));
