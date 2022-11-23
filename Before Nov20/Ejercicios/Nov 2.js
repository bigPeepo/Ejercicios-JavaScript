/* const getHobbies = () => {
  do {
    hobby = prompt("Hobby");
    if (hobby !== null && hobby !== "") {
      hobbies.push(hobby);
    }
  } while (hobby !== null);
  return hobbies;
}; */

/* const number = 1234;

const number2 = 4321;

const scrambler = (num, num2, multi) => {
  let umbernUmber2 = [];
  const umbern = [];
  const umbern2 = [];
  for (let i = 0; i < num.toString().length; i++) {
    umbern.unshift(+num.toString()[i] * multi);
  }
  for (let i = 0; i < num2.toString().length; i++) {
    umbern2.unshift(+num2.toString()[i] * multi);
  }
  umbernUmber2.push(+umbern.join(""));
  umbernUmber2.push(+umbern2.join(""));
  return umbernUmber2;
};

//console.log(scrambler(number, number2, 2));

const decrypter = (scrambledNumbersArray, dividend) => {
  let umbern2Helper = [];
  let umbernHelper = [];
  let umber2 = [];
  let umber = [];
  debugger;
  umbern2Helper = scrambledNumbersArray.pop();
  umbernHelper = scrambledNumbersArray.pop();
  umber2.unshift(
    +(umbern2Helper / dividend).toString()[umbern2Helper.toString().length - 1]
  );
  umber.unshift(
    +(umbernHelper / dividend).toString()[umbernHelper.toString().length - 1]
  );
  for (let i = umbern2Helper.toString().length - 2; i >= 0; i--) {
    umber2.push(+umbern2Helper.toString()[i] / dividend);
  }
  for (let i = umbernHelper.toString().length - 2; i >= 0; i--) {
    umber.push(+umbernHelper.toString()[i] / dividend);
  }
  let numberNumber2 = [];
  numberNumber2.push(+umber.join(""));
  numberNumber2.push(+umber2.join(""));
  return numberNumber2;
};

const start = (number, number2, mult) => {
  toBeDecrypted = scrambler(number, number2, mult);
  console.log("Encrypted " + toBeDecrypted);
  console.log("Decryper " + decrypter(toBeDecrypted, mult));
};

start(number, number2, 2); */

const dictionary = {
  0: ["A", "K", "T", "F", "O", "Y"],
  1: ["B", "L", "U", "G", "P", "Z"],
  2: ["C", "M", "V", "H", "Q", "."],
  3: ["D", "N", "W", "I", "R", ","],
  4: ["E", "Ñ", "X", "J", "S", " "],
};

const letterIndex = (letter) => {
  debugger;
  return Object.values(dictionary).indexOf(
    Object.values(dictionary).find((element) => element > letter)
  );
};

const indexIntoNumbers = (indexNumber) => {
  return Object.keys(dictionary)[indexNumber];
};

const letterIntoNumber = (letter) => {
  letterIndex(letter.toString());
  console.log("Found letter " + letter + " index " + letterIndex(letter));
  indexIntoNumbers(letterIndex(letter.toString()));
  console.log("Found number " + indexIntoNumbers(letterIndex(letter)));
};
/* 
const textIntoNumbers = (text) => {
  let numberString = "";
  for (let i = 0; i < text.length; i++) {
    console.log("Text i " + text[i]);
    console.log("cl " + letterIntoNumber(text[i]));
    numberString += letterIntoNumber(text.toString()[i]);
  }
  console.log(numberString);
}; */

console.log(letterIndex("H"));
