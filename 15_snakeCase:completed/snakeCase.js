const { log } = console;

const snakeCase = function (string) {
  //replace symblols '..'+ '-' ', ' '?'+
  const remSymbolsSpaces = /\'|\.\s|\.+|-|\,\s|\?+/g;
  string = string.replace(remSymbolsSpaces, " ");
  //if camelCase
  if (string.indexOf(" ") < 0) {
    const findCamelCase = /([A-Z][a-z]*)/g;
    string = string.replace(findCamelCase, "_$1");
    return string.toLowerCase();
  }
  return string.trim().toLowerCase().replace(/\s/g, "_");
};

log(snakeCase("Hello World"));
log(snakeCase("Hello, World???"));
log(snakeCase("This is the song that never ends...."));
log(snakeCase("thisIsCamelCaseString"));
log(snakeCase("snake-case"));
log(snakeCase("SnAkE..CaSe..Is..AwEsOmE"));
// Do not edit below this line
module.exports = snakeCase;
