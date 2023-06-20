/*
2. Tasks for UI
 a. Use buttons that the player selects instead of typing in moves
    i. 3 buttons. One for rock, paper, and scissors (Complete)
    ii. Add event listener to each button that calls gameRound
    with the correct playerSelection
     a.query the id of each button (Complete)
     b.create function that makes the playerSelection based on the button chosen
     then triggers the gameRound with that playerSelection
     c. apply function to each button via evenlistener (onclick)


    iii. Add div that displays results and change all console.logs into
    DOM methods
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

//while (playerScore < 5 && computerScore < 5) {



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


function winnerResults () {
    if (playerScore === 5) {
        console.log('You Win! You beat the computer!');
    } else if (computerScore === 5) {
        console.log('You Lose! the computer Wins. Try again.');
    }
}

rockButton.addEventListener('click', function(e) {
    playerSelection = 'rock';
    gameRound(playerSelection, computerSelection);
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    winnerResults();
});

paperButton.addEventListener('click', function(e) {
    playerSelection = 'paper';
    gameRound(playerSelection, computerSelection);
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    winnerResults();
});

scissorButton.addEventListener('click', function(e) {
    playerSelection = 'scissors';
    gameRound(playerSelection, computerSelection);
    console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    winnerResults();
});