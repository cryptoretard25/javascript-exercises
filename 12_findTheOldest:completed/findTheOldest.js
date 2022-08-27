const { log } = console;
const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (array) {
  const year = new Date().getFullYear();
  let temp = {};

  // Creating temp objects with properties of age and values of name
  [...array].forEach((el) => {
    if (!el.yearOfDeath) el.yearOfDeath = year;
    temp[el.yearOfDeath - el.yearOfBirth] = el.name;
  });
  log({ temp }); // temp: { '28': 'Carly', '29': 'Jane', '49': 'Ray' }

  // Get last temp object value
  temp = temp[Object.keys(temp)[Object.keys(temp).length - 1]];
  //get oldest object from array
  const oldest = array.find((element) => {
    return element.name === temp;
  });
  
  return oldest;
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
