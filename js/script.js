var link = document.querySelector('.feedback-link');
var popup = document.querySelector('.feedback-window');
var close = popup.querySelector('.feedback-close');
var overlay = document.querySelector('.overlay')
var username = popup.querySelector('[name=your-name]');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('feedback-window-show');
  overlay.classList.add('overlay-show');
  username.focus();
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-window-show');
  overlay.classList.remove('overlay-show');
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-window-show');
  overlay.classList.remove('overlay-show');
});
