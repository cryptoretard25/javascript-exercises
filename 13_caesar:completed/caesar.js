const { log } = console;

const caesar = function (string, shift) {
  const encode = (char) => {
    const SHIFT = shift > 26 || shift < -26 ? shift % 26 : shift;
    const INDEX = char.charCodeAt() + SHIFT;
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return INDEX > 90
        ? String.fromCharCode(INDEX - 26)
        : INDEX < 65
        ? String.fromCharCode(INDEX + 26)
        : String.fromCharCode(INDEX);
    } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      return INDEX > 122
        ? String.fromCharCode(INDEX - 26)
        : INDEX < 97
        ? String.fromCharCode(INDEX + 26)
        : String.fromCharCode(INDEX);
    } else return;
  };

  string = [...string];
  string.forEach((element, index) => {
    element.match(/[a-zA-Z]/)
      ? (string[index] = encode(element))
      : (string[index] = element);
  });
  return string.join("");
};

log(caesar("H", 23)); // simply shifts the letter by 1: returns 'B'
log(caesar("Hey", 5)); // returns 'Mjd'
log(caesar("Hello, World!", -3));
log(caesar("Z", 1)); // returns 'A'
log(caesar("Mjqqt, Btwqi!", -5)); // returns 'Hello, World!'
//Do not edit below this line
module.exports = caesar;
