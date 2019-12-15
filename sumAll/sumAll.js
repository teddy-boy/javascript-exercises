const sumAll = function(firstNumber, secondNumber) {
  if (typeof(firstNumber) != 'number'  || typeof(secondNumber) != 'number' || firstNumber < 0 || secondNumber < 0) {
    return 'ERROR';
  } else if (firstNumber > secondNumber) {
    let tempVariable = firstNumber;
    firstNumber = secondNumber;
    secondNumber = tempVariable;
  }
  let sum = 0;
  for (let i = firstNumber; i <= secondNumber; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll
