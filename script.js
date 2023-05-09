var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function mathRandom(){
	var random = Math.floor(Math.random() * 256).toString(16);
	if (random.length < 2) {
       random = "0" + random;
   }
	return random;
}

function randomColorNo() {
	var colorRandom = "#" + mathRandom() + mathRandom() + mathRandom();
	return colorRandom;
}

function setRandom(){

	color1.setAttribute("value", randomColorNo());
	color2.setAttribute("value", randomColorNo());

	setGradient()
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", setRandom);

