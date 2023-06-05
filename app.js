let randomChoice = Math.floor(Math.random() * (4 - 1) + 1);

function getComputerChoice() {
    if (randomChoice === 1) {
        console.log('Computer plays rock!')
    } else if (randomChoice === 2) {
        console.log('Computer plays paper!')
    } else {
        console.log('Computer plays scissors!')
    }
}
console.log(getComputerChoice());