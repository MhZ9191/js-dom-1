const imageLamp = document.querySelector(".div-image>img");
console.log(imageLamp.src);

const btn = document.getElementById("btnUni");

// btn.addEventListener("click", function () {
//   imageLamp.src = "./img/yellow_lamp.png";
// });

btn.addEventListener("click", function () {
  btnText = btn.innerText;
  if (btnText.toLocaleLowerCase().includes("accendi")) {
    imageLamp.src = "./img/yellow_lamp.png";
    btn.innerText = "SPEGNI";
  }
  if (btnText.toLocaleLowerCase().includes("spegni")) {
    imageLamp.src = "./img/white_lamp.png";
    btn.innerText = "ACCENDI";
  }
});
