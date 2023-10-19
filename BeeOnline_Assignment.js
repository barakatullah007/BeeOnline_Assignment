let iconSlide1 = document.getElementById("iconSlide1");
let idBars = document.getElementById("idBars");
let idWrong = document.getElementById("idWrong");
let slide1Menu = document.getElementById("slide1Menu");

iconSlide1.addEventListener("click", () => {
    idBars.classList.toggle("hide");
    idWrong.classList.toggle("hide");
    slide1Menu.classList.toggle("hide");
});