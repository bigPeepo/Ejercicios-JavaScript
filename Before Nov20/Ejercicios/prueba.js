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

/* const dictionary = {
  0: ["A", "K", "T", "F", "O", "Y"],
  1: ["B", "L", "U", "G", "P", "Z"],
  2: ["C", "M", "V", "H", "Q", "."],
  3: ["D", "N", "W", "I", "R", ","],
  4: ["E", "Ñ", "X", "J", "S", " "],
};

const letterIndex = (letter) => {
  for (let i = 0; i < Object.values(dictionary).length; i++) {
    if (Object.values(dictionary[i]).includes(letter.toUpperCase())) {
      return i;
    }
  }
};

const stringIntoNumbers = (text) => {
  let numberString = "";
  for (let i = 0; i < text.length; i++) {
    numberString += letterIndex(text[i]);
  }
  return +numberString;
};

const textInto4DigitStrings = (...arg) => {
  let numbersOutOfText = [];
  for (let i = 0; i < arg.length; i++) {
    numbersOutOfText.unshift(stringIntoNumbers(arg[i]));
  }
  return numbersOutOfText;
};

//console.log(stringIntoNumbers("Hola"));
console.log(textInto4DigitStrings("HI  ", "WE  ", "NEED", "HELP")); */

/* const toEncrypt = "CODERS";

const toOddsAndPairs = (word) => {
  const encryptedOddsAndPairs = {
    a: [],
    b: [],
  };
  for (let i = 1; i < word.length + 1; i++) {
    if (i % 2 === 0) {
      encryptedOddsAndPairs.b.push(word[i - 1]);
    }
    if (i % 2 !== 0) {
      encryptedOddsAndPairs.a.push(word[i - 1]);
    }
  }
  return encryptedOddsAndPairs;
};
//console.log(toSplit);

const orderOddsAndPairs = (oddsAndPairs) => {
  const romanEncrypted = [];
  for (let i = 0; i < oddsAndPairs.a.length; i++) {
    debugger;
    romanEncrypted.push(oddsAndPairs.a[i]);
    if (oddsAndPairs.b[i]) {
      romanEncrypted.push(oddsAndPairs.b[i]);
    }
  }
  return romanEncrypted;
};

const start = (word) => {
  console.log("Word to be encrypted: " + word);
  console.log(
    "Separating it into odds: " +
      toOddsAndPairs(word).a +
      " and pairs: " +
      toOddsAndPairs(word).b
  );
  console.log("Decrypting it back: " + orderOddsAndPairs(toOddsAndPairs(word)));
};

start("SEJAS DE ALISTE"); */

/* const units = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

const translator = (num) => {
  if (num < 10) {
    return units[num];
  }
  if (num < 20) {
    return teens[+num.toString()[1]];
  } else {
    const numToString = [];
    numToString.push(tens[+num.toString()[0]]);
    numToString.push(units[+num.toString()[1]]);
    return numToString.join("-");
  }
};

console.log(translator(55)); 
 */

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.";

const replacement1 = [",", ""];
const replacement2 = [".", ","];
const replacement3 = ["dolor", "potato"];
const replacement4 = ["lorem", "tomato"];
const replacement5 = ["labor", "cucumber"];
const replacement6 = ["consequatur", "garlic"];
const replacement7 = ["ipsum", "onion"];
const replacements = [
  replacement1,
  replacement2,
  replacement3,
  replacement4,
  replacement5,
  replacement6,
  replacement7,
];

let replacedText = lorem;

const replacer = (text, [arg, newWord]) => {
  replacedText = text.replaceAll(arg, newWord);
};

const massReplacer = () => {
  for (let index = 0; index < replacements.length; index++) {
    replacer(replacedText, replacements[index]);
  }
};

massReplacer();

console.log(replacedText);

/* const textSample = "Lorem onion potato";

const caseChecker = (text, wordToReplace, newWord) => {
  let wordHelper = "";
  if (text.toUpperCase().includes(wordToReplace.toUpperCase())) {
    wordHelper = text.toUpperCase().match(wordToReplace).toUpperCase();
    console.log(wordHelper);
  }
};

let value = "Onion";
debugger;
caseChecker(textSample, "onion", value);
 */
