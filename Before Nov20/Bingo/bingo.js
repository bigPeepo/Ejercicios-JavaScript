const username = () => {
  do {
    user = prompt("What is your username?");
    if (!user) {
      alert(`You need to pick a username.`);
    }
  } while (!user);
  return username;
};

const introduction = () => {
  alert(`Welcome to JS Bingo, ${user}.\n\nYou will need to open the console viewer to play this game.\n\n
You'll be assigned a simple bingo card, and we'll proceed to draw numbers until you've crossed out every number of the array.\n\n
Press OK to view your bingo card!`);
};

const introduction2 = () => {
  alert(`The game is about to start, ${user}.\n
Press OK to draft your first number!`);
};

const bingoCard = [1, 2, 3, 4, 5];

const bingoDisplay = () => {
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
};
let pickedNumbersArray = [];
function numbersPicked(randomNumber) {
  pickedNumbersArray.push(randomNumber);
}

const randomNumberGenerator = () => {
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
};

const matchOrNot = (randomNumber, bingoCard) => {
  if (bingoCard.includes(randomNumber)) {
    alert(
      `Congratulations!\nNumber ${randomNumber} will now be crossed out of your card!`
    );
    bingoCard.splice(bingoCard.indexOf(randomNumber), 1, "X");
    bingoDisplay();
    callLine(bingoCard);
  }
};

let done;
const callLine = (bingoCard) => {
  if (
    bingoCard[0] === "X" &&
    bingoCard[1] === "X" &&
    bingoCard[2] === "X" &&
    bingoCard[3] === "X" &&
    bingoCard[4] === "X"
  ) {
    bingo();
    return (done = "Done");
  }
};

const bingo = () => alert(`Congratulations, ${user}!\n\nYou called BINGO!!!!`);

const thanks = () =>
  alert(`Thanks for playing JS Bingo, ${user}.\nHAVE A NICE DAY!`);

const start = () => {
  username();
  introduction();
  bingoDisplay();
  introduction2();
  do {
    randomNumberGenerator();
  } while (done !== "Done");
  thanks();
};

start();
