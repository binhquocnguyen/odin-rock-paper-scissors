const body = document.body;
const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');
const player = document.querySelector('.player-score');
const computer = document.querySelector('.computer-score');
const displayWinner = document.querySelector('.winner');
const btnReset = document.createElement('button');
btnReset.textContent = 'Play Again!';

let playerSelection = '';
let computerSelection = '';
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;

btnRock.addEventListener('click', () => {
    playerSelection = "rock";   
    computerSelection = getComputerChoice();
    roundWinner = playRound(playerSelection, computerSelection);
    countPoints(roundWinner);
    gameWinner(playerScore, computerScore, playAgain);
});

btnPaper.addEventListener('click', () => {
    playerSelection = "paper";   
    computerSelection = getComputerChoice();
    roundWinner = playRound(playerSelection, computerSelection);
    countPoints(roundWinner);
    gameWinner(playerScore, computerScore, playAgain);
});

btnScissors.addEventListener('click', () => {
    playerSelection = "scissors";   
    computerSelection = getComputerChoice();
    roundWinner = playRound(playerSelection, computerSelection);
    countPoints(roundWinner);
    gameWinner(playerScore, computerScore, playAgain);
});

function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
    /* getComputerChoice():
    1: rock
    2: paper
    3: scissors 
    */
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            if (computerSelection == 1) {
                displayWinner.textContent = "It's a Draw! Rock equals Rock";
                return "Draw";
            } else if (computerSelection == 2) {
                displayWinner.textContent = "You Lose! Paper beats Rock";
                return "You Lose";
            } else if (computerSelection == 3) {
                displayWinner.textContent = "You Win! Rock beats Scissors";
                return "You Win";
            }
        case "paper":
            if (computerSelection == 1) {
                displayWinner.textContent = "You Win! Paper beats Rock";
                return "You Win";
            } else if (computerSelection == 2) {
                displayWinner.textContent = "It's a Draw! Paper equals Paper";
                return "Draw";
            } else if (computerSelection == 3) {
                displayWinner.textContent = "You Lose! Scissors beats Paper";
                return "You Lose";
            }
        case "scissors":
            if (computerSelection == 1) {
                displayWinner.textContent = "You Lose! Rock beats Scissors";
                return "You Lose";
            } else if (computerSelection == 2) {
                displayWinner.textContent = "You Win! Scissors beats Paper";
                return "You Win";
            } else if (computerSelection == 3) {
                displayWinner.textContent = "It's a Draw! Scissors equals Scissors";
                return "Draw";
            }
    }
}

function countPoints(roundWinner) {
    switch (roundWinner) {
        //player wins
        case "You Win":
            playerScore++;
            player.textContent = playerScore;
            break;
        //computer wins
        case "You Lose":
            computerScore++;
            computer.textContent = computerScore;
            break;
        //draw
        case "Draw":
            break;
    }
}

function gameWinner(playerScore, computerScore, playAgain) {
    if (playerScore >= 5) {
        displayWinner.textContent = "You WIN the game!"; 
        console.log("WIN");
        playAgain();
    } else if (computerScore >= 5) {
        displayWinner.textContent = "You LOSE the game!";
        console.log("LOSE");
        playAgain();
    }
}

function playAgain() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissors.disabled = true;

    body.appendChild(btnReset);
    btnReset.addEventListener("click", () => {
        location.reload();
    });
}

/* Note: I try reset scores inside gameWinner() but it cannot work. The scores reach 5, reset to 0, and cannot count after that. Are there any method to fix this? */