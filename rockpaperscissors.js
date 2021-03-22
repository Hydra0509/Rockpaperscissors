let firstButton = document.getElementById('rock')
let secondButton = document.getElementById('paper')
let thirdButton = document.getElementById('scissors')
let yourPick = document.getElementById('yourPick')
let output = document.getElementById('output')
let userScore = document.getElementById('userScore')
let cpuScore = document.getElementById('cpuScore')
let reloadButton = document.getElementById('reloadButton')
let darkModeButton = document.getElementById('DarkMode')
let secondContentDarkMode = document.querySelector('.secondDarkMode')
let firstContentDarkMode = document.querySelector('.firstDarkMode')
let scoreBoardDarkMode = document.querySelector('.scoreBoardDarkMode')



function random() {
	return ((Math.round(Math.random() * 2)))
}


function hide() {
	document.getElementById('buttons').style.visibility = 'hidden'
	setTimeout (function delay() {
	document.getElementById('reloadButton').style.visibility = 'visible'
	},2600)
	document.getElementById('rpsgif').style.visibility = 'visible'
}


function userPickedRock() {
	output.innerHTML = ""
	const userPressedRock = ['Rock']
	document.getElementById('rpsgif').style.visibility = 'visible'
	setTimeout (function delay() {
		yourPick.innerHTML = 'You picked ' + userPressedRock
	},2600);
 	setTimeout (ifElse1,2600)
}

firstButton.addEventListener("click", userPickedRock)



function userPickedPaper() {
	output.innerHTML = ""
	const userPressedPaper = ['Paper']
	document.getElementById('rpsgif').style.visibility = 'visible'
	setTimeout (function delay() {
		yourPick.innerHTML = 'You picked ' + userPressedPaper
	},2600);
	setTimeout (ifElse2,2600)
}

secondButton.addEventListener("click", userPickedPaper)


function userPickedScissors() {
	output.innerHTML = ""
	const userPressedScissors = ['Scissors']
	document.getElementById('rpsgif').style.visibility = 'visible'
	setTimeout (function delay() {
		yourPick.innerHTML = 'You picked ' + userPressedScissors
	},2600);
	setTimeout (ifElse3,2600)
}

thirdButton.addEventListener("click", userPickedScissors);

	function ifElse1() {
	var randomNumber = random()
	if (randomNumber == 0 && userPickedRock) {
	output.innerHTML = 'Draw!'
	output.style.color = 'yellow'
	computerPick.innerHTML = 'The computer picked Rock'
} else if (randomNumber == 1 && userPickedRock) {
	output.innerHTML = 'You lost!'
	output.style.color = 'red'
	computerPick.innerHTML = 'The computer picked Paper'
	cpuGetsOne();
} else if (randomNumber == 2 && userPickedRock) {
	output.innerHTML = 'You won!'
	output.style.color = 'green'
	computerPick.innerHTML = 'The computer picked Scissors'
	userGetsOne();
}	document.getElementById('rpsgif').style.visibility = 'hidden'}


function ifElse2() {
	var randomNumber = random();
	if (randomNumber == 0 && userPickedPaper) {
	output.innerHTML = 'You won!'
	computerPick.innerHTML = 'The computer picked Rock'
	output.style.color = 'green'
	userGetsOne()
} else if (randomNumber == 1 && userPickedPaper) {
	output.innerHTML = 'Draw!'
	output.style.color = 'yellow'
	computerPick.innerHTML = 'The computer picked Paper'
} else if (randomNumber == 2 && userPickedPaper) {
	output.innerHTML = 'You lost!'
	computerPick.innerHTML = 'The computer picked Scissors'
	output.style.color = 'red'
	cpuGetsOne()
}document.getElementById('rpsgif').style.visibility = 'hidden'}

function ifElse3() {
	var randomNumber = random()
	if (randomNumber == 0 && userPickedScissors) {
	output.innerHTML = 'You lost!'
	computerPick.innerHTML = 'The computer picked Rock'
	output.style.color = 'red'
	 	cpuGetsOne();
} else if (randomNumber == 1 && userPickedScissors) {
	output.innerHTML = 'You won!'
	output.style.color = 'green'
	computerPick.innerHTML = 'The computer picked Paper'
	userGetsOne();
} else if (randomNumber == 2 && userPickedScissors) {
	output.innerHTML = 'Draw!'
	output.style.color = 'yellow'
	computerPick.innerHTML = 'The computer picked Scissors'
}document.getElementById('rpsgif').style.visibility = 'hidden'};


var i2 = 0;
function userGetsOne() {
	userScore.innerHTML = ++i2;
}


var i = 0;
function cpuGetsOne() {
	cpuScore.innerHTML = ++i;
}

function playAgain() {
	yourPick.innerHTML = ""
	output.innerHTML ="Pick one!"
	output.style.color = colorSwitch;
	computerPick.innerHTML = ""
	document.getElementById('buttons').style.visibility = 'visible'
	reloadButton.style.visibility = 'hidden'
	}

var colorSwitch = output.style.color;

function switchColor() {
	if (secondContentDarkMode) {
		output.style.color = 'white' 
	} else {
		output.style.color = 'black'
	}}



reloadButton.addEventListener("click" , playAgain);


function darkModeToggle() {
	document.querySelector('body').classList.toggle("bodyBackground");
	secondContentDarkMode.classList.toggle("secondDarkMode");
	firstContentDarkMode.classList.toggle("firstDarkMode");
	scoreBoardDarkMode.classList.toggle("scoreBoardDarkMode");
}
