let buttons = document.querySelectorAll(".game-button");
let result = document.getElementById("result");
let playerPoints = document.getElementById("playerPoints");
let computerPoints = document.getElementById("computerPoints");
let clear = document.getElementById("clear");

const totalScore = { computerScore: 0, playerScore: 0 };

//function to random the computer choice and return that choice
const computerChoice = () => {
  const cpChoice = ["Rock", "Paper", "Scissor"];
  let ramdomNumber = Math.floor(Math.random() * 3);
  return cpChoice[ramdomNumber];
};

//test all the user possibilities to win
const gameLogic = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return (score = 0);
  } else if (userChoice == "Rock" && computerChoice == "Scissor") {
    return (score = 1);
  } else if (userChoice == "Paper" && computerChoice == "Rock") {
    return (score = 1);
  } else if (userChoice == "Scissor" && computerChoice == "Paper") {
    return (score = 1);
  } else {
    return (score = -1);
  }
};

const onClickButton = (playerCoice) => {
  const compChoice = computerChoice();
  const score = gameLogic(playerCoice, compChoice);
  totalScore.playerScore += score;
  totalScore.computerScore -= score;
  showResult(score, playerCoice, compChoice);
};

const showResult = (score, playerChoice, computerChoice) => {
  if (score == 1) {
    result.innerText = `You Won!! ${playerChoice} beats ${computerChoice}`;
  } else if (score == -1) {
    result.textContent = `You Lost!! ${computerChoice} beats ${playerChoice}`;
  } else {
    result.textContent = `Its a Draw!! ${playerChoice} beats ${computerChoice}`;
  }
  playerPoints.innerText = `Player Ponits: ${totalScore.playerScore}`;
  computerPoints.innerText = `Computer Points: ${totalScore.computerScore}`;
};

const clearGame = () => {
  score = 0;
  result.textContent = "";
  playerPoints.textContent = "Player Points: 0";
  computerPoints.textContent = "Computer Points: 0";
};

clear.onclick = () => clearGame();

const playGame = () => {
  buttons.forEach((button) => {
    button.onclick = () => onClickButton(button.value);
  });
};

playGame();
