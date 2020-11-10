let pScore = 0;
let cScore = 0;

function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

//using node 
console.log('NOW STARTING ROCK PAPER SCISSORS\n');


let playerSelection;
let decision = false;
while (decision !== true) {
    const prompt = require('prompt-sync')();
    let temp = prompt('rock, paper, or scissors: ');
    if (temp.toLowerCase() === 'rock') {
        playerSelection = temp.toLowerCase();
        decision = true;
    } else if (temp.toLowerCase() === 'paper') {
        playerSelection = temp.toLowerCase();
        decision = true;
    } else if (temp.toLowerCase() === 'scissors') {
        playerSelection = temp.toLowerCase();
        decision = true;
    } else {
        console.log('Try again');
    }
}

function playRound(playerSelection,computerSelection) {
    //TODO: complete this function. For now, should only start a game and return a string that declares the winner of the round: 'You lose! Paper beats rock'
    if (playerSelection === computerSelection) {
        return 'IT IS A TIE';
    }
    return;
}

const computerSelection = computerPlay(); 
console.log('You Chose: ' + playerSelection);
console.log('Computer Chose: ' + computerSelection);
console.log(playRound(playerSelection,computerSelection));


function game() {
    //TODO: keep track of scores 
}

