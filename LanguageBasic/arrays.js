//-------------------------- every()----------------------
var everyFunc = function () {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result = arr.every(function (item, index, array) {
    return item > 2;
  });
  console.log(result); // false

  var result = arr.every(function (item, index, array) {
    return item > 0;
  });
  console.log(result); // true
};

//-------------------------- filter()----------------------
var filter = function () {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];
  const result = words.filter((word) => word.length > 6);
  console.log(result);
  // expected output: Array ["exuberant", "destruction", "present"]
};

// ------------------------------slice()----------------------
var sliceFunc = function () {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var result1 = arr.slice(2, 5);
  console.log(result1); // [3, 4, 5]
  var result2 = arr.slice(2);
  console.log(result2); // [3, 4, 5, 6, 7, 8, 9, 10]
  console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

// ------------------------------splice()----------------------
var spliceFunc = function () {
  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "Feb");
  // inserts at index 1
  console.log(months);
  // expected output: Array ["Jan", "Feb", "March", "April", "June"]

  months.splice(4, 1, "May");
  // replaces 1 element at index 4
  console.log(months);
  // expected output: Array ["Jan", "Feb", "March", "April", "May"]

  months.splice(1, 2);
  // removes 2 elements at index 1
  console.log(months);
  // expected output: Array ["Jan","April", "May"]
};

//------------------------entries()----------------------
var entriesFunc = function () {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var iterator = arr.entries();
  console.log(iterator.next().value); // [0, 1]
  console.log(iterator.next().value); // [1, 2]
  console.log(iterator.next().value); // [2, 3]
  console.log(iterator.next().value); // [3, 4]

  for (let e of arr.entries()) {
    console.log(e);
  }
  // [0, 1]
  // [1, 2]
  // [2, 3]
  // [3, 4]
  // [4, 5]
  // [5, 6]
  // [6, 7]
  // [7, 8]
  // [8, 9]
  // [9, 10]
};

function initialize() {
  everyFunc();
  filter();
  sliceFunc();
  spliceFunc();
  entriesFunc();
}

initialize();
