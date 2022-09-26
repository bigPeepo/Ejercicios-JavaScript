//DECLARACIONES GLOBALES:
    let flights = [
      { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
      { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
      { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
      { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
      { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
      { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
      { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
      { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
      { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
      { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
      { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
    ];


//1. USER WELCOME
let user;
function username () {
  user = prompt('What is your username?');
  if (user === null) {
    username();
  } else {alert(`Welcome to JS Airlines, ${user}.`)};
  alert(`The following flights are available today:`)
  }

//2. FLIGHTSHOWER
let ventana = [];
function flightShower() {
  for (let i=0; i<flights.length; i++) {
      if (flights[i].scale === true) {flights[i].escala = 'realizará una escala.\n\n' //creamos un value:key pair con la string para enunciar si hay escala;
  scaleCount = scaleCount + 1;
  } else {flights[i].escala = 'no realizará ninguna escala.\n\n'} 
  flights[i].string = (( `ID ${flights[i].id} con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y `).concat(flights[i].escala)) ;
    ventana.push(flights[i].string);
  }alert(ventana.join(" "));
  }

//3. AVERAGE COST & SCALES
let average = [];
let resultSum = 0;
function priceAverage () {for (let i=0; i < flights.length; i++) {
resultSum += parseInt(flights[i].cost);
}
average = resultSum/parseInt(flights.length);
alert(`The average cost of today's ${flights.length} flights is ${average.toFixed(2)}€. \nThe number of these ${flights.length} flights that have a scale is ${scaleCount}.`)
}

//4. LAST 5 FLIGHTS
let scaleCount = 0;
let ultimos5 = [];
function last5 () {
for (let i=flights.length-1; i>flights.length-5; i--) {
  ultimos5.push(flights[i].to.concat('\n'));
  }
  alert("The last 5 flights of the day go to: \n" + ultimos5.join(" "));
  alert(`Thank you for using JS airlines, ${user}.`)
}

function start() {
  username();
  flightShower();
  priceAverage ();
  last5();
}
//start(); <--- ***LLAMAR AQUÍ***

//PRO:
//5. ADMIN vs USER
function askCredentials() {
  let credentials = prompt(`Which kind of user are you?\nUSER or ADMIN?`).toLowerCase() ;
}
if (credentials === "admin") {
  console.log("admin") //  ¿¿qué pasa si sí??
} 
if (credentials === "user") {
  console.log("user") // añadir también que no se sea user ni admin (nested ifs)?
} else { alert("Must pick between User or Admin Credentials.");
          askCredentials();
        }

    //6ADMIN. FLIGHT CREATION (15 max, no repetir ID, flightshow)
let indexId = [];
function indexer() { //relacionado con ID que no se pueden repetir
  for (i=0;i<flights.length;i++) {
  indexId.push(flights[i].id);
  }}
  indexer(); 
  console.log(indexId)
function flightFactory (id, to, from, cost, scale) {
      if(indexId.indexOf(id) !== -1) {return alert("There's already another flight with this ID")} ;
      if(flights.length >14) {alert('You\'ve reached the maximum of 15 flights.\nPlease delete a flight to be able to add a new one.')}           
      if(indexId.indexOf(id) === -1) {
        flights.push( {
      id,
      to,
      from,
      cost,
      scale
      });
      }  
      flightShower();
      indexer();
      }
    //7ADMIN: DELETING FLIGHTS (indexation, flightshow)

//6USER: PRICE SEARCH + FLIGHTSHOW + BUYING?

//7USER: PURCHASING & THANK YOU