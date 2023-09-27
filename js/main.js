const body = document.body;

const main = body.querySelector("main");
const loading = body.querySelector("#loading");

window.addEventListener("load", (event) => {
  loading.style.display = "none";
  main.style.display = "block";
});

const menu = document.getElementsByClassName("menu-links");

const uncheck = function () {
  const checkbox = body.querySelector(".checkbox");
  checkbox.checked = false;
};

const listeners = function () {
  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", uncheck);
  }
};

listeners();
