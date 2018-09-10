var link = document.querySelector('.feedback-link');
var popup = document.querySelector('.feedback-window');
var close = popup.querySelector('.feedback-close');
var overlay = document.querySelector('.overlay')
var username = popup.querySelector('[name=your-name]');

var slide1 = document.querySelector('.first-slide');
var slide2 = document.querySelector('.second-slide');
var slide3 = document.querySelector('.thrid-slide');
var sliderbutton = document.querySelector('.slider-button-1');

var back_color = document.querySelector('.background-wrapper');

var login_form = document.querySelector('.login-form');
var email_user = document.querySelector('[name=email]');
var password = document.querySelector('[name=password]');

var subscribe_form = document.querySelector('.subscribe-form');
var email_subs = document.querySelector('[name=email-subs]');

var feedback_form = document.querySelector('.feedback-form');
var feedback_email = document.querySelector('[name=email-feedback]');
var comment = document.querySelector('[name=comment]');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('feedback-window-show');
  overlay.classList.add('overlay-show');
  username.focus();
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-window-show');
  popup.classList.remove('feedback-window-error');
  overlay.classList.remove('overlay-show');
});

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-window-show');
  popup.classList.remove('feedback-window-error');
  overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('feedback-window-show')) {
      popup.classList.remove('feedback-window-show');
      popup.classList.remove('feedback-window-error');
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
  if (this.checked) {
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

login_form.addEventListener('submit', function (evt) {
  if (!email_user.value || !password.value) {
    evt.preventDefault();
      if (!email_user.value) {
        email_user.classList.add('input-error');
      } else {
        email_user.classList.remove('input-error');
      }
      if (!password.value) {
        password.classList.add('input-error');
      } else {
        password.classList.remove('input-error');
      }
  } else {
    if (isStorageSupport) {
    localStorage.setItem('email', email_user.value);
    }
  }
});

subscribe_form.addEventListener('submit', function (evt) {
  if (!email_subs.value) {
    evt.preventDefault();
    if (!email_subs.value) {
      email_subs.classList.add('input-error');
    } else {
      email_subs.classList.remove('input-error');
    }
  }
});

feedback_form.addEventListener('submit', function (evt) {
  if (!feedback_email.value || !user_name.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove('feedback-window-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('feedback-window-error');
    if (!feedback_email.value) {
      feedback_email.classList.add('input-error');
    } else {
      feedback_email.classList.remove('input-error');
    }
    if (!username.value) {
      username.classList.add('input-error');
    } else {
      username.classList.remove('input-error');
    }
    if (!comment.value) {
      comment.classList.add('input-error');
    } else {
      comment.classList.remove('input-error');
    }
  }
});
