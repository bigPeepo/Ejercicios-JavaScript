//DECLARACIONES GLOBALES:
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

//1. USER WELCOME

function userWelcome() {
  do {
    user = prompt("What is your username?");
    if (!user) {
      alert(`You need to pick a username.`);
    }
  } while (!user);
  alert(`Welcome to JS Airlines, ${user}.`);
}

//2. FLIGHTSHOWER

let scaleCount = 0; // declarada globalmente porque priceAverage() la llama
function flightShower(anyFlights) {
  let informationPannel = [];
  for (let i = 0; i < anyFlights.length; i++) {
    if (anyFlights[i].scale) {
      anyFlights[i].scaleMessage = "has a stop.\n\n"; //creamos un value:key pair con la string para enunciar si hay escala;
      scaleCount = scaleCount + 1;
    } else {
      anyFlights[i].scaleMessage = "is a direct flight.\n\n";
    }
    anyFlights[i].string =
      `ID ${anyFlights[i].id} from: ${anyFlights[i].from} to: ${anyFlights[i].to} has a price of ${anyFlights[i].cost}€ and `.concat(
        anyFlights[i].scaleMessage
      );
    informationPannel.push(anyFlights[i].string);
  }
  alert(informationPannel.join(" "));
}

//3. AVERAGE COST & SCALES
function priceAverage() {
  let average = [];
  let resultSum = 0;
  for (let i = 0; i < flights.length; i++) {
    resultSum += parseInt(flights[i].cost);
  }
  average = resultSum / parseInt(flights.length);
  alert(
    `The average cost of today's ${flights.length} flights is ${average.toFixed(
      2
    )}€. \nOf these ${
      flights.length
    } flights, ${scaleCount} of them have a stop.`
  );
}

//4. LAST 5 FLIGHTS
function showLastFlights() {
  let lastFiveFlights = [];
  for (let i = flights.length - 1; i > flights.length - 6; i--) {
    lastFiveFlights.push(flights[i].to.concat("\n"));
  }
  alert("The last 5 flights of the day go to: \n" + lastFiveFlights.join(" "));
  alert(`We will now proceed to the Airlines Pro program, ${user}.`);
}

//PRO:
//5. ADMIN vs USER

function askCredentials() {
  let credentials = prompt(`Which kind of user are you?\nUSER or ADMIN?`);

  if (credentials) {
    credentials.toLowerCase();
  }

  while (!["user", "admin"].includes(credentials)) {
    credentials = prompt(`Please, state your credentials. User or Admin?`)
      .toLowerCase()
      .trim(); // to remove the possible spaces before and after the string
  }

  alert(`You chose ${credentials.toUpperCase()}.`);
  if (credentials === "user") {
    alert(
      `With user credentials, you can look up which flights are equal or lower than your maximum price.`
    );
    askPrice();
  }
  if (credentials === "admin") {
    alert(`With admin credentials, you can create and delete flights.`);
    createOrDelete();
  }
}

//6ADMIN. FLIGHT CREATION (15 max, no repetir ID, flightshow)
function indexer() {
  let flightIds = [];

  for (i = 0; i < flights.length; i++) {
    flightIds.push(flights[i].id);
  }

  return flightIds;
}

function askUntilRight(callbackTypeValidation, message) {
  let value;

  do {
    value = prompt(message);
  } while (!callbackTypeValidation(value));

  return value;
}

function flightFactory() {
  let flightIds = indexer();

  let id = askUntilRight(validateNumber, `What is the ID of the flight?`);

  if (flightIds.includes(Number(id))) {
    alert("There's already another flight with this ID");
    return flightFactory();
  }

  if (flights.length > 14) {
    alert(
      "You've reached the maximum of 15 flights.\nPlease delete a flight to be able to add a new one."
    );
    flightDeleter();
  }

  let to = askUntilRight(validateString, `Where is the flight going to?`);
  let from = askUntilRight(validateString, `Where is the flight leaving from?`);
  let cost = askUntilRight(validateNumber, `What is the price in €?`);

  let scale = confirm(`Does this flight have a scale?`);

  flights.push({
    // strings to numbers
    id: Number(id),
    to,
    from,
    cost: Number(cost),
    scale,
  });

  indexer();

  flightShower(flights);

  createOrDelete();
}
// flightFactory();
let idDeleted;
function deleter(idDeleted) {
  indexer();
  deletedFlight = flights.splice(indexId.indexOf(idDeleted), 1);
  alert(`You deleted flight with ID number ${idDeleted}.`);
  flightShower(flights);
  createOrDelete();
}

function flightDeleter() {
  alert(
    "You'll have to say the ID of the flight you want to delete.\n First, take a look at the flights on the database."
  );
  flightShower(flights);
  idDeleted = parseFloat(
    prompt("Which flight you want to delete? ID of the flight please.")
  );
  deleter(idDeleted);
}
function createOrDelete() {
  choice = prompt(
    `Do you want to CREATE or DELETE a flight?\nType CREATE or DELETE and hit accept. You can also type EXIT to finish the program.`
  ).toLowerCase();
  if (choice === "create") {
    flightFactory();
  }
  if (choice === "delete") {
    flightDeleter();
  }
  if (choice === "exit") {
    return thanks(); //por qué repite?
  } else {
    createOrDelete();
  }
}

//7ADMIN: DELETING FLIGHTS (indexation, flightshow)
let userMaxPrice;

function flightSearcher(userMaxPrice) {
  let cheaperFlights = [];

  for (let i = 0; i < flights.length; i++) {
    if (flights[i].cost <= userMaxPrice) {
      cheaperFlights.push(flights[i]);
    }
  }
  flightShower(cheaperFlights);

  let continueSearching = confirm(
    `Do you want to look up another price bracket now?`
  );
  if (continueSearching) {
    return askPrice();
  }

  let changeToAdmin = confirm(
    `Do you want to change your credentials to admin or exit the program? Admin(OK) / Exit(Cancel)`
  );

  if (changeToAdmin) {
    alert(`With admin credentials, you can create and delete flights.`);
    return createOrDelete();
  }

  return thanks();
}

function validateNumber(value) {
  return value && !isNaN(Number(value)); // is the same   return value && !isNaN(Number(value)) ? true : false;
}

function askPrice() {
  userMaxPrice = prompt(`Please, state below which is your max price:`);

  const valueChecked = validateNumber(userMaxPrice);

  if (!valueChecked) {
    alert("You need to enter a number value.");
    return askPrice();
  }

  alert(`The following flights are all up to ${userMaxPrice}€.`);

  flightSearcher(userMaxPrice);
}

function thanks() {
  return alert(`Thanks for using Airlines Pro`); //porque repite?
}

// Validation function: number

function validateString(value) {
  return value && isNaN(Number(value));
}

function start() {
  //  AIRLINES
  userWelcome();
  alert(`The following flights are available today:`);
  flightShower(flights);
  priceAverage();
  showLastFlights();
  askCredentials();
}

//start(); //<--- ***LLAMAR AQUÍ***
flightFactory();
