const imageLamp = document.querySelector(".div-image>img");
const btn = document.getElementById("btnUni");
const scrX = document.getElementById("scX");
const scrY = document.getElementById("scY");
const pgX = document.getElementById("pX");
const pgY = document.getElementById("pY");
const clX = document.getElementById("cX");
const clY = document.getElementById("cY");
const testBody = document.querySelector("body");

const testCounter = document.getElementById("counterclick");
let counter = 0;
btn.addEventListener("click", function () {
  btnText = btn.innerText;
  const btnClass = btn.classList;
  if (btnText.toLocaleLowerCase().includes("accendi")) {
    imageLamp.src = "./img/yellow_lamp.png";
    imageLamp.classList.add("acc");
    imageLamp.classList.remove("spn");
    btn.innerText = "SPEGNI";
    btnClass.remove("accesa");
    btnClass.add("spenta");
    counter++;
  }
  if (btnText.toLocaleLowerCase().includes("spegni")) {
    imageLamp.src = "./img/white_lamp.png";
    imageLamp.classList.add("spn");
    imageLamp.classList.remove("acc");
    btn.innerText = "ACCENDI";
    btnClass.remove("spenta");
    btnClass.add("accesa");
    counter++;
  }
  testCounter.lastChild.innerText = counter;
});

testBody.addEventListener("mousemove", function (e) {
  scrX.innerText = e.screenX;
  scrY.innerText = e.screenY;
  pgX.innerText = e.pageX;
  pgY.innerText = e.pageY;
  clX.innerText = e.clientX;
  clY.innerText = e.clientY;
});
