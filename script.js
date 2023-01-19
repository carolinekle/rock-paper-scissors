let playerScore = 0;
let compScore = 0;
const buttons = document.querySelectorAll('input')
let results = document.querySelector('#result')
let score = document.createElement('h3')
score.classList.add('score')
// const playerInput = prompt("Pick rock, paper, or scissors");
// const playerChoice = playerInput.toLowerCase();



function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
   
    return choices[Math.floor(Math.random() * choices.length)];

}

function playRound(playerChoice){
    let computerChoice = getComputerChoice();


        if ((playerChoice == 'rock' && computerChoice == 'scissors') 
        || (playerChoice == 'scissors' && computerChoice  == 'paper') 
        || (playerChoice == 'paper' && computerChoice  == 'rock')) {
            
            playerScore += 1;
            score.innerHTML = ("You win this round! <br />" + "Computer score: " + compScore +  "<br />" +"Your score: " + playerScore);
            results.append(score);
            
        } else if (playerChoice==computerChoice) {
            score.innerHTML = ("It\'s a tie!");
            results.appendChild(score);
        } else{
            compScore += 1;
            score.innerHTML = ("The computer won this round!<br />" + "Computer score: " + compScore + "<br />" + "Your score: " + playerScore);
            results.appendChild(score);
            }
        if (playerScore == 5) {
            
            score.innerHTML = ("You won the game! <br />" + "The page will reload to play again.");
            results.appendChild(score);
            setTimeout("location.reload(true);", 2000);
        }
        if(compScore == 5){
            score.innerHTML = ("The computer won the game! <br /> " + "The page will reload to play again.");
            results.appendChild(score);
            setTimeout("location.reload(true);", 2000);
        }

    
}
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
        

             
/* function game(){
    for (let i = 0; i < 5; i++){
        let playerInput = prompt("Pick rock, paper, or scissors");
        let playerChoice = playerInput.toLowerCase();
        playRound(computerChoice, playerChoice);
    }
} */


/* const selectionButtons = document.querySelectorAll('[data-selection]');

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        makeSelection(selectionName)
    })
}) */