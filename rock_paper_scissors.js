function playGame(numRounds) {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let i = 0; i < numRounds; i++) {
        console.log("Round " + (i+1))
        let winner = playRound(getPlayerChoice(), getComputerChoice());

        if (winner == "Player") {
            playerScore++;
        } else if (winner == "Computer") {
            computerScore++;
        } else {
            ties++;
        }
    }

    console.log("Overall score. Player: " + playerScore + ". Computer: " + computerScore + ". Ties: " + ties + ".");

    if (playerScore > computerScore) {
        return("You are the overall winner!")
    } else if (computerScore > playerScore) {
        return("Computer is the overall winner.")
    } else {
        return("You tied.")
    }

}

function playRound(playerAns, computerAns) {
    let winner;

    console.log("Computer chose " + computerAns + ". You chose " + playerAns + ".")
    if (playerAns == "rock" && computerAns == "scissors" ||
        playerAns == "paper" && computerAns == "rock" ||
        playerAns == "scissors" && computerAns == "paper") {
        
        console.log("You win!");
        winner = "Player";

    } else if (playerAns == computerAns) {
        console.log("It's a tie.");
        winner = "Tie";
    } else {
        console.log("Computer wins.");
        winner = "Computer";
    }
    return winner;
}

function getPlayerChoice() {
    let playerAns = prompt("Enter 'Rock', 'Paper', or 'Scissors'.", "Choice")
    playerAns = playerAns.toLowerCase();
    return playerAns;
}

function getComputerChoice() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(3);
    const numChoice = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    let ans;

    switch(numChoice) {
        case 1:
            ans = "rock";
            break;
        case 2:
            ans = "paper";
            break;
        case 3:
            ans = "scissors";
            break;
    };
    return ans;
}