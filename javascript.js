function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
        let compChoice = array[Math.floor(Math.random()*3)];
        return compChoice;
}
function game() {
   function playRound() {
      const playerSelection = prompt("rock, paper, scissors?").toLowerCase();
      const computerSelection = getComputerChoice();
         if ((playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
         //    console.log("Win!");
               playerScore++;
            } else if 
            (playerSelection == computerSelection) {
         //  console.log("Tie!"); 
            } else          
         //   console.log("Lose!");
               computerScore++;
console.log(playerSelection, computerSelection);
console.log(playerScore, computerScore);
   }
playRound();
playRound();
playRound();
playRound();
playRound();
   if (playerScore > computerScore) {
      console.log("Win!");
   } else if (playerScore < computerScore) {
      console.log("Lose!");
   } else
      console.log("Tie!");
}
playerScore=0;
computerScore=0;
game();