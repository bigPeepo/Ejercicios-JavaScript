function solutionWrongAnsTurn(solution, wrongAnswer) {
  this.solution = solution;
  this.wrongAnswer = wrongAnswer;
}

let arrayToEncapsulateAndReplicate = {
  a: { solution: "anastasia", wrongAnswer: "aristogato" },
  b: { solution: "beer", wrongAnswer: "beauty" },
  c: { solution: "chhhh", wrongAnswer: "chorizo" },
};

let turnCounter = 1;

console.log(arrayToEncapsulateAndReplicate.length);

let ObjectToDisplay = {};

ObjectToDisplay.a = new solutionWrongAnsTurn("anagram", "otracosa");
ObjectToDisplay.b = new solutionWrongAnsTurn("bath", "sospechoso");
ObjectToDisplay.c = new solutionWrongAnsTurn("chaos", "corazon");

console.table(ObjectToDisplay);

console.table(arrayToEncapsulateAndReplicate);
