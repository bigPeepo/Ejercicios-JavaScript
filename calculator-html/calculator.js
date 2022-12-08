// Variable declarations:

const DISPLAY_MAX_CHARACTERS = 8;

let savedDisplay, operatorsInARowCounter;

const operationsDefaultStatus = () => ({
  division: false,
  multiplication: false,
  sum: false,
  rest: false,
  start: false,
});

let operationsStatus = operationsDefaultStatus();

const display = document.getElementById("displayid");

const divisor = document.getElementById("/");

const multiplyer = document.getElementById("x");

const substractor = document.getElementById("-");

const adder = document.getElementById("+");

const buttons = Array.from(document.getElementsByClassName("button"));

// Adding event listeners:

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        allClear();
        break;

      case "⁺/-":
        negation();
        break;

      case "%":
        percentage();
        break;

      case ".":
        comma();
        break;

      case "÷":
        operatorAction("division");
        break;

      case "×":
        operatorAction("multiplication");
        break;

      case "-":
        operatorAction("rest");
        break;

      case "+":
        operatorAction("sum");
        break;

      case "=":
        equal();
        break;

      default:
        return printANumber(e.target.innerText);
    }
  });
});

// Calculator working functions:

const allClear = () => {
  display.innerText = 0;
  savedDisplay = "";
  operatorsInARowCounter = 0;
  operationsStatus = operationsDefaultStatus();
  // operatorsDefaultColors();
};

const negation = () => {
  display.innerText = display.innerText * -1;

  checkValidNumber();
};

const percentage = () => {
  display.innerText = display.innerText / 100;

  checkValidNumber();
};

const comma = () => {
  if (!display.innerText.includes(".")) display.innerText += ".";
};

const operatorAction = (action) => {
  operatorsInARowCounter++;

  if (savedDisplay && operatorsInARowCounter < 2) {
    equal();
  }

  operationsStatus = operationsDefaultStatus();

  operationsStatus.start = true;

  operationsStatus[action] = true;

  savedDisplay = display.innerText;

  operatorsHighlight();
};

const equal = () => {
  if (operationsStatus.division) {
    divideThis();
  }
  if (operationsStatus.multiplication) {
    multiplyThis();
  }
  if (operationsStatus.rest) {
    restThis();
  }
  if (operationsStatus.sum) {
    sumThis();
  }
  checkValidNumber();

  operatorsHighlight();
};

const divideThis = () => {
  display.innerText = savedDisplay / display.innerText;

  operationsStatus.division = false;
};

const multiplyThis = () => {
  display.innerText = savedDisplay * display.innerText;

  operationsStatus.multiplication = false;
};

const restThis = () => {
  display.innerText = savedDisplay - display.innerText;

  operationsStatus.rest = false;
};

const sumThis = () => {
  display.innerText = +savedDisplay + +display.innerText;

  operationsStatus.sum = false;
};

const printANumber = (number) => {
  if (display.innerText === "0") {
    display.innerText = number;

    operatorsInARowCounter = 0;
    return;
  }

  if (
    display.innerText.toString().length >= DISPLAY_MAX_CHARACTERS &&
    !operationsStatus.start
  ) {
    return;
  }

  if (operationsStatus.start) {
    operationsStatus.start = false;

    display.innerText = "";
  }

  display.innerText += number;

  operatorsInARowCounter = 0;
};

// Shielding the display from unsavory results:

const shortenThisNumber = () => {
  const isExponential = display.innerText.includes("e");
  const hasComma = display.innerText.includes(".");

  if (!hasComma || isExponential) {
    toExponential(display.innerText);

    return;
  }

  display.innerText = display.innerText.slice(0, DISPLAY_MAX_CHARACTERS);

  if (display.innerText[display.innerText.length - 1] === ".") {
    display.innerText = display.innerText.slice(0, -1);
  }
};

const toExponential = (num) => {
  display.innerText = (+num).toExponential(0);
};

const checkForNaN = () => {
  if (isNaN(+display.innerText) || display.innerText === "Infinity") {
    display.innerText = "Error";
  }
};

const checkValidNumber = () => {
  const isExponential = display.innerText.includes("e");

  if (display.innerText.length > DISPLAY_MAX_CHARACTERS || isExponential) {
    shortenThisNumber();
  }

  checkForNaN();
};

// Adding a highlight when operators are active:

const operatorsHighlight = () => {
  operatorsDefaultColors();
  if (operationsStatus.division) {
    divisor.classList.add("active");
  }
  if (operationsStatus.multiplication) {
    multiplyer.classList.add("active");
  }
  if (operationsStatus.rest) {
    substractor.classList.add("active");
  }
  if (operationsStatus.sum) {
    adder.classList.add("active");
  }
};

const operatorsDefaultColors = () => {
  divisor.classList.remove("active");
  multiplyer.classList.remove("active");
  substractor.classList.remove("active");
  adder.classList.remove("active");
};
