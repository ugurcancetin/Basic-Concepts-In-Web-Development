var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent=pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of the clicked square
		var clickedColor = this.style.background;

		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct!";
			changeColor(clickedColor);
			h1.style.background=pickedColor;
		}else {
		 this.style.background="#232323";
		 messageDisplay.textContent="Try Again";
		}
	});
}

function changeColor(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background=color;
	}
}

function pickColor(){

	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = []
	//add num random colorst to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	};
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" color between 0 - 255
	var r = Math.floor(Math.random()*256);
	//pick a "green" color between 0 - 255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" color between 0 - 255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}