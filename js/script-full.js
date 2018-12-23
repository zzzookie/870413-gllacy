
var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".modal-feedback");
var background = document.querySelector(".modal-background");
var close = popup.querySelector(".modal-close");
var backgroundClose = document.querySelector(".modal-background-close");

var form = document.querySelector("[name=login-form]");
var login = document.querySelector("[name=login]");
var password = document.querySelector("[name=password]");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  background.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  background.classList.remove("modal-show");
});

backgroundClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  background.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		console.log("Не введён логин и пароль!");
	}
});