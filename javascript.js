function getComputerChoice() {
    const array = ["kő", "papír", "olló"];
        let compChoice = array[Math.floor(Math.random()*3)];
        return compChoice;
}

function playRound() {
      if ((playerSelection == "kő" && computerSelection === "olló") ||
         (playerSelection == "papír" && computerSelection === "kő") ||
         (playerSelection == "olló" && computerSelection === "papír")) {
            console.log("Nyertél!");
         } else if 
            (playerSelection == computerSelection) {
            console.log("Döntetlen!"); 
            } else          
                console.log("Vesztettél!");
         }


const playerSelection = prompt("kő, papír, olló?").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerSelection, computerSelection);
playRound();