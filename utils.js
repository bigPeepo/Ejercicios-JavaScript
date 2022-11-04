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
