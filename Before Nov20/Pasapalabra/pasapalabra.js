import { questions, questions2, questions3 } from "./questions.js";

let currentQuestionDatabase = questions;

const NUMBER_OF_QUESTION_DATABASES = 3;

const SECONDS_ASSIGNED = 300;

let gameCounter = 1;

let objectToEncapsulateRankingMetrics = {};

let rankingSorted = [];

const setDefaultState = () => ({
  user: "",
  randomNumber: 0,
  turnCounter: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
  answerCounter: 0,
  timeAssigned: SECONDS_ASSIGNED * 1000,
  startTime: 0,
  elapsedTime: 0,
  currentTime: 0,
  paused: true,
  intervalId: 0,
  secs: 0,
  answer: "",
  stillPlaying: true,
  objectToEncapsulateSolutionsWrongAnswersAndTurn: {
    example: { solution: "pasapalabra", wrongAnswer: "p̴a̴s̴a̴l̴a̴c̴a̴b̴r̴a̴" },
    a: {},
    b: {},
    c: {},
    d: {},
    e: {},
    f: {},
    g: {},
    h: {},
    i: {},
    j: {},
    k: {},
    l: {},
    m: {},
    n: {},
    o: {},
    p: {},
    q: {},
    r: {},
    s: {},
    t: {},
    u: {},
    v: {},
    w: {},
    x: {},
    y: {},
    z: {},
  },
});

let state = setDefaultState();

const questionDatabaseSwitcher = () => {
  switch (gameCounter % 3) {
    case 1:
      return (currentQuestionDatabase = questions);
      break;
    case 2:
      return (currentQuestionDatabase = questions2);
      break;
    case 0:
      return (currentQuestionDatabase = questions3);
      break;
  }
};

const username = () => {
  if (!state.user) {
    do {
      state.user = prompt("What is your username for this round?");
      if (!state.user) {
        alert(`You need to pick a username.`);
      }
    } while (!state.user);
  }

  return state.user;
};

const turnAdd1 = () => {
  state.turnCounter++;
  if (state.turnCounter >= currentQuestionDatabase.length) {
    state.turnCounter = 0;
  }

  return state.turnCounter;
};

const answeredQuestionsCounter = () => {
  state.answerCounter = 0;

  for (let i = 0; i < currentQuestionDatabase.length; i++) {
    if (currentQuestionDatabase[i].status) {
      state.answerCounter++;
    }
  }

  return state.answerCounter;
};

const skipToNextLetterUnanswered = () => {
  if (state.answerCounter != currentQuestionDatabase.length) {
    do {
      if (!currentQuestionDatabase[state.turnCounter].status) {
        return state.turnCounter;
      }

      turnAdd1();
    } while (currentQuestionDatabase[state.turnCounter].status);

    return state.turnCounter;
  } else {
    endGame();
  }
};

const startTimer = () => {
  if (state.paused) {
    state.paused = false;

    state.startTime = Date.now() - state.elapsedTime;

    state.intervalId = setInterval(updateTime, 1000);
  }
};

const pauseTimer = () => {
  console.clear();
  console.log("Time is state.paused");

  state.paused = true;

  state.elapsedTime = Date.now() - state.startTime;

  clearInterval(state.intervalId);
};

const time0padding = (num) => {
  return (num < 10 && num > 0 ? "0" : "") + num;
};

function updateTime() {
  state.elapsedTime = state.timeAssigned - (Date.now() - state.startTime);

  state.secs = Math.floor(state.elapsedTime / 1000);

  state.secs = time0padding(state.secs);
}

const askAgainIfCancelled = (message) => {
  let value;

  do {
    value = prompt(message);
  } while (value === null);

  return value.toLowerCase().trim();
};

const getLetterFromCounter = (counter) => {
  return currentQuestionDatabase[counter].letter;
};

const getAnswerFromCounter = (counter) => {
  return currentQuestionDatabase[counter].answer;
};

const getQuestionFromCounter = (counter) => {
  return currentQuestionDatabase[counter].question;
};

const questionPrompt = () => {
  state.answer = askAgainIfCancelled(getQuestionFromCounter(state.turnCounter));
};

const checkIfWeCountTheAnswer = () => {
  timeOutOrEnd();
  checkForPasapalabra();
  markLetterAsAnswered();
};

const timeOutOrEnd = () => {
  updateTime();

  if (state.secs <= 0 || state.answer === "end") {
    return endGame();
  }
};

const checkForPasapalabra = () => {
  if (
    state.answer === "pasapalabra" ||
    state.answer === "" ||
    !state.stillPlaying
  ) {
    turnAdd1();
    return;
  }

  isAnswerRightOrWrong();
};

const isAnswerRightOrWrong = () => {
  if (getAnswerFromCounter(state.turnCounter) === state.answer) {
    state.correctAnswers++;

    return alertSolution(true);
  } else {
    state.wrongAnswers++;

    return alertSolution(false);
  }
};

const markLetterAsAnswered = () => {
  if (state.answer === "pasapalabra" || state.answer === "") {
    return;
  } else {
    currentQuestionDatabase[state.turnCounter].status = 1;
    return answeredQuestionsCounter();
  }
};

const alertSolution = (boolean) => {
  if (boolean) {
    alert(
      `Correct!\n\nThe state.answer is "${getAnswerFromCounter(
        state.turnCounter
      )}".`
    );

    storeSolutionInObject();
  }

  if (!boolean) {
    pauseTimer();

    alert(
      `That is wrong... The state.answer we were looking for is "${getAnswerFromCounter(
        state.turnCounter
      )}".`
    );

    storeSolutionInObject();
    storeWrongAnswerInObjects();
  }
};

const storeSolutionInObject = () => {
  state.objectToEncapsulateSolutionsWrongAnswersAndTurn[
    getLetterFromCounter(state.turnCounter)
  ].solution = getAnswerFromCounter(state.turnCounter);
};

const strikethroughDictionary = {
  a: "a̴",
  b: "b̴",
  c: "c̴",
  d: "d̴",
  e: "e̴",
  f: "f̴",
  g: "g̴",
  h: "h̴",
  i: "i̴",
  j: "j̴",
  k: "k̴",
  l: "l̴",
  m: "m̴",
  n: "n̴",
  o: "o̴",
  p: "p̴",
  q: "q̴",
  r: "r̴",
  s: "s̴",
  t: "t̴",
  u: "u̴",
  v: "v̴",
  w: "w̴",
  x: "x̴",
  y: "y̴",
  z: "z̴",
};

const strikethroughThisString = (targetWord) => {
  let strikedthroughConcat = "";
  for (let i = 0; i < targetWord.length; i++) {
    strikedthroughConcat += strikethroughDictionary[targetWord[i]];
  }

  return strikedthroughConcat;
};

const storeWrongAnswerInObjects = () => {
  state.objectToEncapsulateSolutionsWrongAnswersAndTurn[
    getLetterFromCounter(state.turnCounter)
  ].wrongAnswer = strikethroughThisString(state.answer);
};

const dataDisplay = () => {
  addTurnAsVisualCueInObject();
  displayElements();
};

const addTurnAsVisualCueInObject = () => {
  for (let i = 0; i < currentQuestionDatabase.length; i++) {
    if (
      state.objectToEncapsulateSolutionsWrongAnswersAndTurn[
        getLetterFromCounter(i)
      ].turn
    ) {
      delete state.objectToEncapsulateSolutionsWrongAnswersAndTurn[
        getLetterFromCounter(i)
      ].turn;
    }
  }

  state.objectToEncapsulateSolutionsWrongAnswersAndTurn[
    getLetterFromCounter(state.turnCounter)
  ].turn = "⬅";
};

const displayElements = () => {
  console.clear();
  updateTime();
  console.log("Time remaining: " + state.secs + " seconds.");

  console.table(state.objectToEncapsulateSolutionsWrongAnswersAndTurn);
};

function EntryForObjectToEncapsulateRankingMetrics() {
  this.username = state.user;
  this.correctAnswers = state.correctAnswers;
  this.wrongAnswers = state.wrongAnswers;

  if (state.secs < 0) {
    this.secondsLeft = 0;
  } else {
    this.secondsLeft = state.secs;
  }
}

const recordScore = () => {
  objectToEncapsulateRankingMetrics[gameCounter] =
    new EntryForObjectToEncapsulateRankingMetrics();
};

const rankingSorter = () => {
  rankingSorted = Object.values(objectToEncapsulateRankingMetrics).sort(
    (a, b) => {
      if (a.correctAnswers > b.correctAnswers) {
        return -1;
      }
      if (a.correctAnswers < b.correctAnswers) {
        return 1;
      }
      if (a.wrongAnswers > b.wrongAnswers) {
        return -1;
      }
      if (a.wrongAnswers < b.wrongAnswers) {
        return 1;
      }
      if (a.secondsLeft > b.secondsLeft) {
        return -1;
      }
      if (a.secondsLeft < b.secondsLeft) {
        return 1;
      }
      return 0;
    }
  );
  return rankingSorted;
};

const displayRanking = () => {
  rankingSorter();
  console.table(rankingSorted);

  let informationPannel = [];

  for (let i = 0; i < Object.values(rankingSorted).length; i++) {
    rankingSorted[
      i
    ].string = `${rankingSorted[i].username} answered ${rankingSorted[i].correctAnswers} answers correctly and ${rankingSorted[i].wrongAnswers} incorrectly. ${rankingSorted[i].username} finished the game with ${rankingSorted[i].secondsLeft} seconds left.\n`;
    informationPannel.push(rankingSorted[i].string);
  }
  return alert(informationPannel.join(" "));
};

const playAnotherRound = () => {
  if (confirm("Do you want to play another round?")) {
    questionStatusSetDefault();

    gameCounter++;

    state = setDefaultState();

    username();

    questionDatabaseSwitcher();

    theGameWillBeginAlert();
    return gameFlow();
  }
};

const questionStatusSetDefault = () => {
  for (let i = 0; i < currentQuestionDatabase.length; i++) {
    currentQuestionDatabase[i].status = 0;
  }
};

const endGame = () => {
  console.clear();
  state.stillPlaying = false;

  if (state.answerCounter >= currentQuestionDatabase.length) {
    alert(
      "Game over!\nYou answered all the questions...\n\n Let´s see your score on the scoreboard."
    );

    recordScore();
    return displayRanking();
  }

  if (state.secs <= 0) {
    alert(
      `Time out!!!\n\n You didn't answer the last question on time, so we won´t be evaluation your answer "${state.answer}"`
    );

    recordScore();
    return displayRanking();
  } else {
    return alert(
      `You aborted the game.\n\n You got ${state.correctAnswers} questions right.`
    );
  }
};

const introduction = () => {
  alert(
    "Welcome to pure JavaScript Pasapalabra.\n\nYou will be asked a question for every letter of the alphabet.\n\nThe word that answers said question can either start with that letter or contain that letter, so be careful when reading the question!"
  );
  alert(
    `If your answer is correct, you get one point!\n\nIf you want to leave a question for later, you can type "pasapalabra" or just hit accept with an empty field.\n\nWhen you get a question wrong, time will be paused. Feel free to take your time reading the correct answer.`
  );
  alert(
    `You will be asked a username for every round you play.\n\nYour score will be ranked by correct answers. In case of a tie, wrong answers will be taken into consideration.\n\nThere is ${NUMBER_OF_QUESTION_DATABASES} different question databases to play with.`
  );
  alert(
    `You have ${SECONDS_ASSIGNED} seconds to play.\n\nYou can also choose to end at any time, by typing "end".`
  );
};

const theGameWillBeginAlert = () => {
  alert("The game will now begin. Good luck!");
};

const thanks = () => {
  alert("Thank you for playing pure JavaScript Pasapalabra!");
};

const gameFlow = () => {
  do {
    startTimer();
    dataDisplay();
    questionPrompt();
    checkIfWeCountTheAnswer();
    skipToNextLetterUnanswered();
  } while (state.stillPlaying);
  playAnotherRound();
};

const startGame = () => {
  introduction();
  username();
  theGameWillBeginAlert();
  gameFlow();
  thanks();
};

startGame();
