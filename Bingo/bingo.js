//BINGO

//1.USERNAME (RETURN)
function username() {
  do {
    user = prompt("What is your username?");
    if (!user) {
      alert(`You need to pick a username.`);
    }
  } while (!user);
  return username;
}

// 1B: Explainer
function introduction() {
  alert(`Welcome to JS Bingo, ${user}.\n
    You'll be assigned a simple bingo card, and we'll proceed to draw numbers until you've crossed out every number of the array.\nPress OK to view your bingo card!`);
}
function introduction2() {
  alert(`The game is about to start, ${user}.\n
      Press OK to draft your first number!`);
}

//2.BINGO CARD + displayer INCLUDE A FORMATTER
const bingoCard = [1, 2, 3, 4, 5];

function bingoDisplay() {
  console.clear();
  console.log("            ________________________________");
  console.log("          |   B  I  N  G  O     C  A  R  D   |");

  console.log("          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|");
  console.log("          |                                  |");
  console.log(
    `          |     ${bingoCard[0]}     ${bingoCard[1]}     ${bingoCard[2]}     ${bingoCard[3]}     ${bingoCard[4]}    |`
  );
  console.log("          |                                  |");
  console.log("          |__________________________________|");
}
let pickedNumbersArray = [];
function numbersPicked(randomNumber) {
  pickedNumbersArray.push(randomNumber);
}

//3.GENERATE NUMBERS

function randomNumberGenerator() {
  if (pickedNumbersArray.length) {
    alert("Press OK to draft a new number now.");
  }
  numberMinimum = 1;
  numberMaximum = 5;
  randomNumber = Math.round(
    Math.random() * (numberMaximum - numberMinimum) + numberMinimum
  );
  alert(
    `A new number has been drafted!\nAnd the number is... ${randomNumber}!`
  );

  numbersPicked(randomNumber);
  return matchOrNot(randomNumber, bingoCard);
}

//4.MATCH
function matchOrNot(randomNumber, bingoCard) {
  if (bingoCard.includes(randomNumber)) {
    alert(
      `Congratulations!\nNumber ${randomNumber} will now be crossed out of your card!`
    );
    bingoCard.splice(bingoCard.indexOf(randomNumber), 1, "X");
    bingoDisplay();
    callLine(bingoCard);
  }
}

//6.LÍNEA!
let done;
function callLine(bingoCard) {
  if (
    bingoCard[0] === "X" &&
    bingoCard[1] === "X" &&
    bingoCard[2] === "X" &&
    bingoCard[3] === "X" &&
    bingoCard[4] === "X"
  ) {
    console.log("Bingo!");
    bingo();
    return (done = "Done");
  }
}

function bingo() {
  alert(`Congratulations, ${user}!\nYou called BINGO!!!!`);
}
//7.THANKS

function thanks() {
  alert(`Thanks for playing JS Bingo, ${user}.\nHAVE A NICE DAY!`);
}

//8 FLOW

function start() {
  username();
  introduction();
  bingoDisplay();
  introduction2();
  do {
    randomNumberGenerator();
  } while (done !== "Done");
  thanks();
}
start();
