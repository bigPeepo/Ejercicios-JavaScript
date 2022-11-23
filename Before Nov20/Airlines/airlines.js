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
let informationPannel = [];
let average = [];
let resultSum = 0;
let scaleCount = 0;
let lastFiveFlights = [];

do {
  user = prompt("What is your username?");
  if (!user) {
    alert(`You need to pick a username.`);
  }
} while (!user); // better than user === null, because it also covers empty string

alert(`Welcome to JS Airlines, ${user}.`);
alert(`The following flights are available today:`);

for (let i = 0; i < flights.length; i++) {
  if (flights[i].scale) {
    flights[i].scaleString = "has a stop.\n\n"; //creamos un value:key pair con la string para enunciar si hay escala;
    scaleCount = scaleCount + 1;
  } else {
    flights[i].scaleString = "is a direct flight.\n\n";
  }

  flights[i].flightInformation =
    `The flight departing from: ${flights[i].from} to: ${flights[i].to} has a price of ${flights[i].cost}€ and `.concat(
      flights[i].scaleString
    );
  informationPannel.push(flights[i].flightInformation);
}

alert(informationPannel.join(" "));

for (let i = 0; i < flights.length; i++) {
  resultSum += parseInt(flights[i].cost);
}
average = resultSum / parseInt(flights.length);

alert(
  `The average cost of today's ${flights.length} flights is ${average.toFixed(
    2
  )}€. \nThe number of these ${
    flights.length
  } flights that have a stop is ${scaleCount}.`
);

for (let i = flights.length - 1; i > flights.length - 6; i--) {
  lastFiveFlights.push(flights[i].to.concat("\n"));
}
alert("The last 5 flights of the day go to: \n" + lastFiveFlights.join(" "));
alert(`Thank you for using JS airlines, ${user}.`);
