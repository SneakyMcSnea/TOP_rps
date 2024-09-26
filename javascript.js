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

    checkScores();
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

    checkScores();
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

    checkScores();
}

function checkScores(){
    if(humanScore === 5){
        const result = document.querySelector("#header");
        const displayHumanScore = document.querySelector("#scoreOfHuman");
        const displayComputerScore = document.querySelector("#scoreOfComputer");
        result.textContent = "🎉 CONGRATULATIONS, YOU WON THIS GAME! 🎊\n Your score: " + humanScore + "          " + "CPU score: " + computerScore;
        displayHumanScore.textContent = 0;
        displayComputerScore.textContent = 0;
        computerScore = 0;
        humanScore = 0;
    }
    else if (computerScore === 5){
        const result = document.querySelector("#header");
        const displayHumanScore = document.querySelector("#scoreOfHuman");
        const displayComputerScore = document.querySelector("#scoreOfComputer");
        result.textContent = "🏳😢, YOU LOST THIS GAME 😢🏳\n Your score: " + humanScore + "          " + "CPU score: " + computerScore;
        displayHumanScore.textContent = 0;
        displayComputerScore.textContent = 0;
        computerScore = 0;
        humanScore = 0;
    }
}

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