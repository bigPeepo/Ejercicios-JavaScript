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

//
