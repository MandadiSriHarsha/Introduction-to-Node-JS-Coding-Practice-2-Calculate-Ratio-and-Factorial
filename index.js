const factorialOfNumber = require("../factorial/index.js");
const ratioOfNumbers = require("../ratio/index.js");
const ratioAndFactorial = (num1, num2, num3) => {
  const ratio = ratioOfNumbers(num1, num2);
  const factorial = factorialOfNumber(num3);
  return { ratio, factorial };
};
console.log(ratioAndFactorial(4, 2, 3));

module.exports = ratioAndFactorial;
