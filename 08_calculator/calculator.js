const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = (array) => array.reduce((sum, array) => sum + array, 0);

const multiply = (array) => array.reduce((total, array) => total * array, 1);

const power = (a, b) => a ** b;

// const factorial = function(a) {
// 	if (a === 0 || a === 1) {
//     return 1;
//   } else {
//     return a * factorial(a - 1);
//   }
// };

const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
