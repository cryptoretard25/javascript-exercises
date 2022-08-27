const { log } = console;

const snakeCase = function (string) {
  //remove '..'+ '-' ', ' '?'+
  const regexp = /\.+|-|\,\s|\?+/g;
  string = string.replace(regexp, " ");
  //work with camelcase
  if (string.indexOf(" ") < 0) {
    string = string.replace(/([A-Z][a-z]*)/g, "_$1");
    return string.toLowerCase();
  }
  return string.trim().toLowerCase().replace(/\s/g, "_");
};

log(snakeCase("hello world"));
log(snakeCase("Hello, World???"));
log(snakeCase("This is the song that never ends...."));
log(snakeCase("thisIsCamelCaseString"));
log(snakeCase("snake-case"));
log(snakeCase("SnAkE..CaSe..Is..AwEsOmE"));
// Do not edit below this line
module.exports = snakeCase;
