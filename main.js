console.log("hi");
// function for user to choose input
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("error, error, error: please choose rock, paper or scissors");
  }
};
// get the computers choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else if (randomNumber === 2) {
    return "scissors";
  }
};
// Determine a winner between user & computer
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "A tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer has won!";
    } else {
      return "You won!";
    }
  }
  // if user chooses paper, scissors or bomb tests what outcome depending on comp. choice
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer has won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer has won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "You won!";
  }
};
// runs playGame and writes results in html
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);
  document.getElementById("result").innerHTML = `You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`;
};