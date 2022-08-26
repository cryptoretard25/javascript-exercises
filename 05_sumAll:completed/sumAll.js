const sumAll = function (a, b) {
  if (typeof a !== "number" || typeof b !== "number") return "ERROR";
  if (a < 0 || b < 0) return "ERROR";
  return a < b ? (b * (b + a)) / 2 : (a * (b + a)) / 2;
};
console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
// Do not edit below this line
module.exports = sumAll;
