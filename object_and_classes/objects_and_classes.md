# Objects and Prototypes

[Back](./../readme.md)

## Index

1. [Objects](#objects)
2. [Prototypes and Prototype chains](#prototypes-and-prototype-chains)
3. [First class Functions](#first-class-functions)
4. [Immediately Invoked Function Expressions (IIFE)](#immediately-invoked-function-expressions-iife)
5. [Closures](#closures)
6. [Bind, Call and Apply](#bind-call-and-apply)

## Objects

Almost everything in javascript is an Object. Only the premitive values are not objects. Some premitive values are

### primitive values

1. Number
2. String
3. Boolean
4. Undefined
5. Null

### Objects

1. Arrays
2. Functions
3. Objects
4. Dates
5. Wrappers for Numbers, Booleans

## Prototypes and Prototype chains

Inheritence is a essential feature of any object oriented programming language. Javascript enablse inheritence by prototypes and prototype chaining.

![prototype_chain](/object_and_classes/prototype_chain.png)

Every javascript object has a prototype property. we put methods and properties in the prototype property which we want to be inherited by other objects.

whenever we call a method, first it searches for the object in the object, if it is not found there, it'll look for it in the prototype of the object. If it is not found there, it'll look for it in the prototype of the prototype of the object. This is called prototype chaining.

```javascript
var john = {
  name: "John",
  yearOfBirth: 1990,
  job: "teacher",
};

// function constructor
var Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// adding a method to the prototype property of Person
Person.prototype.calculateAge = function () {
  console.log(2016 - this.yearOfBirth);
};

// adding a property to the prototype property of Person
Person.prototype.lastName = "Smith";

// creating a new object using the Person constructor
var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
```

## First class Functions

Functions are first class functions in javascript. That means functions are treated as variables. We can pass functions as arguments to other functions, we can return functions from other functions and we can assign functions to variables.

### function as function argument

```javascript
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
```

### Higher order functions(returns functions)

A function that receives another function as an argument, that returns a new function or both is called a higher order function.

```javascript
function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else {
    return function (name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");
designerQuestion("Jane");
designerQuestion("Mark");
designerQuestion("Mike");

// or we can call the function directly
interviewQuestion("teacher")("Mark");
```

![higher_order_function](/object_and_classes/first_class_and_higher_order_functions.PNG)

## Immediately Invoked Function Expressions (IIFE)

when we want to create a new scope that is hidden from the outside scope, we can use IIFE. It is a function that is immediately invoked after it is created. It is used to create a new scope that is hidden from the outside scope.

```javascript
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}
game();

// using IIFE
(function () {
  var score = Math.random() * 10;
  console.log(score >= 5);
})();

// passing arguments to IIFE
(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);
})(5);
```

## Closures

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

```javascript
function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function (yearOfBirth) {
    var age = 2016 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

retirement(66)(1990);
```

**Here, the inner function has access to the variables and parameters of the outer function even after the outer function has returned. This is called closure.**

![clousers](/object_and_classes/closures.png)

## Bind, Call and Apply

### Call
The call() method calls a function with a given this value and arguments provided individually.

### Apply
The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

### Bind
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```javascript
var john = {
  name: "John",
  age: 26,
  job: "teacher",
  presentation: function (style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", Ladies and gentlemen! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! What's up? I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  },
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer",
};

john.presentation("formal", "morning");

//call
john.presentation.call(emily, "friendly", "afternoon");

// apply
john.presentation.apply(emily, ["friendly", "afternoon"]);

// bind returns a function
var johnFriendly = john.presentation.bind(john, "friendly");

johnFriendly("morning");
johnFriendly("night");
```
