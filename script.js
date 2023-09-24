function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}
/* getComputerChoice():
1: rock
2: paper
3: scissors 
*/

function playRound(playerSelection, computerSelection) {
    let playerSelectionLower = playerSelection.toLowerCase();
    switch (playerSelectionLower) {
        case "rock":
            if (computerSelection == 1) {
                return "It's a Draw! Rock equals Rock";
            } else if (computerSelection == 2) {
                return "You Lose! Paper beats Rock";
            } else if (computerSelection == 3) {
                return "You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if (computerSelection == 1) {
                return "You Win! Paper beats Rock";
            } else if (computerSelection == 2) {
                return "It's a Draw! Paper equals Paper";
            } else if (computerSelection == 3) {
                return "You Lose! Scissors beats Paper";
            }
            break;
        case "scissors":
            if (computerSelection == 1) {
                return "You Lose! Rock beats Scissors";
            } else if (computerSelection == 2) {
                return "You Win! Scissors beats Paper";
            } else if (computerSelection == 3) {
                return "It's a Draw! Scissors equals Scissors";
            }
            break;
    }
}

function countPoints(result) {
    switch (result) {
        //player wins
        case "You Win! Rock beats Scissors":
        case "You Win! Paper beats Rock":
        case "You Win! Scissors beats Paper":
            return "player";
        //computer wins
        case "You Lose! Paper beats Rock":
        case "You Lose! Scissors beats Paper":
        case "You Lose! Rock beats Scissors":
            return "computer";
        //draw
        case "It's a Draw! Rock equals Rock":
        case "It's a Draw! Paper equals Paper":
        case "It's a Draw! Scissors equals Scissors":
            return "draw";
    }
}

function selectWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log("You WIN the game!");
    } else if (playerScore < computerScore) {
        console.log("You LOSE the game!");
    } else {
        console.log("It's a TIE!");
    }
}

function game(getComputerChoice, playRound, countPoints, selectWinner) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) { //Play for 5 rounds
        console.log("Round " + i + ":");

        let playerSelection = prompt("Select Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();

        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        //Add score to the winner of the round
        switch ( countPoints(result) ) {
            case "player":
                playerScore++;
                break;
            case "computer":
                computerScore++;
                break;
            case "draw":
                break;
        }
    }

    selectWinner(playerScore, computerScore);
}

game(getComputerChoice, playRound, countPoints, selectWinner); 