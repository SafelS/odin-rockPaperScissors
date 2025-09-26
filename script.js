//console.log("Script connected");

let humanScore = 0;
let computerScore = 0;


/*
0 == rock
1 == paper
2 == scissors
*/

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

console.log(getComputerChoice())


function getHumanChoice(){
    let choice = prompt("rock, paper or scissors?");
    if(choice.toLowerCase() == "rock"){
        return 0;
    }else if(choice.toLowerCase() == "paper"){
        return 1;
    }else{
        return 2;
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw!");
    } 
    else if (
        (humanChoice === 0 && computerChoice === 2) || // rock beats scissors
        (humanChoice === 1 && computerChoice === 0) || // paper beats stone
        (humanChoice === 2 && computerChoice === 1)    // scissors beats paper
    ) {
        console.log("You won!");
        humanScore++;
        return humanScore
    } 
    else {
        console.log("Computer won!");
        computerScore++;
        return computerScore
    }
}



//console.log(humanScore)
//console.log(computerScore)

function playGame(){
    for(let i = 0; i<5; i++ ){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if(humanScore == computerScore){
        console.log("Nobody won, we'll get 'em next time")
    }else if(humanScore > computerScore){
        console.log("You Won The Match with " + humanScore + " points");
    }else{
        console.log("The Clankers won. The scored " + computerScore + " points");
    }
}

playGame();
