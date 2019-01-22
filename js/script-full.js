
var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var background = document.querySelector(".modal-background");
var close = popup.querySelector(".modal-close");
var backgroundClose = document.querySelector(".modal-background-close");
var feedbackForm = popup.querySelector("[name=feedback]");
var feedbackName = popup.querySelector("[name=feedback-name]");
var feedbackEmail = popup.querySelector("[name=feedback-email]");
var feedbackText = popup.querySelector("[name=feedback-text]");

var loginWindow = document.querySelector(".popup-login");
var form = loginWindow.querySelector("[name=login-form]");
var login = loginWindow.querySelector("[name=login]");
var password = loginWindow.querySelector("[name=password]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-hide");
  popup.classList.add("modal-show");
  background.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
  background.classList.remove("modal-show");
  setTimeout(function() {popup.classList.remove("modal-show");}, 480);
});

backgroundClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-hide");
  background.classList.remove("modal-show");
  setTimeout(function() {popup.classList.remove("modal-show");}, 480);
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.add("modal-hide");
      setTimeout(function() {popup.classList.remove("modal-show");}, 480);
      background.classList.remove("modal-show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    login.classList.add("textfield-error");
    password.classList.add("textfield-error");
    loginWindow.classList.add("shake");
    setTimeout(function() {loginWindow.classList.remove("shake")}, 1000);
    setTimeout(function() {login.classList.remove("textfield-error")}, 1500);
    setTimeout(function() {password.classList.remove("textfield-error")}, 1500);
  }
});

feedback.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackName.classList.add("textfield-error");
    feedbackEmail.classList.add("textfield-error");
    feedbackText.classList.add("textfield-error");
    setTimeout(function() {feedbackName.classList.remove("textfield-error")}, 1500);
    setTimeout(function() {feedbackEmail.classList.remove("textfield-error")}, 1500);
    setTimeout(function() {feedbackText.classList.remove("textfield-error")}, 1500);
  }
});