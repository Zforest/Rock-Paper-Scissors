/*
2. Tasks for UI
 a. Use buttons that the player selects instead of typing in moves
    i. 3 buttons. One for rock, paper, and scissors (Complete)
    ii. Add event listener to each button that calls gameRound (complete)
    iii. Add div that displays results and change all console.logs into
    DOM methods (Complete)
    iv. Display a running score and announce the winner when 5 points
    is reached
    v. Rework old code as needed to make all above work
3.  Commit all changes to new branch
4.  When done merge all changes to main branch (See instructions)
*/


let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector('#paperBtn');
const scissorButton = document.querySelector('#scissorBtn');
const roundResults = document.querySelector('#results');
const roundWinner = document.createElement('div');
const scoreUpdate = document.createElement('div');
roundWinner.classList.add('winner');
scoreUpdate.classList.add('score');


//Anounces round winner, tie game, or game winning results 
const scoreResults = () => {
    if (computerScore > playerScore) {
        scoreUpdate.textContent = `Computer is winning with a score of ${computerScore}. Your score is currently ${playerScore}.`;
    } else if (playerScore > computerScore) {
        scoreUpdate.textContent = `You are currently winning with a score of ${playerScore}. The Computer's score is currently ${computerScore}.`;
    } else  if (computerScore === 5) {
        scoreUpdate.textContent = 'Computer scores the final point and takes the game! Sorry, you lose. Try again!';
    } else if (playerScore === 5) {
        scoreUpdate.textContent = 'You score the final point and beat the computer! You win! Wanna play again?';
    } else {
        scoreUpdate.textContent = `The game is currently tied up at ${playerScore} to ${computerScore}.`;
    }
}

//while (playerScore < 5 && computerScore < 5) {

//Randomly selects a number between 1-3 and applies rock, paper, or scissors to it
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3 + 1);
    switch (randomNum) {
        case 1: 
            return 'rock'
        case 2:
            return 'paper'
        case 3:
            return 'scissors'
        }
}
const computerSelection = getComputerChoice(); 

// Console logs who won the round or states if it was a tie.
function gameRound (playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection ==='scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')
        ) {
            roundWinner.textContent = `You played ${playerSelection} and the Computer plays ${computerSelection}. You Lose! ${computerSelection} beats ${playerSelection}.`;
            return computerScore++;
        } else if (
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'rock' && computerSelection === 'scissors')
        ) {
            roundWinner.textContent = `You played ${playerSelection} and the Computer plays ${computerSelection}. You Win! ${computerSelection} beats ${playerSelection}.`;
            return playerScore++;

    } else if (playerSelection === computerSelection) {
            roundWinner.textContent = `You played ${playerSelection} and the Computer plays ${computerSelection}. It\'s a tie! you both played ${playerSelection}.`;
            return;
    } else {
        roundWinner.textContent = 'Incorrect entry. Please type rock, paper, or scissors';
    }
}

//Event listeners that trigger on click of each button. The button also triggers the game round
rockButton.addEventListener('click', function(e) {
    playerSelection = 'rock';
    gameRound(playerSelection, computerSelection);
    scoreResults();
    roundResults.appendChild(roundWinner);
    roundResults.appendChild(scoreUpdate);

});

paperButton.addEventListener('click', function(e) {
    playerSelection = 'paper';
    gameRound(playerSelection, computerSelection);
    scoreResults();
    roundResults.appendChild(roundWinner);
    roundResults.appendChild(scoreUpdate);

});

scissorButton.addEventListener('click', function(e) {
    playerSelection = 'scissors';
    gameRound(playerSelection, computerSelection);
    scoreResults();
    roundResults.appendChild(roundWinner);
    roundResults.appendChild(scoreUpdate);

});