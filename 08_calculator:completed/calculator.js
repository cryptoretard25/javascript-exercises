const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (!arr.length) return 0;
  return arr.reduce((a, b) => +a + +b);
};

const multiply = function (arr) {
  if (!arr.length) return 0;
  return arr.reduce((a, b) => +a * +b);
};

const power = function (number, power) {
  return Math.pow(number, power);
};

const factorial = function (number) {
  if (number === 1 || number === 0) return 1;
  else {
    return number * factorial(number - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
