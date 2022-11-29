function getComputerChoice() {

    const choices = ['Rock', 'Paper', 'Scissors'];
     
    const randomNumber = (Math.floor(Math.random() * choices.length));
   
    return choices[randomNumber];

}
console.log(getComputerChoice());

const playerSelection = prompt("Pick rock, paper, or scissors");

function game(playerSelection){

    const computerSelection = getComputerChoice();

    console.log(computerSelection);

    switch(playerSelection.toLowerCase() + computerSelection.toLowerCase()){
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            console.log("you won!");
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("the puter won :/")
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("a tie!!");
            break;
}
}
