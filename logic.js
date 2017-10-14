// Global variables
var crystal = {
	purple:
	{
		name: "purple",
		value: 0
	},
	blue:
	{
		name: "blue",
		value: 0
	},
	purple2:
	{
		name: "purple2",
		value: 0
	},
	pink:
	{
		name: "pink",
		value: 0
	}
};


//scores
var currentScore = 0;
var targetScore = 0;

var winCount = 0;
var lossCount = 0;


//functions

var getRandom = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}


var startGame = function () {

	//reset current score

	currentScore = 0;


	//set a new target score
		
	targetScore = getRandom(19, 120);


	//set different value for crystals
	crystal.purple.value = getRandom(1, 12);
	crystal.blue.value = getRandom(1, 12);
	crystal.purple2.value = getRandom(1, 12);
	crystal.pink.value = getRandom(1, 12);




	//change html 

	$("#yourScore").html(currentScore);
	$("#targetScore").html(targetScore);


	//test the scores
	console.log("-------------")
	console.log("Target Score: " + targetScore);
	console.log("Purple: " + crystal.purple.value + " | Blue: " + crystal.blue.value + " | Purple2: " + crystal.purple2.value + " | Pink: " + crystal.pink.value);
	console.log("-------------")
}

//clicks on the crystals
var addValues = function(crystal) {
	
	//change current score
	currentScore = currentScore + crystal.value;

	//change html
	$("#yourScore").html(currentScore);

	checkWin();

	console.log("your score: " + currentScore);
}

//check scores
var checkWin = function() {

	//check current score
	if(currentScore > targetScore) {
		alert("You Lost!");
		console.log("You Lost");
		lossCount++;
		$("#lossCounter").html(lossCount);
		currentScore = 0;
		startGame();
	}

	else if (currentScore == targetScore) {
		alert("Congrats! You Win!");
		console.log("You Win!");
		winCount++;
		$("#winCounter").html(winCount);
		currentScore = 0;

		startGame();


}
}


//Main process

startGame();


$("#purple").click(function() {
	addValues(crystal.purple);
});

$("#blue").click(function() {
	addValues(crystal.blue);
});

$("#purple2").click(function() {
	addValues(crystal.purple2);
});

$("#pink").click(function() {
	addValues(crystal.pink);
});


