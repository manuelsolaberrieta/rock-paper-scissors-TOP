const choices = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}
function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      return "It's a tie!";
    } else if (computerChoice == "paper") {
      return "You lose! Paper beats Rock";
    } else {
      return "You win! Rock beats Scissors";
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "paper") {
      return "It's a tie!";
    } else if (computerChoice == "rock") {
      return "You win! Paper beats Rock";
    } else {
      return "You lose! Scissors beats Paper";
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "scissors") {
      return "It's a tie!";
    } else if (computerChoice == "rock") {
      return "You lose! Rock beats Scissors";
    } else {
      return "You win! Scissors beats Paper";
    }
  }
}
function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    if (result == "It's a tie!") {
      console.log(result);
    } else if (result == "You win! Paper beats Rock") {
      console.log(result);
      playerPoints += 1;
    } else if (result == "You win! Rock beats Scissors") {
      console.log(result);
      playerPoints += 1;
    } else if (result == "You win! Scissors beats Paper") {
      console.log(result);
      playerPoints += 1;
    } else if (result == "You lose! Paper beats Rock") {
      console.log(result);
      computerPoints += 1;
    } else if (result == "You lose! Scissors beats Paper") {
      console.log(result);
      computerPoints += 1;
    } else if (result == "You lose! Rock beats Scissors") {
      console.log(result);
      computerPoints += 1;
    }
  }
  console.log(calculatePoints(playerPoints, computerPoints));
}
function calculatePoints(pP, cP) {
  let msg = "";
  if (pP > cP) {
    msg = `You win the game ${pP} to ${cP}!`;
  } else if (pP < cP) {
    msg = `You lose the game ${cP} to ${pP}!`;
  } else {
    msg = `You tie the game ${cP} to ${pP}!`;
  }
  return msg;
}
game();
