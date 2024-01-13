function getComputerChoice() {
  const array = ["rock", "paper", "scissors"];
  let compChoice = array[Math.floor(Math.random() * 3)];
  return compChoice;
}
function game() {
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
      "Player chose: " +
      playerSelection +
      "! " +
      "Computer chose: " +
      computerSelection +
      "!";
    document.body.appendChild(choice);

    const score = document.createElement("div");
    score.innerText =
      "Current score: " + playerScore + " - " + computerScore;
    document.body.appendChild(score);

    console.log(playerSelection, computerSelection);
    console.log(playerScore, computerScore);
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

  if (playerScore > computerScore) {
    console.log("Win!");
  } else if (playerScore < computerScore) {
    console.log("Lose!");
  } else console.log("Tie!");
}
playerScore = 0;
computerScore = 0;
game();
