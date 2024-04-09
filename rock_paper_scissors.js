function playOneRound() {
    let playerAns = prompt("Enter 'Rock', 'Paper', or 'Scissors'.", "Choice")
    playerAns = playerAns.toLowerCase();
    let computerAns = getComputerChoice();
    let winner;

    console.log("Computer chose " + computerAns + ". You chose " + playerAns + ".")
    if (playerAns == "rock" && computerAns == "scissors" ||
        playerAns == "paper" && computerAns == "rock" ||
        playerAns == "scissors" && computerAns == "paper") {
        
        return("You win!");

    } else if (playerAns == computerAns) {
        return("It's a tie.");
    } else {
        return("Computer wins.");
    }
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