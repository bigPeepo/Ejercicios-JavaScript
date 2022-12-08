const questions = [
  {
    letter: "a",
    answer: "anagram",
    status: 0,
    question:
      "With the letter A.\nA word or phrase made by using the letters of another word or phrase in a different order.",
  },
  {
    letter: "b",
    answer: "blind",
    status: 0,
    question: "With the letter B.\nSomeone who is unable to see.",
  },
  {
    letter: "c",
    answer: "chaos",
    status: 0,
    question: "With the letter C.\nA state of total confusion with no order.",
  },
  {
    letter: "d",
    answer: "dialysis",
    status: 0,
    question:
      "With the letter D.\nA process of separating substances from liquid by putting them through a thin piece of skin-like material, especially to make pure the blood of people whose kidneys are not working correctly.",
  },
  {
    letter: "e",
    answer: "evil",
    status: 0,
    question: "With the letter E.\nProfoundly immoral and wicked.",
  },
  {
    letter: "f",
    answer: "fear",
    status: 0,
    question:
      "With the letter F.\nAn unpleasant emotion caused by the threat of danger, pain, or harm.",
  },
  {
    letter: "g",
    answer: "ghost",
    status: 0,
    question:
      "With the letter G.\nAn apparition of a dead person which is believed to appear or become manifest to the living, typically as a nebulous image.",
  },
  {
    letter: "h",
    answer: "habit",
    status: 0,
    question:
      "With the letter H.\nA settled or regular tendency or practice, especially one that is hard to give up.",
  },
  {
    letter: "i",
    answer: "imagination",
    status: 0,
    question:
      "With the letter I.\nThe faculty or action of forming new ideas, or images or concepts of external objects not present to the senses.",
  },
  {
    letter: "j",
    answer: "jewel",
    status: 0,
    question:
      "With the letter J.\nAn ornament or piece that contains a precious stone or stones.",
  },
  {
    letter: "k",
    answer: "kleptomania",
    status: 0,
    question:
      "With the letter K.\nA recurrent urge to steal, typically without regard for need or profit.",
  },
  {
    letter: "l",
    answer: "liar",
    status: 0,
    question: "With the letter L.\nA person who doesn't tell the truth.",
  },
  {
    letter: "m",
    answer: "mindfullness",
    status: 0,
    question:
      "With the letter M.\nthe practice of being aware of your body, mind, and feelings in the present moment, thought to create a feeling of calm.",
  },
  {
    letter: "n",
    answer: "narcissist",
    status: 0,
    question:
      "With the letter N.\nA person who has an excessive interest in or admiration of themselves.",
  },
  {
    letter: "o",
    answer: "origami",
    status: 0,
    question:
      "With the letter O.\nThe Japanese art of folding paper into decorative shapes and figures.",
  },
  {
    letter: "p",
    answer: "plum",
    status: 0,
    question:
      "With the letter P.\nAn oval fleshy fruit which is purple, reddish, or yellow when ripe and contains a flattish pointed stone.",
  },
  {
    letter: "q",
    answer: "questionnaire",
    status: 0,
    question:
      "With the letter Q.\nA list of questions that several people are asked so that information can be collected about something.",
  },
  {
    letter: "r",
    answer: "roar",
    status: 0,
    question:
      "With the letter R.\nA full, deep, prolonged cry uttered by a lion or other large wild animal.",
  },
  {
    letter: "s",
    answer: "sir",
    status: 0,
    question:
      "With the letter S.\nUsed as a polite or respectful way of addressing a man, especially one in a position of authority.",
  },
  {
    letter: "t",
    answer: "turquoise",
    status: 0,
    question: "With the letter T.\nA greenish-blue colour.",
  },
  {
    letter: "u",
    answer: "ultimatum",
    status: 0,
    question:
      "With the letter U.\nA final demand or statement of terms, the rejection of which will result in retaliation or a breakdown in relations.",
  },
  {
    letter: "v",
    answer: "voice",
    status: 0,
    question:
      "With the letter V.\nThe sound produced in a person's larynx and uttered through the mouth, as speech or song.",
  },
  {
    letter: "w",
    answer: "warp",
    status: 0,
    question:
      "With the letter W.\nA piece of rope holded by the extremes which serves to jump.",
  },
  {
    letter: "x",
    answer: "hexagon",
    status: 0,
    question:
      "Contains the letter X.\nA plane figure with six straight sides and angles.",
  },
  {
    letter: "y",
    answer: "year",
    status: 0,
    question:
      "With the letter Y.\nThe time taken by the earth to make one revolution around the sun.",
  },
  {
    letter: "z",
    answer: "zoology",
    status: 0,
    question:
      "With the letter Z.\nThe scientific study of animals, especially their structure.",
  },
];

const questions2 = [
  {
    letter: "a",
    answer: "accountant",
    status: 0,
    question:
      "With the letter A. Someone who keeps or examines the records of money received, paid, and owed by a company or person.\n",
  },
  {
    letter: "b",
    answer: "bald",
    status: 0,
    question:
      "With the letter B.\nSomeone who has little or no hair on the head.",
  },
  {
    letter: "c",
    answer: "camper",
    status: 0,
    question:
      "With the letter C.\nA term given to those in an online multiplayer game who will place themselves in a strategic position and wait for an extended period of time until a target enters his field of view.",
  },
  {
    letter: "d",
    answer: "durian",
    status: 0,
    question:
      "With the letter D.\nA large tropical fruit with a strong unpleasant smell but a sweet flavour.",
  },
  {
    letter: "e",
    answer: "elephant",
    status: 0,
    question:
      "With the letter E.\nA very large animal with thick grey skin, large ears, two curved outer teeth called tusks and a long nose called a trunk.",
  },
  {
    letter: "f",
    answer: "flute",
    status: 0,
    question:
      "With the letter F.\n A musical instrument of the woodwind group, shaped like a thin pipe. The player holds it sideways and blows across a hole at one end.",
  },
  {
    letter: "g",
    answer: "gladiator",
    status: 0,
    question:
      "With the letter G.\nA man trained to fight other men or animals in order to entertain the public in the ancient Rome.",
  },
  {
    letter: "h",
    answer: "husband",
    status: 0,
    question: "With the letter H.\nThe man that somebody is married to.",
  },
  {
    letter: "i",
    answer: "irrational",
    status: 0,
    question:
      "With the letter I.\nNot based on, or not using, clear logical thought",
  },
  {
    letter: "j",
    answer: "juice",
    status: 0,
    question:
      "With the letter J.\nThe liquid that comes from fruit or vegetables.",
  },
  {
    letter: "k",
    answer: "kiss",
    status: 0,
    question:
      "With the letter K.\nTo touch somebody with your lips as a sign of love, affection, sexual desire, etc., or when saying hello or goodbye.",
  },
  {
    letter: "l",
    answer: "loan",
    status: 0,
    question:
      "With the letter L.\nMoney that an organization such as a bank lends and somebody borrows.",
  },
  {
    letter: "m",
    answer: "magic",
    status: 0,
    question:
      "With the letter M.\nA power that allows people (such as witches and wizards) to do impossible things by saying special words or performing special actions.",
  },
  {
    letter: "n",
    answer: "nomad",
    status: 0,
    question:
      "With the letter N.\nMember of a group of people who move from one place to another rather than living in one place all of the time.",
  },
  {
    letter: "o",
    answer: "oval",
    status: 0,
    question:
      "With the letter O.\nShaped like a circle that is flattened so that it is like an egg or an ellipse.",
  },
  {
    letter: "p",
    answer: "pain",
    status: 0,
    question:
      "With the letter P.\nThe physical feeling caused by disease, injury, or something that hurts the body.",
  },
  {
    letter: "q",
    answer: "quick",
    status: 0,
    question:
      "With the letter Q.\nDone or happening in a short amount of time.",
  },
  {
    letter: "r",
    answer: "rain",
    status: 0,
    question:
      "With the letter R.\nWater that falls in drops from clouds in the sky.",
  },
  {
    letter: "s",
    answer: "sun",
    status: 0,
    question:
      "With the letter S.\n The star that provides light and heat for the earth and around which the earth moves.",
  },
  {
    letter: "t",
    answer: "tax",
    status: 0,
    question:
      "With the letter T.\nMoney paid to the government that is based on your income or the cost of goods or services you have bought.",
  },
  {
    letter: "u",
    answer: "uncle",
    status: 0,
    question:
      "With the letter U.\nThe brother of your father or mother or the husband of your aunt.",
  },
  {
    letter: "v",
    answer: "violence",
    status: 0,
    question:
      "With the letter V.The use of physical force to harm someone, to damage property, etc.\n",
  },
  {
    letter: "w",
    answer: "witch",
    status: 0,
    question:
      "With the letter W.\nA woman who is believed to have magical powers and who uses them to harm or help other people.",
  },
  {
    letter: "x",
    answer: "anorexia",
    status: 0,
    question:
      "Contains the letter X.\nA serious physical and emotional illness in which an abnormal fear of being fat leads to very poor eating habits and dangerous weight loss.",
  },
  {
    letter: "y",
    answer: "yesterday",
    status: 0,
    question: "With the letter Y.\nOn, during, or for the day before today.",
  },
  {
    letter: "z",
    answer: "hospitalization",
    status: 0,
    question:
      "Contains the letter Z.The act of placing a person in a hospital as a patient.\n",
  },
];

const questions3 = [
  {
    letter: "a",
    answer: "afternoon",
    status: 0,
    question:
      "With the letter A.\nThe period that starts at about twelve o'clock or after the meal in the middle of the day and ends at about six o'clock or when the sun goes down.",
  },
  {
    letter: "b",
    answer: "baseball",
    status: 0,
    question:
      "With the letter B.\nA game played on a large field by two teams of nine players who try to score runs by hitting a small ball with a bat and then running to each of the four bases without being put out.",
  },
  {
    letter: "c",
    answer: "cash",
    status: 0,
    question: "With the letter C.\nMoney in the form of coins and bills.",
  },
  {
    letter: "d",
    answer: "dance",
    status: 0,
    question:
      "With the letter D.\nTo move your body in a way that goes with the rhythm and style of music that is being played.",
  },
  {
    letter: "e",
    answer: "eyebrow",
    status: 0,
    question: "With the letter E.\nThe line of hair that grows over the eye.",
  },
  {
    letter: "f",
    answer: "faith",
    status: 0,
    question:
      "With the letter F.\nStrong belief or trust in someone or something.",
  },
  {
    letter: "g",
    answer: "giant",
    status: 0,
    question:
      "With the letter G.\nMuch larger or more powerful than normal. A legendary creature with this characteristics.",
  },
  {
    letter: "h",
    answer: "half",
    status: 0,
    question:
      "With the letter H.\nOne of two equal or nearly equal parts into which something can be divided.",
  },
  {
    letter: "i",
    answer: "illegal",
    status: 0,
    question: "With the letter I.\nNot allowed by the law.",
  },
  {
    letter: "j",
    answer: "joke",
    status: 0,
    question: "With the letter J.\nSomething said or done to cause laughter.",
  },
  {
    letter: "k",
    answer: "key",
    status: 0,
    question:
      "With the letter K.\nA device that is used to open a lock or start an automobile.",
  },
  {
    letter: "l",
    answer: "lazy",
    status: 0,
    question:
      "With the letter L.\nNot liking to work hard or to be active. Slow and relaxed.",
  },
  {
    letter: "m",
    answer: "milk",
    status: 0,
    question:
      "With the letter M.\nThe white liquid produced by cows, goats and some other animals as food for their young and used as a drink by humans.",
  },
  {
    letter: "n",
    answer: "negligence",
    status: 0,
    question:
      "With the letter N.\nFailure to take the care that a responsible person usually takes : lack of normal care or attention.",
  },
  {
    letter: "o",
    answer: "obsession",
    status: 0,
    question:
      "With the letter O.\nA state in which someone thinks about someone or something constantly or frequently especially in a way that is not normal.",
  },
  {
    letter: "p",
    answer: "pair",
    status: 0,
    question:
      "With the letter P.\nTwo things that are the same and are meant to be used together.",
  },
  {
    letter: "q",
    answer: "queen",
    status: 0,
    question:
      "With the letter Q.\nA woman who rules a country and who usually inherits her position and rules for life.",
  },
  {
    letter: "r",
    answer: "regret",
    status: 0,
    question:
      "With the letter R.\nTo feel sad or sorry about (something that you did or did not do).",
  },
  {
    letter: "s",
    answer: "salary",
    status: 0,
    question:
      "With the letter S.\nAn amount of money that an employee is paid.",
  },
  {
    letter: "t",
    answer: "temple",
    status: 0,
    question: "With the letter T.\nA building for worship.",
  },
  {
    letter: "u",
    answer: "underground",
    status: 0,
    question:
      "With the letter U.\nLocated or occurring below the surface of the earth. A system of trains that run below the ground in a large city.",
  },
  {
    letter: "v",
    answer: "vegetarian",
    status: 0,
    question:
      "With the letter V.\nA person who does not eat meat for health or religious reasons or because they want to avoid being cruel to animals.",
  },
  {
    letter: "w",
    answer: "wild",
    status: 0,
    question:
      "With the letter W.\nUncontrolled, violent, or extreme. / Used to refer to plants or animals that live or grow independently of people, in natural conditions and with natural characteristics.",
  },
  {
    letter: "x",
    answer: "relax",
    status: 0,
    question:
      "Contains the letter X.\nTo become or to cause (something) to become less tense, tight, or stiff.",
  },
  {
    letter: "y",
    answer: "yes",
    status: 0,
    question:
      "With the letter Y.\nUsed to give a positive answer or reply to a question, request, or offer.",
  },
  {
    letter: "z",
    answer: "ozone",
    status: 0,
    question:
      "Contains the letter Z.\nA poisonous gas with a strong smell that is a form of oxygen.",
  },
];

const currentQuestion = document.getElementById("current-question");

const currentLetter = document.getElementById("question-header");

const submit = document.getElementById("submit");

const pasa = document.getElementById("pasapalabra");

const record = document.getElementById("record");

const textForm = document.getElementById("answer-buttons-container");

const timer = document.getElementById("timer");

const correctAnswersCounter = document.getElementById("correct-answers");

const wrongAnswersCounter = document.getElementById("wrong-answers");

let skippedLetter;

let currentQuestionDatabase = questions;

const NUMBER_OF_QUESTION_DATABASES = 3;

let gameCounter = 1;

let objectToEncapsulateRankingMetrics = {};

let rankingSorted = [];

let startTime = Date.now();

const SECONDS_ASSIGNED = 3;

const setTime = SECONDS_ASSIGNED * 1000;

let message = new SpeechSynthesisUtterance();

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
  intervalId: setInterval(countdownTimer),
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
// Timer bar

const semicircles = document.querySelectorAll(".semicircles");

const transparencyCircle = document.getElementById("innermost-circle");

/* const startTimer = () => {
  if (state.paused) {
    state.paused = false;

    state.startTime = Date.now() - state.elapsedTime;

    timerLoop = setInterval(countdownTimer);
  }
  return state.sta;
}; */

/* const pauseTimer = () => {
  state.paused = true;

  state.elapsedTime = Date.now() - state.startTime;

  state.intervalId = clearInterval(timerLoop);
}; */

/* const time0padding = (num) => {
  return (num < 10 && num > 0 ? "0" : "") + num;
}; */

/* function updateTime() {
  state.elapsedTime = state.timeAssigned - (Date.now() - state.startTime);

  state.secs = Math.floor(state.elapsedTime / 1000);

  state.secs = time0padding(state.secs);

  return state.secs;
} */

/* startTimer(); */

const futureTime = startTime + setTime;

function countdownTimer() {
  console.log("startTime " + startTime);
  console.log("setTime " + setTime);
  console.log("state.startTime " + state.startTime);
  console.log("state.elapsedTime " + state.elapsedTime);
  console.log("state.secs " + state.secs);

  state.startTime = Date.now() - state.elapsedTime;
  state.secs = futureTime - state.startTime;
  const angle = (state.secs / state.timeAssigned) * 360;

  if (angle > 180) {
    semicircles[0].style.transform = "rotate(180deg)";
    semicircles[1].style.transform = `rotate(${angle}deg`;
    semicircles[2].style.display = "none";
    semicircles[3].style.transform = `rotate(${180 + angle}deg`;
  } else {
    semicircles[0].style.transform = `rotate(${angle}deg`;
    semicircles[1].style.transform = `rotate(${angle}deg`;
    semicircles[2].style.display = "block";
    semicircles[3].style.transform = `rotate(${180 + angle}deg`;
  }

  if (state.secs < 0) {
    semicircles[0].style.display = "none";
    semicircles[1].style.display = "none";
    semicircles[2].style.display = "none";
    semicircles[3].style.display = "none";
    transparencyCircle.style.visibility = "visible";

    timer.innerHTML = "0";

    setTimeout(() => {
      endGame();
    }, 10);

    clearInterval(state.intervalId);
  }
  timer.innerHTML = Math.ceil(state.secs / 1000);
}

// Webcam feed

const video = document.querySelector("#video-element");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

//nuevo

let SpeechRecognition = webkitSpeechRecognition;
let SpeechGrammarList = window.webkitSpeechGrammarList;
let SpeechRecognitionEvent = webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

recognition.onresult = function (event) {
  document.getElementById("text-input").value = event.results[0][0].transcript;
};

recognition.onspeechend = function () {
  recognition.stop();
};

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

const askAgainIfCancelled = (message) => {
  //not needed
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
  currentLetter.innerHTML = getQuestionFromCounter(state.turnCounter).split(
    "."
  )[0];

  currentQuestion.innerHTML = getQuestionFromCounter(state.turnCounter).split(
    "."
  )[1];

  message.text = currentQuestion.innerHTML;

  window.speechSynthesis.speak(message);
};

const checkIfWeCountTheAnswer = () => {
  timeOutOrEnd();
  checkForPasapalabra();
  markLetterAsAnswered();
};

const timeOutOrEnd = () => {
  if (state.answer === "end") {
    return endGame();
  }
};

const checkForPasapalabra = () => {
  if (
    state.answer === "pasapalabra" ||
    state.answer === "" ||
    skippedLetter ||
    !state.stillPlaying
  ) {
    turnAdd1();
    skippedLetter = false;
    return;
  }

  isAnswerRightOrWrong();
};

const isAnswerRightOrWrong = () => {
  //input from form
  let querySelectorString =
    "#rosco :nth-child(" + (state.turnCounter + 1) + ")";

  if (getAnswerFromCounter(state.turnCounter) === state.answer) {
    state.correctAnswers++;

    correctAnswersCounter.innerHTML = state.correctAnswers;

    document.querySelector(querySelectorString).style.backgroundColor =
      "#1eba3a";

    return alertSolution(true);
  } else {
    state.wrongAnswers++;

    wrongAnswersCounter.innerHTML = state.wrongAnswers;

    document.querySelector(querySelectorString).style.backgroundColor =
      "#c2153e";

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
    message.text = "correct!";

    window.speechSynthesis.speak(message);

    storeSolutionInObject();
  }

  if (!boolean) {
    message.text = `wrong! The correct answer is "${getAnswerFromCounter(
      state.turnCounter
    )}".`;

    window.speechSynthesis.speak(message);

    alert(
      `${
        state.answer
      }" is wrong... The answer we were looking for is "${getAnswerFromCounter(
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
  alert(informationPannel.join(" "));
  playAnotherRound();
};

const playAnotherRound = () => {
  if (confirm("Do you want to play another round?")) {
    questionStatusSetDefault();

    gameCounter++;

    state = setDefaultState();

    resetLettersColor();

    username();

    questionDatabaseSwitcher();

    theGameWillBeginAlert();

    /*   startTime = Date.now();

    countdownTimer(); */

    return startGame();
  }
};

const questionStatusSetDefault = () => {
  for (let i = 0; i < currentQuestionDatabase.length; i++) {
    currentQuestionDatabase[i].status = 0;
  }
};

const endGame = () => {
  state.stillPlaying = false;
  window.speechSynthesis.cancel();

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
    `If your answer is correct, you get one point!\n\nIf you want to leave a question for later, you can type "pasapalabra" or just hit accept with an empty field.`
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

/* const gameFlow = () => {
  do {
    startTimer();
    dataDisplay(); 
    questionPrompt();
    checkIfWeCountTheAnswer();
    skipToNextLetterUnanswered();
  } while (state.stillPlaying);
  playAnotherRound();
}; */

const startGame = () => {
  /*  introduction(); */
  /*   username();
  theGameWillBeginAlert(); */
  questionPrompt();
  /*   thanks(); */
};

const nextPlease = () => {
  checkIfWeCountTheAnswer();
  skipToNextLetterUnanswered();
  questionPrompt();
};

startGame();

currentLetter.innerHTML = getQuestionFromCounter(state.turnCounter).split(
  "."
)[0];

currentQuestion.innerHTML = getQuestionFromCounter(state.turnCounter).split(
  "."
)[1];

submit.addEventListener("click", (e) => {
  e.preventDefault();

  state.answer = document.getElementById("text-input").value;

  document.getElementById("text-input").value = "";

  window.speechSynthesis.cancel();

  nextPlease();
});

pasa.addEventListener("click", (e) => {
  e.preventDefault();

  skippedLetter = true;

  window.speechSynthesis.cancel();

  nextPlease();
});

record.addEventListener("click", (e) => {
  e.preventDefault();

  window.speechSynthesis.cancel();

  recognition.start();
});
//Adjust text size to box size

const resetLettersColor = () => {
  for (let i = 0; i++; i < 26) {
    let querySelectorString = "#rosco :nth-child(" + (i + 1) + ")";

    document.querySelector(querySelectorString).style.backgroundColor = "";
  }
};
