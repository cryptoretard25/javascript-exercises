const { log } = console;

const caesar = function (string, shift) {
  const render = (min, max, index) => {
    return index > max
      ? String.fromCharCode(index - 26)
      : index < min
      ? String.fromCharCode(index + 26)
      : String.fromCharCode(index);
  };

  const encode = (char) => {
    const SHIFT = shift > 26 || shift < -26 ? shift % 26 : shift;
    const INDEX = char.charCodeAt() + SHIFT;
    if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
      return render(65, 90, INDEX);
    } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      return render(97, 122, INDEX);
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
