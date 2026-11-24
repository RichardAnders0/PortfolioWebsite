const btn = document.getElementById('menuBtn');
const nav = document.getElementById('siteNav');

function setMenu(open) {
  nav.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', String(open));
}

btn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
