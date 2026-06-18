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

// ===== Program talk modal =====
(function () {
  var modal = document.getElementById('talkModal');
  if (!modal) return;
  var elTime = document.getElementById('modalTime');
  var elName = document.getElementById('modalName');
  var elRole = document.getElementById('modalRole');
  var elTalk = document.getElementById('modalTalk');

  function open(btn) {
    elTime.textContent = btn.getAttribute('data-time') || '';
    elName.textContent = btn.getAttribute('data-name') || '';
    elRole.textContent = btn.getAttribute('data-role') || '';
    elTalk.textContent = btn.getAttribute('data-talk') || '';
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.slot--link').forEach(function (btn) {
    btn.addEventListener('click', function () { open(btn); });
  });
  modal.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) close();
  });
})();
