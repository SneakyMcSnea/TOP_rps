function getComputerChoice (){
    let max = 3;
    let computerChoice = Math.floor(Math.random() * max);
    if (computerChoice === 0){
        return "Rock";
    }
    else if (computerChoice === 1){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice (){
    while (true) {
        let userChoice = prompt("Rock, Paper or Scissors? Enter 'c' or press 'Cancel' to exit.");
        if (userChoice === null || userChoice.toLowerCase() === "c"){
            break;}
        else if (userChoice.toLowerCase() === "rock"){
            return "Rock";
        }
        else if (userChoice.toLowerCase() === "paper"){
            return "Paper";
        }
        else if (userChoice.toLowerCase() === "scissors"){
            return "Scissors";
        }
        else {
            alert("Invalid choice. Please retry. Valid choices: Rock, Paper, Scissors or 'c' to cancel.");
        }
    }
}

let humanScore = 0;
let computerScore = 0;