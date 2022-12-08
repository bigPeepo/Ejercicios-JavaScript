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
  operatorsDefaultColors();
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
  const hasComma = display.innerText.includes(".");

  const lengthBeforeComma = hasComma && display.innerText.split(".")[0].length;
  const lengthAfterComma = hasComma && display.innerText.split(".")[1].length;
  const isExponential = display.innerText.includes("e");
  const numberBeforeComma = hasComma && display.innerText.split(".")[0];
  const numberAfterComma = hasComma && display.innerText.split(".")[1];
  const numberLength = display.innerText.length;
  const commaLength = 1;

  debugger;

  if (
    display.innerText.toString().split(".")[0].length >
      DISPLAY_MAX_CHARACTERS ||
    display.innerText.toString().includes("e")
  ) {
    toExponential(display.innerText);
  }

  if (
    display.innerText.toString().includes(".") &&
    display.innerText.toString().split(".")[0].length +
      display.innerText.toString().split(".")[1].length >
      DISPLAY_MAX_CHARACTERS
  ) {
    let numLength = display.innerText.toString().split(".")[0].length;

    display.innerText =
      display.innerText.toString().split(".")[0] +
      "." +
      display.innerText
        .toString()
        .split(".")[1]
        .slice(0, DISPLAY_MAX_CHARACTERS - numLength);
  }

  if (display.innerText.toString().includes(".")) {
    display.innerText = display.innerText
      .toString()
      .slice(0, DISPLAY_MAX_CHARACTERS);
  }

  if (display.innerText[7] === ".") {
    display.innerText = display.innerText.slice(0, DISPLAY_MAX_CHARACTERS - 1);
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
  display.innerText = parseFloat(display.innerText);

  shortenThisNumber();

  checkForNaN();
};

// Adding a highlight when operators are active:

const operatorsHighlight = () => {
  if (operationsStatus.division) {
    operatorsDefaultColors();

    divisor.style.backgroundColor = "white";
    divisor.style.color = "orange";
  } else if (operationsStatus.multiplication) {
    operatorsDefaultColors();

    multiplyer.style.backgroundColor = "white";
    multiplyer.style.color = "orange";
  } else if (operationsStatus.rest) {
    operatorsDefaultColors();

    substractor.style.backgroundColor = "white";
    substractor.style.color = "orange";
  } else if (operationsStatus.sum) {
    operatorsDefaultColors();

    adder.style.backgroundColor = "white";
    adder.style.color = "orange";
  } else {
    operatorsDefaultColors();
  }
};

const operatorsDefaultColors = () => {
  divisor.style.backgroundColor = "";
  multiplyer.style.backgroundColor = "";
  substractor.style.backgroundColor = "";
  adder.style.backgroundColor = "";
  divisor.style.color = "";
  multiplyer.style.color = "";
  substractor.style.color = "";
  adder.style.color = "";
};
