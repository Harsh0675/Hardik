const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const themeLabel = document.querySelector('.theme-label');

const setTheme = (theme) => {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
  themeIcon.textContent = isDark ? '☀' : '☾';
  themeLabel.textContent = isDark ? 'Light mode' : 'Dark mode';
};

setTheme(localStorage.getItem('hardik-theme') || 'light');

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('hardik-theme', nextTheme);
  setTheme(nextTheme);
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    document.querySelectorAll('.project-card').forEach((card) => {
      const matches = selected === 'all' || card.dataset.category.includes(selected);
      card.classList.toggle('is-hidden', !matches);
    });
  });
});