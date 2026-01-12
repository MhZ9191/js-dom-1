const imageLamp = document.querySelector(".div-image>img");

const btn = document.getElementById("btnUni");

btn.addEventListener("click", function () {
  btnText = btn.innerText;
  const btnClass = btn.classList;
  if (btnText.toLocaleLowerCase().includes("accendi")) {
    imageLamp.src = "./img/yellow_lamp.png";
    btn.innerText = "SPEGNI";
    btnClass.remove("accesa");
    btnClass.add("spenta");
  }
  if (btnText.toLocaleLowerCase().includes("spegni")) {
    imageLamp.src = "./img/white_lamp.png";
    btn.innerText = "ACCENDI";
    btnClass.remove("spenta");
    btnClass.add("accesa");
  }
});
