let pScore = 0;
let cScore = 0;
let playerSelection;
function computerPlay() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
}

//using node 
console.log('NOW STARTING ROCK PAPER SCISSORS\n');




function getDecision() {
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
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return 'IT IS A TIE\n';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        pScore++;
        return 'ROCK BEATS SCISSORS YOU WIN\n';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        pScore++;
        return 'PAPER BEATS ROCK YOU WIN\n';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        pScore++;
        return 'SCISSORS BEATS PAPER YOU WIN\n';
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        cScore++;
        return 'ROCK BEATS SCISSORS YOU LOSE\n';
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        cScore++;
        return 'PAPER BEATS ROCK YOU LOSE\n';
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        cScore++;
        return 'SCISSORS BEATS PAPER YOU LOSE\n';
    } else {
        return;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        getDecision();
        const computerSelection = computerPlay(); 
        console.log('You Chose: ' + playerSelection);
        console.log('Computer Chose: ' + computerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
}

game();
console.log('\n FINAL SCORE \n' + 'COMPUTER: ' + cScore + '\nPLAYER: ' + pScore);


