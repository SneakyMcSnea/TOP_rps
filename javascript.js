function getComputerChoice (){
    let max = 3;
    let pcChoice = Math.floor(Math.random() * max);
    if (pcChoice === 0){
        return "Rock";
    }
    else if (pcChoice === 1){
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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Rock") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("Tie!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("You lose! Paper beats Rock.");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("You win! Rock beats Scissors.");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("You win! Paper beats Rock.");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Paper") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("Tie!");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("You lose! Scissors beats Paper.");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("You lose! Rock beats Scissors.");
        computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("You win! Scissors beats Paper.");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        console.log("Your choice: " + humanChoice);    
        console.log("Computers choice: " + computerChoice);
        console.log("Tie!");
    }
}


let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);