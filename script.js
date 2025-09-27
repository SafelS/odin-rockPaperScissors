let humanScore = 0;
let computerScore = 0;
let choice = -1;

let resultDiv = document.querySelector(".result-container");



function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

/*
0 == rock
1 == paper
2 == scissors
*/


const btn = document.querySelector(".buttons");

btn.addEventListener("click", (event) => {
    let target = event.target;

    if(target.classList.contains("rock")){
        playRound(0,getComputerChoice());
    }else if(target.classList.contains("paper")){
        playRound(1, getComputerChoice());
    }else if(target.classList.contains("scissors")){
        playRound(2, getComputerChoice());
    }
});


function playRound(humanChoice, computerChoice) {
    
    if(humanScore == 5){
        resultDiv.textContent = "Humans WON!";
        humanScore = 0;
    }else if(computerScore == 5){
        resultDiv.textContent= "Clankers won....";
        computerScore = 0;
    }
    
    if (humanChoice === computerChoice) {
        //alert("Draw!");
        resultDiv.textContent = "Draw!";
    } 
    else if (
        (humanChoice === 0 && computerChoice === 2) || // rock beats scissors
        (humanChoice === 1 && computerChoice === 0) || // paper beats stone
        (humanChoice === 2 && computerChoice === 1)    // scissors beats paper
    ) {
        resultDiv.textContent = "You Won"
        humanScore++;
        //return humanScore
    } 
    else {
        resultDiv.textContent = "Computer Won"
        computerScore++;
        //return computerScore
    }


}
