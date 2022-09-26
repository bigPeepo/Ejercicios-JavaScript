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
let user;
let ventana = [];
let average = [];
let resultSum = 0;
let scaleCount =0;
let ultimos5 = [];
//2- Esta aerolínea dispondrá de 10 vuelos para el día de hoy, para empezar, estos vuelos deben estar declarados de manera global, cuando se llame a la función (al final de este Readme, teneis un array con vuelos "inventados".)
//1- Se preguntará por el nombre de usuario y dará la bienvenida (via prompt).
//3- El usuario visualizará todos los vuelos disponibles de una forma amigable:
//El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
//4- Despues de visualizar todos los vuelos disponibles, el usuario verá el coste medio de los vuelos.
//5- También podrá ver cuántos vuelos efectúan escalas.
//6- Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
function username () {
user = prompt('What is your username?');
if (user === null) {
  username();
} else {alert(`Welcome to JS Airlines, ${user}.`)};
alert(`The following flights are available today:`)
}
username()
for (let i=0; i<flights.length; i++) {
if (flights[i].scale === true) {flights[i].escala = 'realizará una escala.\n\n' //creamos un value:key pair con la string para enunciar si hay escala;
scaleCount = scaleCount + 1;
} else {flights[i].escala = 'no realizará ninguna escala.\n\n'} 
flights[i].string = (( `El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un coste de ${flights[i].cost}€ y `).concat(flights[i].escala)) ;
ventana.push(flights[i].string);
}
alert(ventana.join(" ")) //join is used to remove the commas from the array.

for (let i=0; i < flights.length; i++) {
resultSum += parseInt(flights[i].cost);
}
average = resultSum/parseInt(flights.length);

alert(`The average cost of today's ${flights.length} flights is ${average.toFixed(2)}€. \nThe number of these ${flights.length} flights that have a scale is ${scaleCount}.`)

for (let i=flights.length-1; i>flights.length-5; i--) {
ultimos5.push(flights[i].to.concat('\n'));
}
alert("The last 5 flights of the day go to: \n" + ultimos5.join(" "));
alert(`Thank you for using JS airlines, ${user}.`)