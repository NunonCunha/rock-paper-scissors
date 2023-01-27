let rockButton = document.getElementById("rock").value;
let paperButton = document.getElementById("paper").value;
let scissorButton = document.getElementById("scissor").value;

const game = (userChoice, randomChoice) => {
  if (userChoice > randomChoice) {
    console.log(userChoice, " ", randomChoice);
    console.log("user");
  } else if (userChoice < randomChoice) {
    console.log(userChoice, " ", randomChoice);
    console.log("computer");
  } else {
    console.log(userChoice, " ", randomChoice);
    console.log("equal");
  }
};

console.log({ rockButton }, { paperButton }, { scissorButton });
