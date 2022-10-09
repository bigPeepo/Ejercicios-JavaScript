let numberList = [];

alert(
  "Welcome to Calculator Pro.\nInput one number to get it's square root, input a second one to show a series of operations."
);

function calculatorPro() {
  let promptValue;

  do {
    promptValue = prompt("Enter a number or press cancel to stop");

    if (promptValue === null && numberList.length === 0) {
      alert("You need at least a number.");
      continue;
    }

    if (promptValue === null) {
      break;
    }

    if (isNaN(promptValue) || promptValue === " " || promptValue === "") {
      alert("You can only input numbers.");
      continue;
    }

    if (!isNaN(promptValue) && !!promptValue) {
      numberList.push(+promptValue);
    }

    if (!numberList.length) {
      alert("You need at least a number.");
    }
  } while (promptValue !== null); //no lo estamos usando

  return calculatesResults(numberList);
}

function calculatesResults(numbers) {
  const firstValue = numbers[0] || 0;

  const results = {};

  if (numbers.length <= 1) {
    results.square = {
      message: "The square root of selected number is",
      value: Math.sqrt(firstValue),
    };
  }

  if (numbers.length > 1) {
    results.sum = {
      message: "The sum amounts to",
      value: firstValue,
    };
    results.rest = {
      message: "The rest amounts to",
      value: firstValue,
    };
    results.mult = {
      message: "The multiplication amounts to",
      value: firstValue,
    };
    results.div = {
      message: "The division amounts to",
      value: firstValue,
    };

    for (let i = 1; i < numbers.length; i++) {
      results.sum.value += numbers[i];
      results.rest.value -= numbers[i];
      results.mult.value *= numbers[i];
      results.div.value /= numbers[i];
    }
  }

  displayResults(results);
}

function displayResults(results) {
  let messages = [
    `The numbers you selected are ${numbers.length ? numbers : 0}`,
    `The results of the operations are the following:`,
  ];
  const continueMessage = "Do you wish to keep adding numbers to the array?";
  const finishMessage = "Thanks for using CalculatorPro!";

  Object.values(results).forEach((result) => {
    messages.push(`${result.message} ${parseFloat(result.value.toFixed(3))}`);
  });

  messages = messages.join("\n");

  alert(messages);

  if (confirm(continueMessage)) {
    return calculatorPro();
  }

  return alert(finishMessage);
}

calculatorPro();
