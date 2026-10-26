document.documentElement.classList.add('js');

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.addEventListener('click', e => {
    if (e.target.closest('a')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Schedule: on phones show one day at a time, starting with today (Sunday shows Monday)
const tabs = document.querySelector('.day-tabs');
if (tabs) {
  tabs.hidden = false;
  const days = ['mon', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const show = day => {
    tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-selected', b.dataset.day === day));
    document.querySelectorAll('.week .day').forEach(d => d.classList.toggle('active', d.dataset.day === day));
  };
  tabs.querySelectorAll('button').forEach(b => {
    b.setAttribute('aria-controls', 'day-' + b.dataset.day);
    b.addEventListener('click', () => show(b.dataset.day));
  });
  show(days[new Date().getDay()]);
}

// Footer year
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
