function getComputerChoice(){
    const choices =["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const compChoice = getComputerChoice();
console.log(compChoice);

function getHumanChoice(){
    const humanChoice = Number(window.prompt("Choose a number from 1, 2, 3"));
    let aNumber = 0;
    if (humanChoice === 1){
        return aNumber = "rock";
    }else if (humanChoice === 2){
        return aNumber = "paper";
    }else if (humanChoice === 3){
        return aNumber = "scissors"
    }
}


const huChoice = getHumanChoice();
console.log(huChoice);