const username = () => {
  let user;

  do {
    user = prompt("What is your username?");
    if (!user) {
      alert(`You need to pick a username.`);
    }
  } while (!user);
  return user;
};

let user;
let randomNumber;
let bingoCard = [];
let finished = false;
let line1Completed = false;
let line2Completed = false;
let line3Completed = false;
let counter = 0;
let score = 0;
let scoreboard = [];
let unhappyAboutBingoCard = true;
const NUMBER_MINIMUM = 1;
const NUMBER_MAXIMUM = 50;
let pickedNumbersArray = [];

const introduction = () => {
  alert(
    `Welcome to JS Bingo PRO, ${user}.\n\nYou will need to open the console viewer to play this game.\n\nPress OK to be assigned a bingo card!`
  );
};

const introduction2 = () => {
  alert(`The game is about to start, ${user}.\n
      Press OK to draft your first number!`);
};

const randomNumbersGenerator = () => {
  randomNumber = Math.round(
    Math.random() * (NUMBER_MAXIMUM - NUMBER_MINIMUM) + NUMBER_MINIMUM
  );

  return pad(randomNumber);
};

const clearStatus = () => {
  finished = false;
  unhappyAboutBingoCard = true;
  pickedNumbersArray = [];
  bingoCard = [];
  line1Completed = false;
  line2Completed = false;
  line3Completed = false;
  counter = 0;
  score = 0;
};

const compareNumbers = (a, b) => {
  return a - b;
};

const generateBingoCard = () => {
  clearStatus();

  do {
    randomNumbersGenerator();
    if (!bingoCard.includes(pad(randomNumber))) {
      bingoCard.push(pad(randomNumber));
    }
  } while (bingoCard.length < 15);

  bingoCard.sort(compareNumbers);

  return bingoCardDisplayer();
};

const pad = (num) => {
  return (num < 10 ? "0" : "") + num;
};

const bingoCardDisplayer = () => {
  console.clear();

  console.log("            ________________________________");
  console.log("          |   B  I  N  G  O     C  A  R  D   |");

  console.log("          |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|");
  console.log(
    `          |  ${bingoCard[0]}     ${bingoCard[1]}     ${bingoCard[2]}     ${bingoCard[3]}     ${bingoCard[4]}  |`
  );
  console.log(
    `          |  ${bingoCard[5]}     ${bingoCard[6]}     ${bingoCard[7]}     ${bingoCard[8]}     ${bingoCard[9]}  |`
  );
  console.log(
    `          |  ${bingoCard[10]}     ${bingoCard[11]}     ${bingoCard[12]}     ${bingoCard[13]}     ${bingoCard[14]}  |`
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

const numbersPicked = (randomNumber) => {
  pickedNumbersArray.push(randomNumber);
  pickedNumbersArray.sort(compareNumbers);
};

const lotteryWheel = () => {
  if (pickedNumbersArray.length) {
    alert("Press OK to draft a new number now.");
  }

  do {
    randomNumbersGenerator();
  } while (pickedNumbersArray.includes(randomNumber));

  numbersPicked(randomNumber);

  alert(
    `A new number has been drafted!\nAnd the number is... ${randomNumber}!\n\n\nSo far, you've drafted the following numbers\n${pickedNumbersArray}`
  );

  return matchOrNot(randomNumber, bingoCard);
};

const matchOrNot = (num, bingoCard) => {
  const paddedNumber = pad(num);

  if (bingoCard.includes(paddedNumber)) {
    alert(`Good!\nNumber ${num} will now be crossed out of your card!`);
    bingoCard.splice(bingoCard.indexOf(paddedNumber), 1, "❌");
    bingoCardDisplayer();
    checkForLine();
  }
};

const checkForLine = () => {
  const lineOne = bingoCard.slice(0, 5);
  const lineTwo = bingoCard.slice(5, 10);
  const lineThree = bingoCard.slice(10, 15);

  if (lineOne.every((number) => number === "❌") && line1Completed === false) {
    line1Completed = true;
    lineOrBingo();
  }
  if (lineTwo.every((number) => number === "❌") && line2Completed === false) {
    line2Completed = true;
    lineOrBingo();
  }
  if (
    lineThree.every((number) => number === "❌") &&
    line3Completed === false
  ) {
    line3Completed = true;
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
