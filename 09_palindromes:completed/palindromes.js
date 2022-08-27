const {log}=console;

const palindromes = function (string) {
const original = string.replace(/[\s,\.\-\_()!]/g, "").toLowerCase();
const inverse  = [...original].reverse().join('')
log({original, inverse})
return (original===inverse);
};


log(palindromes("racecar"));
// Do not edit below this line
module.exports = palindromes;
