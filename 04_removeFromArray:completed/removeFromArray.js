const removeFromArray = function(arr, ...rem) {
    return arr.filter((value) => !rem.includes(value));
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)); // should remove and return []
// Do not edit below this line
module.exports = removeFromArray;
