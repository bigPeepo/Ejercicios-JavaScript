const fibo = (n) => {
  debugger;
  let num = 0;
  let num2 = 0;
  let arrayFibo = [];
  for (let i = 0; i < n; i++) {
    arrayFibo.push(num + num2);
    numAux = num;
    num = num2;
    num2 = numAux + num2;
    if (num2 === 0) [(num = 1)];
    console.log(arrayFibo);
  }
  for (let i = n; i > n; i--) {
    arrayFibo.push(num + num2);
    numAux = num;
    num = num2;
    num2 = numAux + num2;
    if (num2 === 0) [(num = 1)];
    console.log(arrayFibo);
  }
};

fibo(6);
