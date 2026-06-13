// Mobile nav toggle
document.querySelector('.nav__toggle')?.addEventListener('click', function () {
  document.querySelector('.nav__links')?.classList.toggle('open');
});

// Close mobile menu after clicking a link
document.querySelectorAll('.nav__links a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.nav__links')?.classList.remove('open');
  });
});
