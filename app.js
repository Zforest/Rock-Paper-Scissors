

/*
Goals to complete Rock Paper Scissors
 1. Create Computers Choice (Complete)
 2. Create Players Choice
 3. Create a Single Round of R,P,S
 4. Create a 5 round game that keeps score

Sub-problem to resolve now
Create a single round of R,P,S
  1. Determine Computer's choice
  2. Determine Player's choice
     a. Make the selection case insensitive
  3. Compare the two choice's and declare a winner
     a. Declare a tie if same choice is made
*/

//Generates random number for the computer choice
let randomChoice = Math.floor(Math.random() * (4 - 1) + 1);

//Instructs the computer to make a decision based on random number
function getComputerChoice() {
    if (randomChoice === 1) {
        console.log('Computer plays rock!')
    } else if (randomChoice === 2) {
        console.log('Computer plays paper!')
    } else if (randomChoice === 3) {
        console.log('Computer plays scissors!')
    }
}
console.log(getComputerChoice());