const buttonContainer = document.querySelector(".button-container");
const buttons = document.querySelector(".buttons");
const selectButton = document.querySelectorAll(".btn");
const scoreTable = document.querySelector(".div-score");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const tieScoreText = document.querySelector(".tie-score");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

selectButton.forEach((btn) => {
    btn.addEventListener("click", () => {
        playRound(btn.textContent, getComputerChoice());
    });
});

function playRound(playerAns, computerAns) {
    const newLine = document.createElement("p");
    playerAns = playerAns.toLowerCase();
    newLine.textContent = "Computer chose " + computerAns + ". You chose " + playerAns + ".";
    console.log("Computer chose " + computerAns + ". You chose " + playerAns + ".");

    if (playerAns == "rock" && computerAns == "scissors" ||
        playerAns == "paper" && computerAns == "rock" ||
        playerAns == "scissors" && computerAns == "paper") {

        newLine.textContent += " You win!"
        playerScore++;

    } else if (playerAns == computerAns) {

        newLine.textContent += " It's a tie."
        tieScore++;

    } else {

        newLine.textContent += " Computer wins."
        computerScore++;
    };

    scoreTable.appendChild(newLine);

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    tieScoreText.textContent = tieScore;

    if (playerScore + computerScore + tieScore >= 5) {
        const lastLine = document.createElement("p");
        lastLine.textContent = "Game over! "

        if (playerScore > computerScore) {
            lastLine.textContent += ("You are the overall winner!");
        } else if (computerScore > playerScore) {
            lastLine.textContent += ("Computer is the overall winner!");
        } else {
            lastLine.textContent += ("You tied.");
        }
        scoreTable.appendChild(lastLine);

        buttons.remove();

        const resetButton = document.createElement("button");
        resetButton.textContent = "Reset";
        resetButton.addEventListener("click", () => {
            location.reload();
        });
        buttonContainer.appendChild(resetButton);
    };
};

function getPlayerChoice() {
    let playerAns = prompt("Enter 'Rock', 'Paper', or 'Scissors'.", "Choice")
    playerAns = playerAns.toLowerCase();
    return playerAns;
};

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
};

/*
function playGame(numRounds) {
    let playerScore = 0;
    let computerScore = 0;
    let ties = 0;

    for (let i = 0; i < numRounds; i++) {
        console.log("Round " + (i+1));
        const newItem = document.createElement("li");
        newItem.textContent = "Round " + (i+1);

        let winner = playRound(getPlayerChoice(), getComputerChoice());
        newItem.textContent += " winner = " + winner;

        if (winner == "Player") {
            playerScore++;
        } else if (winner == "Computer") {
            computerScore++;
        } else {
            ties++;
        };

        scoreList.appendChild(newItem);
    };

    console.log("Overall score. Player: " + playerScore + ". Computer: " + computerScore + ". Ties: " + ties + ".");

    if (playerScore > computerScore) {
        return("You are the overall winner!")
    } else if (computerScore > playerScore) {
        return("Computer is the overall winner.")
    } else {
        return("You tied.")
    }

}
*/