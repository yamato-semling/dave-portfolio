const body = document.body;

const main = body.querySelector("main");
const loading = body.querySelector("#loading");

window.addEventListener("load", (event) => {
  loading.style.display = "none";
  main.style.display = "block";
});
