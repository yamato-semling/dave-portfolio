const body = document.body;

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

const changeIcon = function (id) {
  switch (id) {
    case 1:
      console.log("fort");
      leftCircle.innerHTML = "";
      leftCircle.appendChild(fortImg);

      break;
    case 2:
      console.log("trad");
      leftCircle.innerHTML = "";
      leftCircle.appendChild(tradImg);
      break;
    case 3:
      console.log("frei");
      leftCircle.innerHTML = "";
      leftCircle.appendChild(freiImg);
      break;

    default:
      console.log("fort");
      leftCircle.appendChild(fortImg);

      break;
  }
};
