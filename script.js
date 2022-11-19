let playerScore = 0;
let computerScore = 0;
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');
let gameEnded = false;

// game logic

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
                computerScoreDisplay.innerHTML = computerScore;
                return "You lose! Paper beats rock!";
            case ("scissors"): 
                playerScore++;
                playerScoreDisplay.innerHTML = playerScore;
                return "You win! Rock beats scissors!";
        }; case ("paper"): switch (computerChoice) {
            case ("scissors"): 
                computerScore++;
                computerScoreDisplay.innerHTML = computerScore;
                return "You lose! Scissors beats paper!";
            case ("rock"): 
                playerScore++;
                playerScoreDisplay.innerHTML = playerScore;
                return "You win! Paper beats rock!";
        }; case ("scissors"): switch (computerChoice) {
            case ("rock"): 
                computerScore++;
                computerScoreDisplay.innerHTML = computerScore;
                return "You lose! Rock beats scissors!";
            case ("paper"): 
                playerScore++;
                playerScoreDisplay.innerHTML = playerScore;
                return "You win! Scissors beats paper!";
        };
    }
}

// ui interaction

const roundResult = document.getElementById('roundResult');
const roundStatus = document.getElementById('roundStatus');
const playerHand = document.getElementById('playerHand');
const computerHand = document.getElementById('computerHand');

document.getElementById('rock').addEventListener('click', chooseRock);
function chooseRock() {choose('rock')}

document.getElementById('paper').addEventListener('click', choosePaper);
function choosePaper() {choose('paper')}

document.getElementById('scissors').addEventListener('click', chooseScissors);
function chooseScissors() {choose('scissors')}

function choose(choice) {
    let computerChoice = getRandomChoice();
    roundResult.textContent = playRound(choice, computerChoice);
    playerHand.innerHTML = updateHand(choice);
    computerHand.innerHTML = updateHand(computerChoice);
    roundStatus.style.display = "none";
    checkScore();
}

function updateHand(choice) {
    switch (choice) {
        case ("rock"): return "<img src=\"resources/hand-fist-solid.svg\">";
        case ("paper"): return "<img src=\"resources/hand-solid.svg\">";
        case ("scissors"): return "<img src=\"resources/hand-peace-solid.svg\">";
    }
}

function checkScore() {
    if (playerScore == 5 || computerScore == 5) {
        rock.removeEventListener("click", chooseRock);
        paper.removeEventListener("click", choosePaper);
        scissors.removeEventListener("click", chooseScissors);
        roundStatus.style.display = "block";
        gameEnded = true;
        if (playerScore == 5) {
            roundStatus.textContent = "You won the game!";
        } if (computerScore == 5) {
            roundStatus.textContent = "You lost the game!";
        }
    }
}

document.getElementById('reset').addEventListener('click', function() {
    playerScore = 0;
    playerScoreDisplay.innerHTML = '0';
    computerScore = 0;
    computerScoreDisplay.innerHTML = '0';
    roundResult.textContent = "Ready to play?";
    roundStatus.style.display = 'block';
    roundStatus.textContent = "Use the buttons on the right to make your move!";
    playerHand.innerHTML = "<img src=\"resources/question-solid.svg\">";
    computerHand.innerHTML = "<img src=\"resources/question-solid.svg\">";
    if (gameEnded == true) {
        document.getElementById('rock').addEventListener('click', chooseRock);
        document.getElementById('paper').addEventListener('click', choosePaper);
        document.getElementById('scissors').addEventListener('click', chooseScissors);
        gameEnded = false;
    }
})