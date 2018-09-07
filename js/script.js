var link = document.querySelector('.feedback-link');
var popup = document.querySelector('.feedback-window');
var close = document.querySelector('.feedback-close');

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('feedback-window-show');
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-window-show');
});
