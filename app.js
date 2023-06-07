

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
//Generates random number for the computer choice
//Prompts player to make a choice and stores the input
//Converts any input to lowercase for consistency
let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
let promptPlayerChoice = prompt("Please enter Rock, Paper, or Scissors");
playerChoice = promptPlayerChoice.toLowerCase();
let playerScore = Number('');
let computerScore = Number('');


//Instructs the computer to make a decision based on random number
//Translates the random number to a string ('rock', 'paper', or 'scissors')
function getComputerChoice() {
    if (computerChoice === 1) {
        computerChoice = 'rock';
    } else if (computerChoice === 2) {
        computerChoice = 'paper';
    } else if (computerChoice === 3) {
        computerChoice = 'scissors';
    }
}

//One round of r,p,s
//Compares player's choice to computer's choice and determines a winner and loser or a tie
function roundOne (playerSelection, computerSelection) {
    if (playerChoice === 'rock' && computerChoice === 'paper') {
        return (`You played ${playerChoice} and the Computer plays ${computerChoice}. You Lose! Paper beats rock.`);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return (`You played ${playerChoice} and the Computer plays ${computerChoice}. You Win! Paper beats rock.`); 
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        return (`You played ${playerChoice} and the Computer plays ${computerChoice}. You Lose! Rock beats scissors.`);
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return (`You played ${playerChoice} and the Computer plays ${computerChoice}. You Win! Rock beats scissors.`);
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        return (`You played ${playerChoice} and the Computer plays ${computerChoice}. You Lose! Scissors beats paper.`);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return (`You played ${playerChoice} and the Computer plays ${computerChoice}. You Win! Scissors beats paper.`);
    } else if (playerChoice === computerChoice) {
        return (`You played ${playerChoice} and the Computer plays ${computerChoice}. It\'s a tie! you both played ${playerChoice}.`);
    } else {
        return ('Incorrect entry. Please type rock, paper, or scissors');
    }
}

const playerSelection = playerChoice;
const computerSelection = getComputerChoice();
console.log(roundOne(playerSelection, computerSelection));