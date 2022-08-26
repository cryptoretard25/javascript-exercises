const { log } = console;
const leapYears = function (year) {
  return year % 4 !== 0 || (year % 100 == 0 && year % 400 !== 0) ? false : true;
};
log(leapYears(1996)); // is a leap year: returns true
log(leapYears(1985)); // is not a leap year: returns false
// Do not edit below this line
module.exports = leapYears;
