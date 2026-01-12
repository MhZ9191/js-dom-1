const imageLamp = document.querySelector(".div-image>img");
console.log(imageLamp.src);

const btn = document.getElementById("btnUni");

btn.addEventListener("click", function () {
  imageLamp.src = "./img/yellow_lamp.png";
});
