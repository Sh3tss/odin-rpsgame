let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const choices =["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



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




function playRound(huChoice, compChoice){
    const huChoiceLower = huChoice.toUpperCase();
    const compChoiceLower = compChoice.toLowerCase();

    if (compChoiceLower === huChoiceLower){
        console.log("It`s a tie. No one wins");
    }else if (compChoiceLower === "rock" && huChoiceLower === "paper"){
        computerScore++;
        console.log(`You lose! ${compChoice} beats ${huChoice}`);
    }else if (compChoiceLower === "paper" && huChoiceLower === "scissors"){
        computerScore++;
        console.log(`You lose! ${compChoice} beats ${huChoice}`);
    }else if (compChoiceLower === "scissors" && huChoiceLower === "rock"){
        computerScore++;
        console.log(`You lose! ${compChoice} beats ${huChoice}`);
    }else {
        humanScore++;
        console.log(`You win! ${huChoice} beats ${compChoice}`);
    }
}

const huChoice = getHumanChoice();
const compChoice = getComputerChoice();

playRound(huChoice, compChoice);
console.log(humanScore, computerScore);



