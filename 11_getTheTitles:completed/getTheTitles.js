const { log } = console;

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

const getTheTitles = function (books) {
    const temp = [];
    books.forEach((element, index) => {
        temp.push(element.title);
    });
    return temp
};


getTheTitles(books) // ['Book','Book2']
// Do not edit below this line
module.exports = getTheTitles;
