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
