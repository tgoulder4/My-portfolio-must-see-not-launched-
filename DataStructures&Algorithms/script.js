let myArr = ["1", "2", "3", "4", "5"];
const sumNums = function (arr) {
  return myArr.keys();
};
console.log(sumNums(myArr));
// Behind the scenes, when you declare an array in JavaScript like this:
// let myArr = ["1", "2", "3", "4", "5"];
// You're actually doing several things:

// Array creation: JavaScript creates a new array object in memory, which consists of five index-property pairs. The keys are numerical indices, starting from 0 and ending at 4, and the values are the elements you've given: "1", "2", "3", "4", "5".

// Variable declaration and assignment: The let keyword declares a new variable myArr. This variable is a reference to the array you've created. It points to the location in memory where the array object is stored.
