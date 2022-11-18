let playerScore = 0;
let computerScore = 0;

function getRandomChoice() {
    let x = Math.floor(Math.random()*3 + 1);
    switch (x) {
        case (1): return "rock";
        case (2): return "paper";
        case (3): return "scissors";
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {return "It's a tie!"};
    switch (playerChoice) {
        case ("rock"): switch (computerChoice) {
            case ("paper"): 
                computerScore++;
                return "You lose! Paper beats rock!";
            case ("scissors"): 
                playerScore++;
                return "You win! Rock beats scissors!";
        }; case ("paper"): switch (computerChoice) {
            case ("scissors"): 
                computerScore++;
                return "You lose! Scissors beats paper!";
            case ("rock"): 
                playerScore++;
                return "You win! Paper beats rock!";
        }; case ("scissors"): switch (computerChoice) {
            case ("rock"): 
                computerScore++;
                return "You lose! Rock beats scissors!";
            case ("paper"): 
                playerScore++;
                return "You win! Scissors beats paper!";
        };
    }
}