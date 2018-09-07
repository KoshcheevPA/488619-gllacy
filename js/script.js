var link = document.querySelector('.feedback-link');
var popup = document.querySelector('.feedback-window');
var close = popup.querySelector('.feedback-close');
var overlay = document.querySelector('.overlay')
var username = popup.querySelector('[name=your-name]');

var slide1 = document.querySelector('.first-slide');
var slide2 = document.querySelector('.second-slide');
var slide3 = document.querySelector('.thrid-slide');

var back_color = document.querySelector('.background-wrapper');

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

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('feedback-window-show')) {
      popup.classList.remove('feedback-window-show');
      overlay.classList.remove('overlay-show');
    }
  }
});

document.getElementById('slider-1').onclick = function() {
  if (this.checked) {
    slide1.classList.remove('not-show');
    slide2.classList.add('not-show');
    slide3.classList.add('not-show');
    back_color.classList.remove('back-color-body-2');
    back_color.classList.remove('back-color-body-3');
  }
};

document.getElementById('slider-2').onclick = function() {
  if (this.checked ){
    slide2.classList.remove('not-show');
    slide1.classList.add('not-show');
    slide3.classList.add('not-show');
    back_color.classList.add('back-color-body-2');
    back_color.classList.remove('back-color-body-3');
  }
};

document.getElementById('slider-3').onclick = function() {
  if (this.checked) {
    slide3.classList.remove('not-show');
    slide2.classList.add('not-show');
    slide1.classList.add('not-show');
    back_color.classList.remove('back-color-body-2');
    back_color.classList.add('back-color-body-3');
  }
};
