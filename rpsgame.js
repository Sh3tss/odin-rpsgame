function getComputerChoice(){
    const choices =["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    const humanChoice = window.prompt("Choose from rock, paper and scissors");

    if (humanChoice === "rock"){
        return "rock";
    }else if (humanChoice === "paper"){
        return "paper";
    }else if (humanChoice === "scissors"){
        return "scissors"
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    const huSelection = getHumanChoice();
    const compSelection = getComputerChoice();

    for(let  i = 0; i < 5; i++){
        

        function playRound(huChoice, compChoice){
            const huChoiceLower = huChoice.toLowerCase();
            const compChoiceLower = compChoice.toLowerCase();

            if (compChoiceLower === huChoiceLower){
            console.log("It`s a tie. No one wins");
            }else if (compChoiceLower === "paper" && huChoiceLower === "rock"){
            computerScore++;
            console.log(`You lose! ${compChoiceLower} beats ${huChoiceLower}`);
            }else if (compChoiceLower === "scissors" && huChoiceLower === "paper"){
            computerScore++;
            console.log(`You lose! ${compChoiceLower} beats ${huChoiceLower}`);
            }else if (compChoiceLower === "rock" && huChoiceLower === "scissors"){
            computerScore++;
            console.log(`You lose! ${compChoiceLower} beats ${huChoiceLower}`);
            }else {
            humanScore++;
            console.log(`You win! ${huChoiceLower} beats ${compChoiceLower}`);
            }
    }
    playRound(huSelection, compSelection);
    console.log(humanScore, computerScore);
    }
    
}




