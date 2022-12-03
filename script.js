function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
     
    const randomNumber = (Math.floor(Math.random() * choices.length));
   
    return choices[randomNumber];

}
console.log(getComputerChoice());
//all trash. something about redefining getComputerChoice keeps changing the result. better
//just use if statements
const playerInput = prompt("Pick rock, paper, or scissors");
const playerSelection = playerInput.toLowerCase();
const computerChoice = getComputerChoice();
console.log(computerChoice);
const gameOdds = playerSelection + computerChoice;
console.log(gameOdds);

function playRound(gameOdds){

    console.log(gameOdds);
    switch(gameOdds){
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            console.log(won);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            print("the puter won :/")
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            print('a tie!!');
            break;
        default: console.log("oops... something went wrong");

}
return gameOdds;
}

console.log(gameOdds);



/*
this shit does not work for some reason 

function playRound(playerComputer){


function game(playerSelection){

    const computerSelection = getComputerChoice();

    console.log(computerSelection);


}
}*/
