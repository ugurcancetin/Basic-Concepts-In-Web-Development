
var numSquares = 6;
//var colors = generateRandomColors(numSquares);
var colors = [];
//var pickedColor = pickColor();
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var container = document.querySelector("#container");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyButton = document.querySelector("#easyBtn");
//var hardButton = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");


init ();


function init(){


	setUpModeButtons();	
	
	setUpSquares();

	reset();
}

function setUpModeButtons(){
	//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			modeButtons[2].classList.remove("selected");
			modeButtons[3].classList.remove("selected");
			this.classList.add("selected");
			//this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			//does the same thing up and down
			if (this.textContent === "Easy") {
				numSquares = 3;
				for (var i = 0; i < squares.length; i++) {
					squares[i].style.width="30%"
					squares[i].style.margin="1.66%";
				};
				container.style.width= 600;
			}else if(this.textContent == "Medium"){
				numSquares = 6;
				for (var i = 0; i < squares.length; i++) {
					squares[i].style.width="30%"
					squares[i].style.margin="1.66%";
				};
				container.style.width= 600;
			}else if(this.textContent == "Hard"){
				numSquares = 8;
				for (var i = 0; i < squares.length; i++) {
					squares[i].style.width="17%"
					squares[i].style.margin="3%";
				};
				container.style.width= 750;
			}else if (this.textContent == "Master"){
				numSquares = 10;
				for (var i = 0; i < squares.length; i++) {
					squares[i].style.width="14%"
					squares[i].style.margin="3%";
				};
				container.style.width= 800;
			}
			reset();
		});
	}	
}

function setUpSquares(){
		for (var i = 0; i < squares.length; i++) {

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of the clicked square
			var clickedColor = this.style.background;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent="Correct!";
				resetButton.textContent= "Play Again?";
				changeColor(clickedColor);
				h1.style.background=pickedColor;
			}else {
			 this.style.background="#232323";
			 messageDisplay.textContent="Try Again";
			}
		});
	}
}
function reset (){

	//generate all the new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from a random array
	pickedColor = pickColor();
	//Change the color display to change match color
	colorDisplay.textContent = pickedColor;
	//
	resetButton.textContent="New Colors";
	//change the messageDisplay to null
	messageDisplay.textContent="";
	//change colors of squares.
	for (var i = 0; i <squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		} else{
			squares[i].style.display="none"; 
		};
	};
	h1.style.background="steelblue";
	//colorDisplay.textContent=randomColor().r/10 + randomColor().g/10 ;
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else {
// 			squares[i].style.display = "none";
// 		}
// 	};

// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 			squares[i].style.display = "block";
// 		}
// 	};
// });

resetButton.addEventListener("click", function(){
	reset();
	// //generate all the new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new color from a random array
	// pickedColor = pickColor();
	// //Change the color display to change match color
	// colorDisplay.textContent = pickedColor;
	// //
	// this.textContent="New Colors";
	// //change the messageDisplay to null
	// messageDisplay.textContent="";
	// //change colors of squares.
	// for (var i = 0; i <squares.length; i++) {
	// 	squares[i].style.background=colors[i];
	// };
	// h1.style.background="steelblue";
});

for (var i = 0; i < squares.length; i++) {

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of the clicked square
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent= "Play Again?";
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
