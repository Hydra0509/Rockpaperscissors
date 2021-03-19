let firstButton = document.getElementById('rock')
let secondButton = document.getElementById('paper')
let thirdButton = document.getElementById('scissors')
let yourPick = document.getElementById('yourPick')
let randomNumber = ((Math.round(Math.random() * 2)))
let output = document.getElementById('output')

function hide() {
	document.getElementById('buttons').style.display = 'none'
	document.getElementById('reloadbutton').style.visibility = 'visible'
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
	ifElse2()
}

secondButton.addEventListener("click", userPickedPaper)
secondButton.addEventListener("click", showComputersPick);





function userPickedScissors() {
	const userPressedScissors = ['Scissors']
	yourPick.innerHTML = 'You picked ' + userPressedScissors;
	ifElse3()
}

thirdButton.addEventListener("click", userPickedScissors)
thirdButton.addEventListener("click", showComputersPick);




function ifElse1() {
	if (randomNumber == 0 && userPickedRock) {
	output.innerHTML = 'Draw!'
	randomNumber = 'Rock'
	output.style.color = 'Yellow'
} else if (randomNumber == 1 && userPickedRock) {
	output.innerHTML = 'You lost!'
	randomNumber = 'Paper'
	output.style.color = 'Red'
} else {
	output.innerHTML = 'You won!'
	randomNumber = 'Scissors'
	output.style.color = 'Green'

}}


function ifElse2() {
	if (randomNumber == 0 && userPickedPaper) {
	output.innerHTML = 'You won!'
	randomNumber = 'Rock'
	output.style.color = 'Green'
} else if (randomNumber == 1 && userPickedPaper) {
	output.innerHTML = 'Draw!'
	randomNumber = 'Paper'
	output.style.color = 'Yellow'
} else {
	output.innerHTML = 'You lost!'
	randomNumber = 'Scissors'
	output.style.color = 'Red'
}}


function ifElse3() {
	if (randomNumber == 0 && userPickedScissors) {
	output.innerHTML = 'You lost!'
	randomNumber = 'Rock'
	output.style.color = 'Red'
} else if (randomNumber == 1 && userPickedScissors) {
	output.innerHTML = 'You won!'
	randomNumber = 'Paper'
	output.style.color = 'Green'
} else {
	output.innerHTML = 'Draw!'
	randomNumber = 'Scissors'
	output.style.color = 'Yellow'
}};