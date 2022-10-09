let numberList = [];
alert(
  "Welcome to the calculator program.\nInput one number to get it's square root, input a second one to show a series of operations."
);

function calculator() {
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
  } while (numberList.length < 2);

  return calculatesResults(numberList);
}

function calculatesResults(numberList) {
  const firstValue = numberList[0];
  const results = {};

  if (numberList.length <= 1) {
    results.square = {
      message: "The square root of selected number is",
      value: Math.sqrt(firstValue),
    };
  }

  if (numberList.length > 1) {
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

    for (let i = 1; i < numberList.length; i++) {
      results.sum.value += numberList[i];
      results.rest.value -= numberList[i];
      results.mult.value *= numberList[i];
      results.div.value /= numberList[i];
    }
  }

  displayResults(results);
}

function displayResults(results) {
  let messages = [
    `The numbers you selected are ${numberList.length ? numberList : 0}`,
    `The results of the operations are the following:`,
  ];

  Object.values(results).forEach((result) => {
    messages.push(`${result.message} ${parseFloat(result.value.toFixed(3))}`);
  });

  messages = messages.join("\n");

  alert(messages);

  return alert("Thanks for using Calculator!");
}

calculator();
