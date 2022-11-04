function avenger(fullName, classRoom, city, job, studies, markAv) {
  this.fullName = fullName;
  this.classRoom = classRoom;
  this.city = city;
  this.job = job;
  this.studies = studies;
  this.markAv = markAv;
  this.description = function () {
    console.log(
      `${this.fullName}, ${this.classRoom},${this.city},${this.job},${this.studies},${this.markAv}.`
    );
  };
}

/* const keysLister = (object) => {
  console.log(Object.keys(object));
};

const valuesLister = (object) => {
  console.log(Object.values(object));
}; */

const peepo = new avenger(
  "Peepo",
  "S",
  "BCN",
  "Soft",
  "Escuela de la vida",
  100
);

const bulbasaur = new avenger(
  "Bulbasaur",
  "Primary",
  "Kanto",
  "Battle pokemon",
  "Leaf",
  80
);
const squirtle = new avenger(
  "Squirtle",
  "Primary",
  "Kanto",
  "Battle pokemon",
  "Water",
  90
);
const charmander = new avenger(
  "Charmander",
  "Primary",
  "Kanto",
  "Battle pokemon",
  "Fire",
  100
);

pokemonArray = [bulbasaur, squirtle, charmander];

const pokemonSearcher = (pokemon, type) =>
  pokemon.forEach((poke) => {
    if (poke.studies === type) {
      console.log("The pokemon is " + poke.fullName);
    }
  });

pokemonSearcher(pokemonArray, "Leaf");

const markAvArray = pokemonArray.map((poke) => {
  return poke.markAv;
});

const averageMarkAv =
  markAvArray.reduce((a, b) => a + b, 0) / markAvArray.length;
console.log(averageMarkAv);

const betterPokemon = (poke1, poke2) => {
  if (poke1.markAv > poke2.markAv) {
    console.log(poke1.fullName + " is better!");
  }
  if (poke1.markAv < poke2.markAv) {
    console.log(poke2.fullName + " is better!");
  }
  if (poke1.markAv === poke2.markAv) {
    console.log(
      poke1.fullName + " and " + poke2.fullName + " are of equal power!"
    );
  }
};

betterPokemon(charmander, bulbasaur);
