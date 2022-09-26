function calculatorPro(arrayOfNumbers) {
  let promptValue;
  let numberList = [];

  if (arrayOfNumbers) {
    numberList = arrayOfNumbers;
  }

  do {
    promptValue = prompt("Enter a number or press cancel to stop");

    if (promptValue === null) {
      break;
    }

    if (!isNaN(promptValue) && !!promptValue) {
      numberList.push(+promptValue);
    }

    if (!numberList.length) {
      alert("You need at least a number.");
    }
  } while (promptValue !== null); //no lo estamos usando

  return calcResults(numberList);
}

function calcResults(numbers) {
  const firstValue = numbers[0];

  if (numbers.length === 1) {
    if (
      confirm(
        `The square root of ${firstValue} is ${
          Math.round(Math.sqrt(firstValue) * 1000) / 1000
        }.\nDo you want to keep adding numbers to the array?`
      )
    ) {
      return calculatorPro([firstValue]);
    }

    return alert(`Thanks for using CalculatorPro!`);
  }

  const results = {
    sum: firstValue || 0,
    rest: firstValue || 0,
    mult: firstValue || 0,
    div: firstValue || 0,
  };
  for (let i = 1; i < numbers.length; i++) {
    results.sum += numbers[i];
    results.rest -= numbers[i];
    results.mult *= numbers[i];
    results.div /= numbers[i];
  }

  if (
    confirm(
      `The results of the operations are the following: \n The numbers you selected are ${
        numbers.length ? numbers : 0
      }.\nThe sum amounts to ${results.sum}.\nThe rest amounts to ${
        results.rest
      }.\nThe multiplication amounts to ${
        results.mult
      }.\nThe division amounts to ${
        results.div
      }.\nDo you wish to keep adding numbers to the array?`
    )
  ) {
    return calculatorPro(numbers);
  }
  return alert(`Thanks for using CalculatorPro!`);
}

calculatorPro();
