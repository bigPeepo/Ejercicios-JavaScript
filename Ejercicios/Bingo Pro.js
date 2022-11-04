import { username } from "../username.js";

let user;

const introduction = () => {
  alert(
    `Welcome to JS Bingo PRO, ${user}.\n\nYou will need to open the console viewer to play this game.\n\nPress OK to be assigned a bingo card!`
  );
};

const introduction2 = () => {
  alert(`The game is about to start, ${user}.\n
      Press OK to draft your first number!`);
};

let randomNumber;

const randomNumbersGenerator = () => {
  const numberMinimum = 1;
  const numberMaximum = 50;

  randomNumber = Math.round(
    Math.random() * (numberMaximum - numberMinimum) + numberMinimum
  );

  return randomNumber;
};

let bingoCard = [];
const generateBingoCard = () => {
  finished = false;
  unhappyAboutBingoCard = true;
  pickedNumbersArray = [];
  bingoCard = [];
  line1 = false;
  line2 = false;
  line3 = false;
  counter = 0;
  score = 0;

  if (bingoCard) {
    bingoCard = [];
  }
  do {
    randomNumbersGenerator();
    if (!bingoCard.includes(randomNumber)) {
      bingoCard.push(randomNumber);
    }
  } while (bingoCard.length < 15);
  bingoCard.sort(function (a, b) {
    return a - b;
  });
  return bingoCardDisplayer();
};

const pad = (num) => {
  return (num < 10 ? "0" : "") + num;
};

let unhappyAboutBingoCard = true;
const bingoCardDisplayer = () => {
  console.clear();
  console.log("            ________________________________");
  console.log("          |   B  I  N  G  O     C  A  R  D   |");

  console.log("          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|");
  console.log(
    `          |  ${pad(bingoCard[0])}     ${pad(bingoCard[1])}     ${pad(
      bingoCard[2]
    )}     ${pad(bingoCard[3])}     ${pad(bingoCard[4])}  |`
  );
  console.log(
    `          |  ${pad(bingoCard[5])}     ${pad(bingoCard[6])}     ${pad(
      bingoCard[7]
    )}     ${pad(bingoCard[8])}     ${pad(bingoCard[9])}  |`
  );
  console.log(
    `          |  ${pad(bingoCard[10])}     ${pad(bingoCard[11])}     ${pad(
      bingoCard[12]
    )}     ${pad(bingoCard[13])}     ${pad(bingoCard[14])}  |`
  );
  console.log("          |__________________________________|");
  console.log(`\n\nYour current Score is ${score} points.`);
  if (unhappyAboutBingoCard) {
    changeBingoCard();
  }
};

const changeBingoCard = () => {
  if (
    !confirm(
      "This is your bingo card!!\n\nDo you like it or would you like to change it?\n\nPress Cancel to change it, and OK to keep it and start the game."
    )
  ) {
    return generateBingoCard();
  } else {
    unhappyAboutBingoCard = false;
  }
};

let pickedNumbersArray = [];
const numbersPicked = (randomNumber) => {
  pickedNumbersArray.push(randomNumber);
  pickedNumbersArray.sort(function (a, b) {
    return a - b;
  });
};

const lotteryWheel = () => {
  if (pickedNumbersArray.length) {
    alert("Press OK to draft a new number now.");
  }
  do {
    randomNumbersGenerator();
  } while (pickedNumbersArray.includes(pad(randomNumber))); //no va. se repiten
  numbersPicked(pad(randomNumber));

  alert(
    `A new number has been drafted!\nAnd the number is... ${pad(
      randomNumber
    )}!\n\n\nSo far, you've drafted the following numbers\n${pickedNumbersArray}`
  );

  return matchOrNot(randomNumber, bingoCard);
};

const matchOrNot = (num, bingoCard) => {
  if (bingoCard.includes(num)) {
    alert(`Good!\nNumber ${num} will now be crossed out of your card!`);
    bingoCard.splice(bingoCard.indexOf(num), 1, "❌");
    bingoCardDisplayer();
    checkForLine();
  }
};

let finished = false;
let line1 = false;
let line2 = false;
let line3 = false;

const checkForLine = () => {
  if (
    bingoCard[0] === "❌" &&
    bingoCard[1] === "❌" &&
    bingoCard[2] === "❌" &&
    bingoCard[3] === "❌" &&
    bingoCard[4] === "❌" &&
    line1 === false
  ) {
    line1 = true;
    lineOrBingo();
  }
  if (
    bingoCard[5] === "❌" &&
    bingoCard[6] === "❌" &&
    bingoCard[7] === "❌" &&
    bingoCard[8] === "❌" &&
    bingoCard[9] === "❌" &&
    line2 === false
  ) {
    line2 = true;
    lineOrBingo();
  }
  if (
    bingoCard[10] === "❌" &&
    bingoCard[11] === "❌" &&
    bingoCard[12] === "❌" &&
    bingoCard[13] === "❌" &&
    bingoCard[14] === "❌" &&
    line3 === false
  ) {
    line3 = true;
    lineOrBingo();
  }
};

const line = () => alert(`Congratulations, ${user}!\n\nYou called LINE!`);

const bingo = () => {
  let scoreboardPannel = [];
  finished = true;
  alert(
    `Congratulations, ${user}!\n\nYOU CALLED BINGO!!!!\n\nYour Total SCORE is ${score} points.`
  );
  if (scoreboard.length > 1) {
    alert(`These are the SCORES you obtained:`);
    for (let i = 0; i < scoreboard.length; i++) {
      scoreboardPannel.push(
        `Round ${i + 1} Total Score: ${scoreboard[i]} points.\n`
      );
    }
    alert(scoreboardPannel.join(" "));
  }
  return replay();
};

let counter = 0;
const lineOrBingo = () => {
  counter++;
  scoreCounter();
  if (counter === 3) {
    scoreboard.push(score);
    return bingo();
  } else {
    return line();
  }
};

let score = 0;
let scoreboard = [];
const scoreCounter = () => {
  score = Math.round(score + (counter * 10000) / pickedNumbersArray.length);
  bingoCardDisplayer();
};

const thanks = () => {
  alert(`Thanks for playing JS Bingo, ${user}.\nHAVE A NICE DAY!`);
};

const replay = () => {
  if (confirm(`Would you like to play another round, ${user}?`)) {
    return gameFlow();
  }
  return thanks();
};

const gameFlow = () => {
  generateBingoCard();
  introduction2();
  do {
    lotteryWheel();
  } while (!finished);
};

const start = () => {
  user = username();
  introduction();
  gameFlow();
};

start();
