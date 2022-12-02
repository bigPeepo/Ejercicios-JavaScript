let savedDisplay, division, multiplication, rest, sum;

let operationStart = false;

const printANumber = (number) => {
  if (display.innerText === "0") {
    display.innerText = number;
  } else if (display.innerText.toString().length >= 8 && !operationStart) {
  } else {
    if (operationStart) {
      operationStart = false;
      display.innerText = "";
    }
    display.innerText += number;
  }
};

const allClear = () => {
  display.innerText = 0;
  savedDisplay = "";
};

const negation = () => {
  display.innerText = display.innerText * -1;

  checkValidNumber();
};

const percentage = () => {
  display.innerText = display.innerText / 100;

  checkValidNumber();
};

const addComma = () => {
  if (!display.innerText.includes(".")) display.innerText += ".";
};

const divisionAction = () => {
  if (savedDisplay) {
    equal();
  }
  operationStart = true;
  division = true;
  savedDisplay = display.innerText;

  addRed();
};

const multiplicationAction = () => {
  if (savedDisplay) {
    equal();
  }
  operationStart = true;
  multiplication = true;
  savedDisplay = display.innerText;

  addRed();
};

const restAction = () => {
  if (savedDisplay) {
    equal();
  }
  operationStart = true;
  rest = true;
  savedDisplay = display.innerText;

  addRed();
};

const sumAction = () => {
  if (savedDisplay) {
    equal();
  }
  operationStart = true;
  sum = true;
  savedDisplay = display.innerText;

  addRed();
};

const equal = () => {
  if (division) {
    divideThis();
  }
  if (multiplication) {
    multiplyThis();
  }
  if (rest) {
    restThis();
  }
  if (sum) {
    sumThis();
  }

  addRed();
  checkValidNumber();
};

const divideThis = () => {
  display.innerText = savedDisplay / display.innerText;
  division = false;
};

const multiplyThis = () => {
  display.innerText = savedDisplay * display.innerText;
  multiplication = false;
};

const restThis = () => {
  display.innerText = savedDisplay - display.innerText;
  rest = false;
};

const sumThis = () => {
  display.innerText = +savedDisplay + +display.innerText;
  sum = false;
};

const checkForNaN = () => {
  if (isNaN(+display.innerText) || display.innerText === "Infinity") {
    display.innerText = "Error";
  }
};

const shortenThisNumber = () => {
  if (display.innerText.toString().includes(".")) {
    display.innerText = display.innerText.toString().slice(0, 8);
  }

  if (display.innerText.toString().length > 8) {
    toExponential(display.innerText);
  }
};

const toExponential = (num) => {
  display.innerText = (+num).toExponential(0);
};

const checkValidNumber = () => {
  checkForNaN();
  shortenThisNumber();
  display.innerText = parseFloat(display.innerText);
};

const addRed = () => {
  if (division) {
    divisor.style.backgroundColor = "white";
    divisor.style.color = "orange";
    multiplyer.style.backgroundColor = "orange";
    multiplyer.style.color = "white";
    substractor.style.backgroundColor = "orange";
    substractor.style.color = "white";
    adder.style.backgroundColor = "orange";
    adder.style.color = "white";
  } else if (multiplication) {
    divisor.style.backgroundColor = "orange";
    divisor.style.color = "white";
    multiplyer.style.backgroundColor = "white";
    multiplyer.style.color = "orange";
    substractor.style.backgroundColor = "orange";
    substractor.style.color = "white";
    adder.style.backgroundColor = "orange";
    adder.style.color = "white";
  } else if (rest) {
    divisor.style.backgroundColor = "orange";
    divisor.style.color = "white";
    multiplyer.style.backgroundColor = "orange";
    multiplyer.style.color = "white";
    substractor.style.backgroundColor = "white";
    substractor.style.color = "orange";
    adder.style.backgroundColor = "orange";
    adder.style.color = "white";
  } else if (sum) {
    divisor.style.backgroundColor = "orange";
    divisor.style.color = "white";
    multiplyer.style.backgroundColor = "orange";
    multiplyer.style.color = "white";
    substractor.style.backgroundColor = "orange";
    substractor.style.color = "white";
    adder.style.backgroundColor = "white";
    adder.style.color = "orange";
  } else {
    divisor.style.backgroundColor = "orange";
    divisor.style.color = "white";
    multiplyer.style.backgroundColor = "orange";
    multiplyer.style.color = "white";
    substractor.style.backgroundColor = "orange";
    substractor.style.color = "white";
    adder.style.backgroundColor = "orange";
    adder.style.color = "white";
  }
};

//division then mult NaN

//factor the getelementsbyID

const display = document.getElementById("displayid");

const allClearer = document.getElementById("AC");

const comma = document.getElementById(",");

const negator = document.getElementById("+/-");

const percenter = document.getElementById("%");

const divisor = document.getElementById("/");

const multiplyer = document.getElementById("x");

const substractor = document.getElementById("-");

const adder = document.getElementById("+");

const evaluator = document.getElementById("=");

const zero = document.getElementById("0");

const one = document.getElementById("1");

const two = document.getElementById("2");

const three = document.getElementById("3");

const four = document.getElementById("4");

const five = document.getElementById("5");

const six = document.getElementById("6");

const seven = document.getElementById("7");

const eight = document.getElementById("8");

const nine = document.getElementById("9");

allClearer.addEventListener("click", allClear());

negator.addEventListener("click", negation());

percenter.addEventListener("click", percentage());

comma.addEventListener("click", addComma());

divisor.addEventListener("click", divisionAction());

multiplyer.addEventListener("click", multiplicationAction());

substractor.addEventListener("click", restAction());

adder.addEventListener("click", sumAction());

evaluator.addEventListener("click", equal());

const numbers = [zero, one, two, three, four, five, six, seven, eight, nine];

numbers.map((button) => {
  button.addEventListener("click", (e) => {
    return printANumber(e.target.innerText);
  });
});
