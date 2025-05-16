let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices =["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const compChoice = getComputerChoice();
console.log(compChoice);

function getHumanChoice(){
    const humanChoice = Number(window.prompt("Choose from rock, paper and scrissors"));
    let aNumber = 0;
    if (humanChoice === "rock"){
        return aNumber = "rock";
    }else if (humanChoice === "paper"){
        return aNumber = "paper";
    }else if (humanChoice === "scissors"){
        return aNumber = "scissors"
    }
}
const huChoice = getHumanChoice();
console.log(huChoice);


function playRound(huChoice, compChoice){
    const huChoiceLower = huChoice.toLowerCase();
    const compChoiceLower = compChoice.toLowerCase();

    if (huChoiceLower === "rock" && compChoiceLower === "paper"){
        computerScore ++;
        console.log("You lose! Paper beats Rock")
    }else if (huChoiceLower === "paper" && compChoiceLower === "scissors"){
        computerScore ++;
        console.log("You lose! Scissors beats Paper")
    }else if (huChoiceLower === "scissors" && compChoiceLower === "rock"){
        computerScore ++;
        console.log("You lose! Rock beats Scissors")
    }else if (huChoiceLower === "paper" && compChoiceLower === "rock"){
        humanScore ++;
        console.log("You win! Paper beats Rock")
    }else if (huChoiceLower === "scissors" && compChoiceLower === "paper"){
        humanScore ++;
        console.log("You win! Scissors beats Paper")
    }else if (huChoiceLower === "rock" && compChoiceLower === "scissors"){
        humanScore ++;
        console.log("You win! Rock beats Scissors")
    }
}



