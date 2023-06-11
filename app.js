

/*
Goals to complete Rock Paper Scissors
 1. Create computers Choice (Complete)
 2. Create players Choice (Complete)
 3. Create a Single Round of R,P,S (Complete)
 4. Create a 5 round game that keeps score
    a. Create a loop to continue into 4 additional rounds
    b. Keep score of each round
    c. Determine the final score and announce the winner

*/

let playerScore = 0;
let computerScore = 0;

while (playerScore < 5 && computerScore < 5) {

let promptPlayerChoice = prompt("Please enter Rock, Paper, or Scissors");
const playerSelection = promptPlayerChoice.toLowerCase();

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

    function gameRound (playerSelection, computerSelection) {

        if (
            (playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection ==='scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'rock')
           ) {
            console.log(`You played ${playerSelection} and the Computer plays ${computerSelection}. You Lose! ${computerSelection} beats ${playerSelection}.`);
            return (computerScore++);

           } else if (
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'rock' && computerSelection === 'scissors')
            ) {
            console.log(`You played ${playerSelection} and the Computer plays ${computerSelection}. You Win! ${computerSelection} beats ${playerSelection}.`);
            return (playerScore++);

        } else if (playerSelection === computerSelection) {
            console.log(`You played ${playerSelection} and the Computer plays ${computerSelection}. It\'s a tie! you both played ${playerSelection}.`);
             return;
        } else {
            console.log('Incorrect entry. Please type rock, paper, or scissors');
        }
    }

    const computerSelection = getComputerChoice(); 
    gameRound(playerSelection, computerSelection);
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);

    function winnerResults () {
        if (playerScore === 5) {
            console.log('You Win! You beat the computer!');
        } else if (computerScore === 5) {
            console.log('You Lose! the computer Wins. Try again.');
        }
    }

    winnerResults();
}