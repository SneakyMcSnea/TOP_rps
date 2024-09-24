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

function playRoundRock(){
    let humanChoice = "Rock";
    let computerChoice = getComputerChoice();

    const humanSelection = document.querySelector("#user-choice");
    const computerSelection = document.querySelector("#computer-choice");
    const result = document.querySelector("#header");
    const displayHumanScore = document.querySelector("#scoreOfHuman");
    const displayComputerScore = document.querySelector("#scoreOfComputer");

    if (humanChoice === "Rock" && computerChoice === "Rock") {
    humanSelection.textContent = "YOUR CHOICE: ✊";
    computerSelection.textContent = "CPU CHOICE: ✊";
    result.textContent = "TIE!";
    }

    else if (humanChoice === "Rock" && computerChoice === "Paper") {
    humanSelection.textContent = "YOUR CHOICE: ✊";
    computerSelection.textContent = "CPU CHOICE: 👋";
    result.textContent = "YOU LOSE!";
    computerScore++;
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
    }

    else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    humanSelection.textContent = "YOUR CHOICE: ✊";
    computerSelection.textContent = "CPU CHOICE: ✌";
    result.textContent = "YOU WIN!";
    humanScore++;
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
    }

}

function playRoundPaper(){
let humanChoice = "Paper";
let computerChoice = getComputerChoice();

const humanSelection = document.querySelector("#user-choice");
const computerSelection = document.querySelector("#computer-choice");
const result = document.querySelector("#header");
const displayHumanScore = document.querySelector("#scoreOfHuman");
const displayComputerScore = document.querySelector("#scoreOfComputer");

if (humanChoice === "Paper" && computerChoice === "Rock") {
    humanSelection.textContent = "YOUR CHOICE: 👋";
    computerSelection.textContent = "CPU CHOICE: ✊";
    result.textContent = "YOU WIN!";
    humanScore++;
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
    }

else if (humanChoice === "Paper" && computerChoice === "Paper") {
    humanSelection.textContent = "YOUR CHOICE: 👋";
    computerSelection.textContent = "CPU CHOICE: 👋";
    result.textContent = "TIE!";
    }   

else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    humanSelection.textContent = "YOUR CHOICE: 👋";
    computerSelection.textContent = "CPU CHOICE: ✌";
    result.textContent = "YOU LOSE!";
    computerScore++;
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
    }
}

function playRoundScissors(){
    let humanChoice = "Scissors";
    let computerChoice = getComputerChoice();

    const humanSelection = document.querySelector("#user-choice");
    const computerSelection = document.querySelector("#computer-choice");
    const result = document.querySelector("#header");
    const displayHumanScore = document.querySelector("#scoreOfHuman");
    const displayComputerScore = document.querySelector("#scoreOfComputer");


    if (humanChoice === "Scissors" && computerChoice === "Rock") {
        humanSelection.textContent = "YOUR CHOICE: ✌";
        computerSelection.textContent = "CPU CHOICE: ✊";
        result.textContent = "YOU LOSE!";
        computerScore++;
        displayHumanScore.textContent = humanScore;
        displayComputerScore.textContent = computerScore;
    }

    else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanSelection.textContent = "YOUR CHOICE: ✌";
        computerSelection.textContent = "CPU CHOICE: 👋";
        result.textContent = "YOU WIN!";
        humanScore++;
        displayHumanScore.textContent = humanScore;
        displayComputerScore.textContent = computerScore;
    }

    else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
        humanSelection.textContent = "YOUR CHOICE: ✌";
        computerSelection.textContent = "CPU CHOICE: ✌";
    }
}


// function playRound(humanChoice, computerChoice) {

//     const humanSelection = document.querySelector("#user-choice");
//     const computerSelection = document.querySelector("#computer-choice");

//     if (humanChoice === "Rock" && computerChoice === "Rock") {
//         humanSelection.textContent = "YOUR CHOICE: ROCK";
//         computerSelection.textContent = "CPU CHOICE: ROCK";
//     } else if (humanChoice === "Rock" && computerChoice === "Paper") {
//         humanSelection.textContent = "YOUR CHOICE: ROCK";
//         computerSelection.textContent = "CPU CHOICE: PAPER";
//         computerScore++;
//     } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
//         humanSelection.textContent = "YOUR CHOICE: ROCK";
//         computerSelection.textContent = "CPU CHOICE: SCISSORS";
//         humanScore++
//     } else if (humanChoice === "Paper" && computerChoice === "Rock") {
//         console.log("Your choice: " + humanChoice);    
//         console.log("Computers choice: " + computerChoice);
//         console.log("You win! Paper beats Rock.");
//         humanScore++;
//     } else if (humanChoice === "Paper" && computerChoice === "Paper") {
//         console.log("Your choice: " + humanChoice);    
//         console.log("Computers choice: " + computerChoice);
//         console.log("Tie!");
//     } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
//         console.log("Your choice: " + humanChoice);    
//         console.log("Computers choice: " + computerChoice);
//         console.log("You lose! Scissors beats Paper.");
//         computerScore++;
//     } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
//         console.log("Your choice: " + humanChoice);    
//         console.log("Computers choice: " + computerChoice);
//         console.log("You lose! Rock beats Scissors.");
//         computerScore++;
//     } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
//         console.log("Your choice: " + humanChoice);    
//         console.log("Computers choice: " + computerChoice);
//         console.log("You win! Scissors beats Paper.");
//         humanScore++;
//     } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
//         console.log("Your choice: " + humanChoice);    
//         console.log("Computers choice: " + computerChoice);
//         console.log("Tie!");
//     }
// }

let computerScore = 0;
let humanScore = 0;

const selectionRock = document.querySelector("#rock");
selectionRock.addEventListener("click", playRoundRock);
const selectionPaper = document.querySelector("#paper");
selectionPaper.addEventListener("click", playRoundPaper)
const selectionScissors = document.querySelector("#scissors");
selectionScissors.addEventListener("click", playRoundScissors)

const buttonRock = document.querySelector("#button-rock");
buttonRock.addEventListener("click", playRoundRock)
const buttonPaper = document.querySelector("#button-paper");
buttonPaper.addEventListener("click", playRoundPaper)
const buttonScissors = document.querySelector("#button-scissors");
buttonScissors.addEventListener("click", playRoundScissors)