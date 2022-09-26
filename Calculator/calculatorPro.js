let newNumber;
let numberList = [];
function calculatorPro() {
  do {
    newNumber = prompt('Enter a number or press cancel to stop');
    numberList.push(newNumber);
 } while (isFinite(newNumber) && newNumber !== null);
  if (newNumber === null) {
    numberList.pop();
    calcResults();
  } 
  if (isFinite(newNumber) === false) {
    numberList.pop();
   if(confirm(`Syntax Error: the last value you introduced is ""${newNumber}"". \nThis is not a number and will NOT be included in the number Array. \nDo you want to include anymore numbers in the array?`)) {
     calculatorPro();
   } else {
     calcResults(); 
          }
   }
}
function calcResults() {
         let resultSum = parseInt(numberList[0]); // this line is added due to the [0] conundrum. 
         let resultRest = parseInt(numberList[0]); // [0] conundrum: this line is needed so results[0] is positive instead of being substracted to 0.
         let resultMult = parseInt(numberList[0]); // this item is added so the first item is positive instead of being multiplied to 0.
         let resultDiv = parseInt(numberList[0]); // this item is added so the first item is positive instead of dividing 0.
  if(numberList.length === 1) { if(confirm(`The square root of ${numberList[0]} is ${Math.round(Math.sqrt(numberList[0]) * 1000) / 1000}.\nDo you want to keep adding numbers to the array?`) === true) {calculatorPro();
      } else {return alert(`Thanks for using CalculatorPro!`);     
             }};
     for (let i = 1; i < numberList.length; i++) { // i = 1 due to [0] conundrum.
       resultSum = resultSum + parseInt(numberList[i]);
       resultRest = resultRest - parseInt(numberList[i]);
       resultMult = resultMult * parseInt(numberList[i]);       
       resultDiv = resultDiv / parseInt(numberList[i]);
     }
  let results = [resultSum, resultRest, resultMult, resultDiv]; //this is to limit to 3 decimal numbers.
  for (let i = 0; i < 4; i++){
    results[i] = Math.round(results[i] * 1000) / 1000;
  }
  
  if(confirm(`The results of the operations are the following: \n The numbers you selected are ${numberList}.\nThe sum amounts to ${results[0]}.\nThe rest amounts to ${results[1]}.\nThe multiplication amounts to ${results[2]}.\nThe division amounts to ${results[3]}.\nDo you wish to keep adding numbers to the array?`) === true) {
     calculatorPro();
   } else {alert(`Thanks for using CalculatorPro!`)}
}

calculatorPro();