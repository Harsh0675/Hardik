const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

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