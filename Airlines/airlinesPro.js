const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

let user;
const userWelcome = () => {
  do {
    user = prompt("What is your username?");
    if (!user) {
      alert(`You need to pick a username.`);
    }
  } while (!user);
  alert(`Welcome to JS Airlines, ${user}.`);
};

const scaleMessageAndCount = (anyFlights) => {
  let scaleCount = 0;
  for (let i = 0; i < anyFlights.length; i++) {
    if (anyFlights[i].scale) {
      anyFlights[i].scaleMessage = "has a stop.\n\n";
      scaleCount = scaleCount + 1;
    }
    if (!anyFlights[i].scale) {
      anyFlights[i].scaleMessage = "is a direct flight.\n\n";
    }
  }
  return scaleCount;
};

const flightShower = (anyFlights) => {
  scaleMessageAndCount(anyFlights);

  let informationPannel = [];

  for (let i = 0; i < anyFlights.length; i++) {
    anyFlights[i].string =
      `ID ${anyFlights[i].id} from: ${anyFlights[i].from} to: ${anyFlights[i].to} has a price of ${anyFlights[i].cost}€ and `.concat(
        anyFlights[i].scaleMessage
      );
    informationPannel.push(anyFlights[i].string);
  }
  alert(informationPannel.join(" "));
};

const priceAverage = () => {
  let average = [];

  let resultSum = 0;

  scaleCount = scaleMessageAndCount(flights);

  for (let i = 0; i < flights.length; i++) {
    resultSum += Number(flights[i].cost);
  }

  average = resultSum / parseInt(flights.length);

  alert(
    `The average cost of today's ${flights.length} flights is ${average.toFixed(
      2
    )}€. \nOf these ${
      flights.length
    } flights, ${scaleCount} of them have a stop.`
  );
};

const showLastFlights = () => {
  let lastFiveFlights = [];

  for (let i = flights.length - 1; i > flights.length - 6; i--) {
    lastFiveFlights.push(flights[i].to.concat("\n"));
  }

  alert("The last 5 flights of the day go to: \n" + lastFiveFlights.join(" "));

  alert(`We will now proceed to the Airlines Pro program, ${user}.`);
};

const askCredentials = () => {
  let credentials = prompt(`Which kind of user are you?\nUSER or ADMIN?`);

  if (credentials) {
    credentials = credentials.toLowerCase().trim();
  }

  while (!["user", "admin"].includes(credentials)) {
    credentials = prompt(`Please, state your credentials now. User or Admin?`);
    if (credentials) {
      credentials = credentials.toLowerCase().trim();
    }
  }

  alert(`You chose ${credentials.toUpperCase()} credentials.`);

  if (credentials === "user") {
    alert(
      `With user credentials, you can look up which flights are equal or lower than your maximum price.`
    );
    return askPrice();
  }

  if (credentials === "admin") {
    alert(`With admin credentials, you can create and delete flights.`);

    return createOrDelete();
  }
};

const indexer = () => {
  let flightIds = [];

  for (i = 0; i < flights.length; i++) {
    flightIds.push(flights[i].id);
  }

  return flightIds;
};

const validateString = (value) => value && isNaN(Number(value));

const validateNumber = (value) => value && !isNaN(Number(value));

const askUntilRight = (callbackTypeValidation, message) => {
  let value;

  do {
    value = prompt(message);
  } while (!callbackTypeValidation(value));

  return value;
};

let counter = 0;
const flightsLength = flights.length;

const flightFactory = () => {
  counter++;

  let id = flightsLength - 1 + counter;

  if (flights.length > 14) {
    alert(
      "You've reached the maximum of 15 flights.\nPlease delete a flight to be able to add a new one."
    );

    flightDeleter();
  }

  let to = askUntilRight(validateString, `Where is the flight going to?`);

  let from = askUntilRight(validateString, `Where is the flight leaving from?`);

  let cost = askUntilRight(validateNumber, `What is the price in €?`);

  let scale = confirm(
    `Does this flight have a stop?\nCancel is no, OK is yes.`
  );

  flights.push({
    id: Number(id),
    to,
    from,
    cost: Number(cost),
    scale,
  });
  indexer();

  flightShower(flights);

  createOrDelete();
};

const deleter = (id) => {
  let flightIds = indexer();

  if (flightIds.indexOf(id) === -1) {
    alert(`There is no flight on our database that matches ID ${id}`);
    flightDeleter();
  }
  flights.splice(flightIds.indexOf(id), 1);

  indexer();

  alert(`You deleted flight with ID number ${id}.\n`);
  if (!flights.length) {
    alert(
      "There aren't any flights left on our database.\nYou may create a flight next"
    );
    flightFactory();
  }

  if (flights.length) {
    alert("These are the remaining flights on our database:");

    flightShower(flights);

    createOrDelete();
  }
};

const flightDeleter = () => {
  alert(
    "You'll have to write the ID of the flight you want to delete.\n First, take a look at the flights on the database."
  );
  flightShower(flights);

  let idDeleted = askUntilRight(
    validateNumber,
    `Which flight you want to delete? ID of the flight please.`
  );

  deleter(Number(idDeleted));
};

const createOrDelete = () => {
  let choice = askUntilRight(
    validateString,
    `Do you want to CREATE or DELETE a flight?\nType CREATE or DELETE and hit accept. You can also type USER to get user credentials, or EXIT to finish the program.`
  );

  choice = choice.toLowerCase();

  if (choice === "create") {
    return flightFactory();
  }

  if (choice === "delete") {
    return flightDeleter();
  }

  if (choice === "user") {
    alert(
      `With user credentials, you can look up which flights are equal or lower than your maximum price.`
    );
    return askPrice();
  }

  if (choice === "exit") {
    return;
  }

  if (!["create", "delete", "exit", "user"].includes(choice)) {
    return createOrDelete();
  }
};

const askPrice = () => {
  let userMaxPrice = askUntilRight(
    validateNumber,
    `Please, state below which is your max price:`
  );

  flightSearcher(Number(userMaxPrice));
};

const flightSearcher = (userMaxPrice) => {
  let cheaperFlights = [];

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].cost <= userMaxPrice) {
      cheaperFlights.push(flights[i]);
    }
  }
  if (!cheaperFlights.length) {
    alert("There are no flights under the specified amount.");
  }

  if (cheaperFlights.length) {
    alert(`The following flights are all up to ${userMaxPrice}€.`);

    flightShower(cheaperFlights);
  }

  let continueSearching = confirm(
    `Do you want to look up another price bracket now?`
  );

  if (continueSearching) {
    return askPrice();
  }

  let changeToAdmin = confirm(
    `Do you want to change your credentials to admin or exit the program?\nAdmin(OK) / Exit the program(Cancel)`
  );

  if (changeToAdmin) {
    alert(`With admin credentials, you can create and delete flights.`);
    return createOrDelete();
  }
};

const thanks = () => alert(`Thanks for using Airlines Pro`);

function start() {
  userWelcome();
  alert(`The following flights are available today:`);
  flightShower(flights);
  priceAverage();
  showLastFlights();
  askCredentials();
  thanks();
}

start();
