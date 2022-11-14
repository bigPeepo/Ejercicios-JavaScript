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

const WELCOME = "Welcome";

//

const validateString = (value) => value && isNaN(Number(value));

const validateNumber = (value) => value && !isNaN(Number(value));

const askUntilRight = (callbackTypeValidation, message) => {
  let value;

  do {
    value = prompt(message);
  } while (!callbackTypeValidation(value));

  return value;
};

export { username, WELCOME, validateNumber, validateString, askUntilRight };

// import { username } from "../utils.js";

const randomNumberGenerator = () => {
  const numberMinimum = 1;
  const numberMaximum = 3;

  randomNumber = Math.round(
    Math.random() * (numberMaximum - numberMinimum) + numberMinimum
  );

  return randomNumber;
};

// declarando variables y limpiando status

const defaultState = () => ({
  turnCounter: 0,
  correctAnswers: 0,
});

let state = defaultState();

state.turnCounter = 1;

state = defaultState();

console.log("state", state);

// sorting objects

let object = {
  1: { name: "Dani", score: 110 },
  2: { name: "Jordi", score: 90 },
  3: { name: "Jordi", score: 100 },
};

Object.values(object).sort((a, b) => {
  return a.score - b.score;
});

const sorted = (metric, object) => {
  Object.values(object).sort((a, b) => {
    if (a[metric] < b[metric]) {
      return -1;
    }
    if (a[metric] > b[metric]) {
      return -1;
    } else {
      return 0;
    }
  });
};
