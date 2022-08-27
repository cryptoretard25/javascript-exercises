const { log } = console;

const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  const PHI = 1.6180339887498948482;
  const phi = -0.6180339887498948482;

  const fib = Math.round((Math.pow(PHI, n) - Math.pow(phi, n)) / Math.sqrt(5));
  return fib;
};
fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
