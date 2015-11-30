	var link = document.querySelector(".contacts .btn");
	var popup = document.querySelector(".modal-content");
	var close = document.querySelector(".modal-content-close");
	var cancel = document.querySelector(".btn-cancel");
	var form = popup.querySelector("form");
	var login = popup.querySelector("[name='name']");
	var email = popup.querySelector("[name='e-mail']");
	var storage = localStorage.getItem("login");

	link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("modal-content-show");
		if (storage) {
			login.value = storage;
			password.focus();
		} else {
			login.focus();
		}
	});
	close.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		popup.classList.remove("moda-error")
	});
	cancel.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.remove("modal-content-show");
		popup.classList.remove("moda-error");
	});
	form.addEventListener("submit", function(event) {
		if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
		}	else {
			localStorage.setItem("login", login.value);
		}
	});
	window.addEventListener("keydown", function(event) {
		if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")) {
		popup.classList.remove("modal-content-show");
		popup.classList.remove("modal-error");
			}
		}
	});