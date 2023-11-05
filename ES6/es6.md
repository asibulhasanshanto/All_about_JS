# Data Structures

[Back](./../readme.md)

## Index

1. [Let,const VS var](#letconst-vs-var)
2. [Arrow Functions](#arrow-functions)
3. [Destructuring](#destructuring)
4. [The Spread Operator](#the-spread-operator)
5. [Rest Pattern and Parameters](#rest-pattern-and-parameters)
6. [Short Circuiting (&& and ||)](#short-circuiting--and-)
7. [The Nullish Coalescing Operator (??)](#the-nullish-coalescing-operator-)
8. [Logical assignment operators](#logical-assignment-operators)
9. [Maps](#maps)
10. [Iterators and generators](#iterators-and-generators)
11. [Sets](#sets)

## let,const VS var

var is function scopped.But Let and const are block scoped. Let's see some examples

```js
const varTest = function () {
  console.log(variable1); //undefined
  var variable1 = true;
  console.log(variable2); //undefined
  if (variable1) {
    var variable2 = "hello";
  }
  console.log(variable2); //hello
};

const letTest = function () {
  console.log(variable1); //ReferenceError: Cannot access 'variable1' before initialization
  let variable1 = true;
  if (variable1) {
    let variable2 = "hello";
  }
  console.log(variable2); //ReferenceError: variable2 is not defined
};
varTest();
letTest();
```

here, in both cases, variable2 is decleared inside a block. But in case of var, it is accessible outside the block. But in case of let, it is not accessible outside the block.

One more thing is happening here, Var and let/const both are hoisted. But, we can not use let/const before declearation. But we can use var before declearation. But it will be undefined.

## Arrow Functions

Arrow functions are a new way to write functions in ES6.The share the this keyword with the parent scope. They are not suitable for methods and constructors.

```js
// Arrow functions
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
  return 2016 - el;
});

console.log(ages5);

// ES6
let ages6 = years.map((el) => 2016 - el);
console.log(ages6);

// Example of this keyword
const obj = {
  name: "Asibul",
  printName: function () {
    const innerFunc = function () {
      console.log(this.name + " from normal function");
    };

    const innerArrowFunc = () => {
      console.log(this.name + " from arrow function");
    };

    innerFunc();
    innerArrowFunc();
  },
};

//output
// undefined from normal function
// Asibul from arrow function
```

In the above example, the innerFunc is a normal function. So, it has its own this keyword and there is no name property in it. But the innerArrowFunc is an arrow function. So, it shares the this keyword with the parent scope.And the this of the parent refers to the obj object. So, it has the name property.

## Destructuring

Destructuring is a way to extract data from arrays and objects. It is a very useful feature in ES6.

### Array Destructuring

```js
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4
console.log(arr); // [2, 3, 4]

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;// 2 [5, 6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
```

### Object Destructuring

```js
// Destructuring Objects
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "Via del Sole, 21",
  starterIndex: 1,
});

const restuarant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); // [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b); //23 7

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
```

## The Spread Operator

The spread operator is a very useful operator in ES6. It is used to expand an array or an object into its elements.

```js
// The Spread Operator (...)

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[ 1, 2, 7, 8, 9 ]

const newArr = [1, 2, ...arr];
console.log(newArr); //[ 1, 2, 7, 8, 9 ]

console.log(...newArr); //1 2 7 8 9
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
```

## Rest Pattern and Parameters

The rest pattern is used to collect multiple elements and condense them into an array.

```js
// Rest Pattern and Parameters in arrays
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); //1 2 [ 3, 4, 5 ]

// Objects
const oldObj = {
  param1: 1,
  param2: 2,
  param3: 3,
};
const { param1, ...newObj } = oldObj;
console.log(newObj); //{ param2: 2, param3: 3 }

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);
```

## Short Circuiting (&& and ||)

```js
// Short Circuiting (&& and ||)

console.log("---- OR ----");
// returns the first truthy value otherwise the last value

console.log(3 || "Jonas"); //3
console.log("" || "Jonas"); //Jonas
console.log(true || 0); //true
console.log(undefined || null); //null

console.log(undefined || 0 || "" || "Hello" || 23 || null); //Hello

// replace of ternary operator by setting default value
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---- AND ----");
// returns the first falsy value otherwise the last value

console.log(0 && "Jonas"); //0
console.log(7 && "Jonas"); //Jonas

console.log("Hello" && 23 && null && "jonas"); //null

// checks if the method exists then calls the method
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
```

## The Nullish Coalescing Operator (??)

```js
// The Nullish Coalescing Operator (??)

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests); //10

// Nullish: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect); //0 (0 is not null or undefined. It would be 10 if it was null or undefined)
```

## Logical assignment operators

```js
// Logical Assignment Operators
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
```

## Maps

A Map object is a simple key/value map and can iterate its elements in insertion order.

```js
// Maps: Fundamentals
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal")); // Map(3) { 'name' => 'Classico Italiano', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal' }

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name")); // Classico Italiano

const time = 21;

console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // We are open :D

console.log(rest.has("categories")); // true

rest.delete(2);

console.log(rest.size); // 7

rest.clear();
```

## Iterators and generators

### Iterators

An iterator is an object that contains a countable number of values. An iterator is an object that can be iterated upon, meaning that you can traverse through all the values. Technically, in JavaScript, an iterator is an object which implements the iterator protocol, which consist of the methods next() and return().

```js
// Iterators and Generators
// Iterator example
const arr = ["a", "b", "c", "d", "e"];

const iter = arr[Symbol.iterator]();
console.log(iter.next()); // { value: 'a', done: false }
console.log(iter.next()); // { value: 'b', done: false }
console.log(iter.next()); // { value: 'c', done: false }
console.log(iter.next()); // { value: 'd', done: false }
console.log(iter.next()); // { value: 'e', done: false }
console.log(iter.next()); // { value: undefined, done: true }

// for-of loop
for (const item of arr) console.log(item); // a b c d e

// entries(), keys() and values()
const arr2 = ["a", "b", "c", "d", "e"];

const iter2 = arr2.entries();
console.log(iter2.next()); // { value: [ 0, 'a' ], done: false }
console.log(iter2.next()); // { value: [ 1, 'b' ], done: false }
console.log(iter2.next()); // { value: [ 2, 'c' ], done: false }
console.log(iter2.next()); // { value: [ 3, 'd' ], done: false }
console.log(iter2.next()); // { value: [ 4, 'e' ], done: false }
console.log(iter2.next()); // { value: undefined, done: true }

const iter3 = arr2.keys();
console.log(iter3.next()); // { value: 0, done: false }
console.log(iter3.next()); // { value: 1, done: false }
console.log(iter3.next()); // { value: 2, done: false }
console.log(iter3.next()); // { value: 3, done: false }
console.log(iter3.next()); // { value: 4, done: false }
console.log(iter3.next()); // { value: undefined, done: true }

const iter4 = arr2.values();
console.log(iter4.next()); // { value: 'a', done: false }
console.log(iter4.next()); // { value: 'b', done: false }
console.log(iter4.next()); // { value: 'c', done: false }
console.log(iter4.next()); // { value: 'd', done: false }
console.log(iter4.next()); // { value: 'e', done: false }
console.log(iter4.next()); // { value: undefined, done: true }
```

### Generators

A generator is a special type of function that works as a factory for iterators. A function becomes a generator if it contains one or more yield expressions and if it uses the function\* syntax.

```js
// Generators
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator();

console.log(gen.next()); // { value: 1, done: false }

for (const item of gen) console.log(item); // 2 3

const arr = [...generator()];

console.log(arr); // [ 1, 2, 3 ]

function* generator2() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen2 = generator2();

console.log(gen2.next()); // { value: 0, done: false }

for (const item of gen2) {
  if (item > 5) break;
  console.log(item); // 1 2 3 4 5
}

const arr2 = [...generator2()];

console.log(arr2); // [ 0, 1, 2, 3, 4, 5 ]
```

## Sets

A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

```js
// Sets
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' }

console.log(new Set("Jonas")); // Set(5) { 'J', 'o', 'n', 'a', 's' }

console.log(ordersSet.size); // 3

console.log(ordersSet.has("Pizza")); // true

ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
ordersSet.delete("Risotto");
// ordersSet.clear();

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

for (const order of ordersSet) console.log(order); // Pasta Pizza Garlic Bread
```
