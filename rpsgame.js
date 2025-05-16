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
    const humanChoice = window.prompt("Choose from rock, paper and scrissors");

    if (humanChoice === "rock"){
        return "rock";
    }else if (humanChoice === "paper"){
        return "paper";
    }else if (humanChoice === "scissors"){
        return "scissors"
    }
}
const huChoice = getHumanChoice();
console.log(huChoice);


function playRound(huChoice, compChoice){
    const huChoiceLower = huChoice.toLowerCase();
    const compChoiceLower = compChoice.toLowerCase();

    if (huChoiceLower === "rock" && compChoiceLower === "paper"){
        computerScore++;
        console.log(`You lose! ${huChoice} beats ${compChoice}`);
    }else if (huChoiceLower === "paper" && compChoiceLower === "scissors"){
        computerScore++;
        console.log(`You lose! ${huChoice} beats ${compChoice}`);
    }else if (huChoiceLower === "scissors" && compChoiceLower === "rock"){
        computerScore++;
        console.log(`You lose! ${huChoice} beats ${compChoice}`);
    }else {
        humanScore++;
        console.log(`You win! ${huChoice} beats ${compChoice}`);
    }
}
console.log(humanScore, computerScore);



