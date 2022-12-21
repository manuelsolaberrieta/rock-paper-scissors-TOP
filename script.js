function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
const playerPointsTag = document.querySelector("#player-points");
const PCPointsTag = document.querySelector("#pc-points");
const tiesTag = document.querySelector("#ties");
const resultTag = document.querySelector("#result");

function playRound(playerChoice, computerChoice) {
  let playerPoints = parseInt(playerPointsTag.textContent);
  let computerPoints = parseInt(PCPointsTag.textContent);
  let ties = parseInt(tiesTag.textContent);
  if (playerChoice == "rock") {
    if (computerChoice == "rock") {
      resultTag.textContent = "It's a tie!";
      tiesTag.textContent = `${(ties += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    } else if (computerChoice == "paper") {
      resultTag.textContent = "You lose! Paper beats Rock";
      PCPointsTag.textContent = `${(computerPoints += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    } else {
      resultTag.textContent = "You win! Rock beats Scissors";
      playerPointsTag.textContent = `${(playerPoints += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    }
  } else if (playerChoice == "paper") {
    if (computerChoice == "paper") {
      resultTag.textContent = "It's a tie!";
      tiesTag.textContent = `${(ties += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    } else if (computerChoice == "rock") {
      resultTag.textContent = "You win! Paper beats Rock";
      playerPointsTag.textContent = `${(playerPoints += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    } else {
      resultTag.textContent = "You lose! Scissors beats Paper";
      PCPointsTag.textContent = `${(computerPoints += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    }
  } else if (playerChoice == "scissors") {
    if (computerChoice == "scissors") {
      resultTag.textContent = "It's a tie!";
      tiesTag.textContent = `${(ties += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    } else if (computerChoice == "rock") {
      resultTag.textContent = "You lose! Rock beats Scissors";
      PCPointsTag.textContent = `${(computerPoints += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    } else {
      resultTag.textContent = "You win! Scissors beats Paper";
      playerPointsTag.textContent = `${(playerPoints += 1)}`;
      calculatePoints(playerPoints, computerPoints);
    }
  }
}

function calculatePoints(pP, cP) {
  if (pP < 5 && cP < 5) {
    return;
  } else {
    defineWinner(pP, cP);
  }
}
function defineWinner(pP, cP) {
  let msg = "";
  if (pP > cP) {
    msg = `You win the game ${pP} to ${cP}!`;
  } else if (pP < cP) {
    msg = `You lose the game ${cP} to ${pP}!`;
  } else {
    msg = `You tie the game ${cP} to ${pP}!`;
  }
  showMessage(msg);
}
function showMessage(msg) {
  const winner = document.createElement("h1");
  winner.textContent = msg;
  const gameTags = document.getElementsByClassName("game");
  for (let i = 0; i < gameTags.length; i++) {
    gameTags[i].style.display = "none";
  }
  document.getElementById("result").textContent = msg;
}
const selectionButtons = document.querySelectorAll(".selection");
selectionButtons.forEach((element) => {
  element.addEventListener("click", () =>
    playRound(element.textContent.toLowerCase(), getComputerChoice())
  );
});
