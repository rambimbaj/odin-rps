function getComputerChoice() {
  const array = ["rock", "paper", "scissors"];
  let compChoice = array[Math.floor(Math.random() * 3)];
  return compChoice;
}
function game(rounds) {
  function playRound(selection) {
    const playerSelection = selection;
    const computerSelection = getComputerChoice();
    if (
      (playerSelection == "rock" && computerSelection == "scissors") ||
      (playerSelection == "paper" && computerSelection == "rock") ||
      (playerSelection == "scissors" && computerSelection == "paper")
    ) {
      playerScore++;
    } else if (playerSelection == computerSelection) {
    } else computerScore++;
    const choice = document.createElement("div");
    choice.innerText =
      "Player chose " +
      playerSelection +
      ".. " +
      "Bot chose " +
      computerSelection +
      "..";
    document.body.appendChild(choice);
    const score = document.createElement("div");
    score.innerText = "Score: " + playerScore + " - " + computerScore;
    document.body.appendChild(score);
    const result = document.createElement("div");
    if (playerScore == rounds) {
      result.innerText = "Win!";
      document.body.appendChild(result);
    } else if (computerScore == rounds) {
      result.innerText = "Lose!";
      document.body.appendChild(result);
    }
    if (playerScore == rounds || computerScore == rounds) {
      document.getElementById("rock").disabled = true;
      document.getElementById("paper").disabled = true;
      document.getElementById("scissors").disabled = true;
      const newGame = document.createElement("button");
      newGame.setAttribute("id", "newGame");
      newGame.innerText = "Play Again!";
      document.body.appendChild(newGame);
      document.getElementById("newGame").addEventListener("click", function () {
        location.reload();
      });
    }
  }
  document.querySelector("#rock").addEventListener("click", function () {
    playRound("rock");
  });
  document.querySelector("#paper").addEventListener("click", function () {
    playRound("paper");
  });
  document.querySelector("#scissors").addEventListener("click", function () {
    playRound("scissors");
  });
}
playerScore = 0;
computerScore = 0;
game(3);
