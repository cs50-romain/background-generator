let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let h3 = document.querySelector("h3");
let body = document.getElementById("gradient");

function changeBodyStyle(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = "Left color: " + color1.value + " | Right Color: " + color2.value + "\n" + body.style.background;
}

color1.addEventListener("input", changeBodyStyle);
color2.addEventListener("input", changeBodyStyle)