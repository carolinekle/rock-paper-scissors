const playerInput = prompt("Pick rock, paper, or scissors");
const playerChoice = playerInput.toLowerCase();
let computerChoice = getComputerChoice();

function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
   
    return choices[Math.floor(Math.random() * choices.length)];

}

function playRound(computerChoice, playerChoice){
    
        if ((playerChoice == 'rock' && computerChoice == 'scissors') 
        || (playerChoice == 'scissors' && computerChoice  == 'paper') 
        || (playerChoice == 'paper' && computerChoice  == 'rock')) {
            
            console.log("You win!");
            
        } else if (playerChoice== computerChoice) {
            console.log("It's a tie.");
        } else {
        
            console.log("You lose!");
            
            }
        }

function game(){
    for (let i = 0; i < 5; i++){
        let playerInput = prompt("Pick rock, paper, or scissors");
        let playerChoice = playerInput.toLowerCase();
        playRound(computerChoice, playerChoice);
    }
}

game(computerChoice, playerChoice);