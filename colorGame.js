
var colorList = randomColorDisplay(6);
var selectSquare = document.querySelectorAll('.square');
var pickedColor = random();
var findColor = document.getElementById("find");
var messageDisplay = document.getElementById("message");
var titleBackground = document.getElementById("title-background");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
var hidden = document.querySelectorAll(".hidden");
var colorboxes = 0;
//this displays the color you need to find
findColor.textContent = pickedColor;

for(var i = 0; i < selectSquare.length; i++){
	//assign color to squares
	selectSquare[i].style.backgroundColor = colorList[i];
	//assign clicked event to squares
	selectSquare[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(this.style.backgroundColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			titleBackground.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}

reset.addEventListener("click", function (){
	window.location.reload(true);
})

function changeColors(color){
	for(var i= 0; i<selectSquare.length; i++){
		selectSquare[i].style.backgroundColor = color;
	}
}


function random(){
	var randNum = Math.floor(Math.random() * colorList.length);
	return colorList[randNum];
}

function randomColorDisplay(num){
	
	var arr = [];

	for(var i = 0; i < num; i++){
		arr.push(pickColor());
	}
	return arr;
}

function pickColor(){
	var rand =  Math.floor(Math.random() * 6);
	var colorList = [
	"red",
	"blue",
	"green",
	"yellow",
	"purple",
	"orange"		
	];
	return colorList[rand];
}
//need to hide the bottom boxes and display colors.
easy.addEventListener("click", function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	colorList = randomColorDisplay(3);
	pickedColor = random();
	findColor.textContent = pickedColor;
	//iterating through the bottom three divs
	for(var i = 0; i<hidden.length; i++){
		hidden[i].style.display = "none";
	}

	for(var i = 0; i < 3; i++){
	//assign color to squares
	selectSquare[i].style.backgroundColor = colorList[i];
	//assign clicked event to squares
	selectSquare[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(this.style.backgroundColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			titleBackground.style.backgroundColor = clickedColor;
			reset.textContent = "Play Again";
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}
});

hard.addEventListener("click", function(){

	window.location.reload(true);
});