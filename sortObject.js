import { questions, questions2, questions3 } from "./questions.js";

const NUMBER_OF_QUESTION_DATABASES = 3;

const SECONDS_ASSIGNED = 2;

let gameCounter = 1;

let objectToEncapsulateRankingMetrics = {};

const setDefaultState = () => ({
  user: "",
  randomNumber: 0,
  turnCounter: 0,
  correctAnswers: 0,
  wrongAnswers: 0,
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

const randomNumberGenerator = () => {
  const numberMinimum = 1;
  const numberMaximum = NUMBER_OF_QUESTION_DATABASES;

  state.randomNumber = Math.round(
    Math.random() * (numberMaximum - numberMinimum) + numberMinimum
  );

  return state.randomNumber;
};

const questionDatabaseSwitcher = () => {
  switch (gameCounter % 3) {
    case 1:
      return questions;
      break;
    case 2:
      return questions2;
      break;
    case 0:
      return questions3;
      break;
    default:
      return questions;
  }
};

const currentQuestionDatabase = questionDatabaseSwitcher();

const username = () => {
  if (!state.user || state.user === "") {
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
  let answerCounter = 0;

  for (let i = 0; i < currentQuestionDatabase.length; i++) {
    if (currentQuestionDatabase[i].status) {
      answerCounter++;
    }
  }

  return answerCounter;
};

const skipToNextLetterUnanswered = () => {
  turnAdd1();

  if (answeredQuestionsCounter() > 25) {
    return endGame();
  }

  do {
    if (!currentQuestionDatabase[state.turnCounter].status) {
      return state.turnCounter;
    }
    turnAdd1();
  } while (currentQuestionDatabase[state.turnCounter].status);

  return state.turnCounter;
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

const questionPrompt = () => {
  state.answer = askAgainIfCancelled(getQuestionFromCounter(state.turnCounter));
};

const markLetterAsAnswered = () => {
  if (state.answer === "pasapalabra" || state.answer === "") {
    return;
  }
  questions[state.turnCounter].status = 1;
};

const getLetterFromCounter = (counter) => {
  return Object.values(currentQuestionDatabase[counter])[0];
};

const getSolutionFromCounter = (counter) => {
  //do I need to call parameter?
  return Object.values(currentQuestionDatabase[counter])[1];
};

const getQuestionFromCounter = () => {
  return Object.values(currentQuestionDatabase[state.turnCounter])[3];
};

const isAnswerRightOrWrong = () => {
  gameStillGoingOrNot();

  if (state.answer === "end") {
    return endGame();
  }

  if (state.answer === "pasapalabra" || state.answer === "") {
    //or empty string

    return;
  }

  if (
    getSolutionFromCounter(state.turnCounter) === state.answer &&
    state.stillPlaying
  ) {
    state.correctAnswers++;

    return alertSolution(true);
  }

  if (
    getSolutionFromCounter(state.turnCounter) !== state.answer &&
    state.stillPlaying
  ) {
    state.wrongAnswers++;

    return alertSolution(false);
  }
};

const alertSolution = (boolean) => {
  if (boolean) {
    alert(
      `Correct!\n\nThe state.answer is "${getSolutionFromCounter(
        state.turnCounter
      )}".`
    );

    storeSolutionInObject();
  }

  if (!boolean) {
    pauseTimer();

    alert(
      `That is wrong... The state.answer we were looking for is "${getSolutionFromCounter(
        state.turnCounter
      )}".`
    );

    storeSolutionInObject();
    storeWrongAnswerInObjects();
  }
};

const strikethroughLetterEquivalence = {
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
    strikedthroughConcat += strikethroughLetterEquivalence[targetWord[i]];
  }

  return strikedthroughConcat;
};

const storeSolutionInObject = () => {
  state.objectToEncapsulateSolutionsWrongAnswersAndTurn[
    getLetterFromCounter(state.turnCounter)
  ].solution = getSolutionFromCounter(state.turnCounter);
};

const storeWrongAnswerInObjects = () => {
  state.objectToEncapsulateSolutionsWrongAnswersAndTurn[
    getLetterFromCounter(state.turnCounter)
  ].wrongAnswer = strikethroughThisString(state.answer);
};

const refreshTurnInObject = () => {
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

const dataDisplay = () => {
  if (state.paused) {
    startTimer();
  }

  console.clear();
  console.log("delete this " + gameCounter);
  updateTime();
  console.log("Time remaining: " + state.secs + " seconds.");

  console.table(state.objectToEncapsulateSolutionsWrongAnswersAndTurn);
};

const recordScore = () => {
  function EntryForObjectToEncapsulateRankingMetrics() {
    this.username = state.user;
    this.correctAnswers = state.correctAnswers;
    this.wrongAnswers = state.wrongAnswers; ///aquí

    if (state.secs < 0) {
      this.secondsLeft = 0;
    } else {
      this.secondsLeft = state.secs;
    }
  }

  objectToEncapsulateRankingMetrics[gameCounter] =
    new EntryForObjectToEncapsulateRankingMetrics();
};

const displayRanking = () => {
  console.table(objectToEncapsulateRankingMetrics);
  console.log(JSON.stringify(objectToEncapsulateRankingMetrics));
  let informationPannel = [];

  for (
    let i = 1;
    i < Object.values(objectToEncapsulateRankingMetrics).length + 1;
    i++
  ) {
    objectToEncapsulateRankingMetrics[
      i
    ].string = `${objectToEncapsulateRankingMetrics[i].username} answered ${objectToEncapsulateRankingMetrics[i].correctAnswers} answers correctly and ${objectToEncapsulateRankingMetrics[i].wrongAnswers} incorrectly. ${objectToEncapsulateRankingMetrics[i].username} finished the game with ${objectToEncapsulateRankingMetrics[i].secondsLeft} seconds left.\n`;
    informationPannel.push(objectToEncapsulateRankingMetrics[i].string);
  }
  return alert(informationPannel.join(" "));
};

const endGame = () => {
  console.clear();
  state.stillPlaying = false;
  if (answeredQuestionsCounter() > currentQuestionDatabase.length) {
    alert("Game over! Let´s see your score on the scoreboard.");

    recordScore();
    return displayRanking();
  }

  if (state.secs <= 0) {
    console.log("Time out!!!");

    recordScore();
    return displayRanking();
  } else {
    console.log("You aborted the game"); //cambiar por thanks
  }
};

//todas gameStill GOing here
const gameStillGoingOrNot = () => {
  updateTime();
  if (state.secs <= 0) {
    return endGame();
  }
};

const playAnotherRound = () => {
  if (confirm("Do you want to play another round?")) {
    gameCounter++;

    state = setDefaultState();

    username();

    return gameFlow();
  } else endGame();
};

//reset.Timer()

const gameFlow = () => {
  do {
    refreshTurnInObject();
    dataDisplay();
    questionPrompt();
    isAnswerRightOrWrong();
    markLetterAsAnswered();
    skipToNextLetterUnanswered();
  } while (state.stillPlaying);
  playAnotherRound();
};

const startGame = () => {
  username();
  gameFlow();
};

startGame();

/* To do list:
Add how long it took for each question
Make the console.table be seen all the time
Add username, introduction, thank you functions

Order rankings  


   */
