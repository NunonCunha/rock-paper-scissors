let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorButton = document.getElementById("scissor");

rockButton.onclick = () => console.log("rock button");

const computerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissor";
  }
};
