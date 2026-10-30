// Detect mobile UA and tag <html> with is-mobile / is-desktop.
// （响应式主要靠 CSS 媒体查询；这个类只是给移动端额外微调留的钩子）
(function () {
  var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile/i.test(navigator.userAgent);
  document.documentElement.classList.add(isMobile ? 'is-mobile' : 'is-desktop');
})();

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
  var elPhoto = document.getElementById('modalPhoto');
  var elDetails = document.getElementById('modalDetails');
  var dialog = modal.querySelector('.modal__dialog');
  var closeButton = modal.querySelector('.modal__close');
  var trigger = null;

  function open(btn) {
    var speaker = btn.getAttribute('data-speaker');
    var slot = Array.from(document.querySelectorAll('.slot--link')).find(function (item) {
      return item.getAttribute('data-speaker') === speaker;
    });
    var template = document.getElementById('details-' + speaker);
    if (!slot || !template) return;
    trigger = btn;
    elTime.textContent = slot.getAttribute('data-time');
    elName.textContent = slot.getAttribute('data-name');
    elRole.textContent = [slot.getAttribute('data-role'), slot.getAttribute('data-affiliation')].filter(Boolean).join(' · ');
    elTalk.textContent = slot.getAttribute('data-talk');
    var photo = slot.getAttribute('data-photo');
    elPhoto.hidden = !photo;
    if (photo) {
      elPhoto.src = photo;
      elPhoto.alt = slot.getAttribute('data-name');
    } else {
      elPhoto.removeAttribute('src');
      elPhoto.alt = '';
    }
    elDetails.replaceChildren(template.content.cloneNode(true));
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.querySelector('header').inert = true;
    document.querySelector('main').inert = true;
    document.querySelector('footer').inert = true;
    dialog.scrollTop = 0;
    closeButton.focus();
  }
  function close() {
    modal.hidden = true;
    document.body.style.overflow = '';
    document.querySelector('header').inert = false;
    document.querySelector('main').inert = false;
    document.querySelector('footer').inert = false;
    trigger?.focus();
  }

  document.querySelectorAll('[data-speaker]').forEach(function (btn) {
    btn.addEventListener('click', function () { open(btn); });
  });
  modal.querySelectorAll('[data-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.hidden) close();
    if (e.key === 'Tab' && !modal.hidden) {
      // The close button is the only interactive element in the report dialog.
      e.preventDefault();
      closeButton.focus();
    }
  });
})();
