//BINGO PRO

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
  alert(
    `Welcome to JS Bingo PRO, ${user}.\nYou will need to open the console viewer to play this game.\nPress OK to be assigned a bingo card!`
  );
}

function introduction2() {
  alert(`The game is about to start, ${user}.\n
      Press OK to draft your first number!`);
}

//2.BINGO CARD + displayer INCLUDE A FORMATTER

function randomNumbersGenerator() {
  numberMinimum = 1;
  numberMaximum = 50;

  randomNumber = Math.round(
    Math.random() * (numberMaximum - numberMinimum) + numberMinimum
  );

  return randomNumber;
}

let bingoCard = [];
function generateBingoCard() {
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
}

function pad(num) {
  // to add a 0 to num < 10
  return (num < 10 ? "0" : "") + num;
}

let unhappyAboutBingoCard = true;

function bingoCardDisplayer() {
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
  if (unhappyAboutBingoCard) {
    changeBingoCard();
  }
}

function changeBingoCard() {
  if (
    !confirm(
      "This is your bingo card!!\nDo you like it or would you like to change it?\n\nPress Cancel to change it, and OK to keep it and start the game."
    )
  ) {
    return generateBingoCard();
  } else {
    unhappyAboutBingoCard = false;
  }
}

let pickedNumbersArray = []; // to keep track of the numbers already drafted

function numbersPicked(randomNumber) {
  pickedNumbersArray.push(randomNumber);
  pickedNumbersArray.sort(function (a, b) {
    return a - b;
  });
}

//3.GENERATE NUMBERS

function lotteryWheel() {
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
}

//4.MATCH
function matchOrNot(num, bingoCard) {
  if (bingoCard.includes(num)) {
    alert(`Good!\nNumber ${num} will now be crossed out of your card!`);
    bingoCard.splice(bingoCard.indexOf(num), 1, "❌");
    bingoCardDisplayer();
    checkForLine();
  }
}

//6.LÍNEA!
let finished = false;
let line1 = false;
let line2 = false;
let line3 = false;

function checkForLine() {
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
}

/* function checkForLine() {
  for(let i=0;i<15;i+5){
    if (i === x || y) {
      continue
    }
   if(
    bingoCard[i] === "❌" &&
    bingoCard[i+1] === "❌" &&
    bingoCard[i+2] === "❌" &&
    bingoCard[i+3] === "❌" &&
    bingoCard[i+4] === "❌" &&
    x !== i &&
    y !==
  ) {
    if(!x) {
      x = i
    }
    if(x) {
      y = i
    }
    return lineOrBingo();
} */

function line() {
  return alert(`Congratulations, ${user}!\nYou called LINE!`);
}

function bingo() {
  finished = true;
  alert(`Congratulations, ${user}!\nYou called BINGO!!!!`);
  return thanks();
}

counter = 0;
function lineOrBingo() {
  counter++;
  if (counter === 3) {
    return bingo();
  } else {
    return line();
  }
}
//7.THANKS

function thanks() {
  alert(`Thanks for playing JS Bingo, ${user}.\nHAVE A NICE DAY!`);
}

//8 FLOW

function start() {
  username();
  introduction();
  generateBingoCard();
  introduction2();
  do {
    lotteryWheel();
  } while (!finished);
}

start();
