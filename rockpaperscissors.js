let firstButton = document.getElementById('rock')
let secondButton = document.getElementById('paper')
let thirdButton = document.getElementById('scissors')
let yourPick = document.getElementById('yourPick')
let randomNumber = ((Math.round(Math.random() * 2)))
let output = document.getElementById('output')
let userScore = document.getElementById('userScore')
let cpuScore = document.getElementById('cpuScore')
let reloadButton = document.getElementById('reloadButton')
let pickButtons = document.getElementById('buttons')


function hide() {
	pickButtons.classList.toggle = 'hideShow'
	reloadButton.classList.toggle = 'hideShow'
}



function showComputersPick() {
	computerPick.innerHTML = 'The computer picked ' + randomNumber;
}



function userPickedRock() {
	const userPressedRock = ['Rock']
 	yourPick.innerHTML = 'You picked ' + userPressedRock
 	ifElse1();
}

firstButton.addEventListener("click", userPickedRock)
firstButton.addEventListener("click", showComputersPick);





function userPickedPaper() {
	const userPressedPaper = ['Paper']
	yourPick.innerHTML = 'You picked ' + userPressedPaper;
	ifElse2();
}

secondButton.addEventListener("click", userPickedPaper)
secondButton.addEventListener("click", showComputersPick);





function userPickedScissors() {
	const userPressedScissors = ['Scissors']
	yourPick.innerHTML = 'You picked ' + userPressedScissors;
	ifElse3();
}

thirdButton.addEventListener("click", userPickedScissors)
thirdButton.addEventListener("click", showComputersPick);




function ifElse1() {
	if (randomNumber == 0 && userPickedRock) {
	output.innerHTML = 'Draw!'
	randomNumber = 'Rock'
} else if (randomNumber == 1 && userPickedRock) {
	output.innerHTML = 'You lost!'
	randomNumber = 'Paper'
	cpuGetsOne()
} else if (randomNumber == 2 && userPickedRock) {
	output.innerHTML = 'You won!'
	randomNumber = 'Scissors'
	userGetsOne()
}}


function ifElse2() {
	if (randomNumber == 0 && userPickedPaper) {
	output.innerHTML = 'You won!'
	randomNumber = 'Rock'
	userGetsOne()
} else if (randomNumber == 1 && userPickedPaper) {
	output.innerHTML = 'Draw!'
	randomNumber = 'Paper'
} else if (randomNumber == 2 && userPickedPaper) {
	output.innerHTML = 'You lost!'
	randomNumber = 'Scissors'
	cpuGetsOne()
}}


function ifElse3() {
	if (randomNumber == 0 && userPickedScissors) {
	output.innerHTML = 'You lost!'
	randomNumber = 'Rock'
	cpuGetsOne();
} else if (randomNumber == 1 && userPickedScissors) {
	output.innerHTML = 'You won!'
	randomNumber = 'Paper'
	userGetsOne();
} else if (randomNumber == 2 && userPickedScissors) {
	output.innerHTML = 'Draw!'
	randomNumber = 'Scissors'
}};

function userGetsOne() {
	for (var i = 0;i < 2; i++) {
		userScore.innerHTML = i;	
	}}

function cpuGetsOne() {
	for (var i = 0;i < 2; i++) {
		cpuScore.innerHTML = i;	
	}}
