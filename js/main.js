const body = document.body;

const main = body.querySelector("main");
const loading = body.querySelector("#loading");

const fortschritt = document.querySelector("#fortschritt");
const tradition = document.querySelector("#tradition");
const freiheit = document.querySelector("#freiheit");

const leftCircle = document.querySelector(".left-circle");

const fortImg = document.createElement("img");
fortImg.src = "../img/icon/1.png";
fortImg.classList.add("icon");

const tradImg = document.createElement("img");
tradImg.src = "../img/icon/2.png";
tradImg.classList.add("icon");

const freiImg = document.createElement("img");
freiImg.src = "../img/icon/3.png";
freiImg.classList.add("icon");

window.addEventListener("load", (event) => {
  loading.style.display = "none";
  main.style.display = "block";
});

//changes the image on .rightCircle
const changeIcon = function (id) {
  switch (id) {
    case 1:
      leftCircle.innerHTML = "";
      leftCircle.appendChild(fortImg);

      break;
    case 2:
      leftCircle.innerHTML = "";
      leftCircle.appendChild(tradImg);
      break;
    case 3:
      leftCircle.innerHTML = "";
      leftCircle.appendChild(freiImg);
      break;

    default:
      leftCircle.appendChild(fortImg);
      break;
  }
};
