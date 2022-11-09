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
    answer: "lier",
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
    answer: "Sun",
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

//random questions. Bad thought out. JUst first round questions, then questions2, then questions3
let currentQuestionDatabase = questions;

//turn system
let turnCounter = 0;

const turnAdd1 = () => {
  turnCounter++;
  if (turnCounter >= currentQuestionDatabase.length) {
    turnCounter = 0;
  }

  return turnCounter;
};

const skipToNextLetterUnanswered = () => {
  do {
    if (currentQuestionDatabase[turnCounter].status) {
      return turnCounter;
    }
    turnAdd1();
  } while (!currentQuestionDatabase[turnCounter].status);

  return turnCounter;
};

//time system

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let secs = 0;

const startTimer = () => {
  if (paused) {
    paused = false;

    startTime = Date.now() - elapsedTime;

    intervalId = setInterval(updateTime, 1000);
  }
};

const pauseTimer = () => {
  paused = true;

  elapsedTime = Date.now() - startTime;

  clearInterval(intervalId);
};

const time0padding = (num) => {
  return (num < 10 ? "0" : "") + num;
};

function updateTime() {
  elapsedTime = Date.now() - startTime;

  secs = Math.floor((elapsedTime / 1000) % 60);

  secs = time0padding(secs);

  console.log(secs);
}

//Questioning & answering
let answer = "";
const questionPrompt = () => {
  answer = prompt(getQuestionsFromCounter(turnCounter).toLowerCase().trim());

  return answer;
};

const markLetterAsAnswered = () => {
  if (answer === "pasapalabra") {
    return;
  }
  return (questions[turnCounter].status = 1);
};

const answerChecker = () => {
  if (answer === "end") {
    pauseTimer();
    end();
  }

  if (answer === "pasapalabra") {
    //pausa el tiempo
    pauseTimer(); // to be ellaborated
    alert("oi! time is paused!");
  }

  if (getSolutionsFromCounter(turnCounter) === answer) {
    return displaySolution(true);
  }

  if (getSolutionsFromCounter(turnCounter) !== answer) {
    return displaySolution(false);
  }
};

const displaySolution = (boolean) => {
  //pausa el tiempo
  if (boolean) {
    alert(
      `Correct!\n\nThe answer is "${getSolutionsFromCounter(turnCounter)}".`
    );
    /* return entriesForDisplayConstructor(
      getLetterFromCounter(turnCounter),
      turnCounter,
      turnCounter
    ); */
    return giveSolutionAndMaybeKeepWrongAnswerToo(true);
  }
  if (!boolean) {
    alert(
      `That is wrong... The answer we were looking for is "${getSolutionsFromCounter(
        turnCounter
      )}".`
    );
    /*  return entriesForDisplayConstructor(
      getLetterFromCounter(turnCounter),
      turnCounter,
      turnCounter,
      answer
    ); */
    return giveSolutionAndMaybeKeepWrongAnswerToo(false);
  }
};

// indexers

const getLetterFromCounter = (turnCounter) => {
  return Object.values(currentQuestionDatabase[turnCounter])[0];
};

const getSolutionsFromCounter = (turnCounter) => {
  return Object.values(currentQuestionDatabase[turnCounter])[1];
};

const getQuestionsFromCounter = () => {
  return Object.values(currentQuestionDatabase[turnCounter])[3];
};

//ending the game

let stillPlaying = true;

const end = () => {
  return (stillPlaying = false);
};

const checkIfAllResponsesAreGiven = () => {
  for (let i = 0; i > questions.length; i++) {
    let counter;
    if (currentQuestionDatabase[i]) {
      ++counter;
    }
    if (counter === 26) {
      return (stillPlaying = false);
    }
  }
  return false; // or empty return
};

//starting the functions

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

const introduction = () => {
  alert(
    `Welcome to JS Pasapalabra, ${username()}.\n\nYou will need to open the console viewer to play this game.`
  );
};

const thanks = () => {
  alert(`Thanks for playing JS Pasapalabra, ${username()}.\nHAVE A NICE DAY!`);
};

const gameFlow = () => {
  do {
    displayRosco();
    console.log("1");
    questionPrompt(); // can END
    console.log("2");

    answerChecker();
    console.log("3");

    markLetterAsAnswered();

    console.log("4");

    checkIfAllResponsesAreGiven();
    console.log("5");

    skipToNextLetterUnanswered();
    console.log("6");
  } while (stillPlaying);
};

const start = () => {
  //introduction();
  startTimer();
  gameFlow();
  ranking(); // if end > not ranked
  thanks();
};

const strikethroughObject = {
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
    strikedthroughConcat += strikethroughObject[targetWord[i]];
  }

  return strikedthroughConcat;
};

const displayRosco = () => {
  console.clear();
  console.log("Turnc " + turnCounter);
  lettersAndTurnForDisplay();
  console.table(arrayAnswersGiven);
};

const lettersAndTurnForDisplay = () => {
  for (let i = 0; i < questions.length; i++) {
    entriesForDisplayConstructor(getLetterFromCounter(i), i);
  }
};

function objectForDisplay(turn, solution, wrongAnswer) {
  if (turn === turnCounter) {
    this.turn = "⬅";
  }
  if (turn !== turnCounter) {
    delete this.turn;
  }
  if (solution) {
    //pasapalabra
    this.solution = solution;
  }
  if (wrongAnswer) {
    this.wrongAnswer = wrongAnswer;
  }
}

var arrayAnswersGiven = {};

const entriesForDisplayConstructor = (letter, turn) => {
  arrayAnswersGiven[letter] = new objectForDisplay(turn);
};

const giveSolutionAndMaybeKeepWrongAnswerToo = (boolean) => {
  arrayAnswersGiven[getLetterFromCounter(turnCounter)].solution =
    getSolutionsFromCounter(turnCounter);

  if (!boolean) {
    arrayAnswersGiven[getLetterFromCounter(turnCounter)].wrongAnswer =
      strikethroughThisString(answer);
  }
};

/* answer = "entra";
giveSolutionAndMaybeKeepWrongAnswerToo(false, "toxic");
delete arrayAnswersGiven[getLetterFromCounter(turnCounter)].wrongAnswer;
console.log(arrayAnswersGiven.a.wrongAnswer); */
let user = "String";
//start();

/* lettersAndTurnForDisplay();
giveSolutionAndMaybeKeepWrongAnswerToo(false);
console.log(arrayAnswersGiven); */
questions[turnCounter].status = 1;
console.log(questions[turnCounter].status);
