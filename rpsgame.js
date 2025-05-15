function getComputerChoice(choices){
    const choices =["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const compChoice = getComputerChoice();
console.log(compChoice);