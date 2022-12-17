# Data Structures

We'll discuss some common data structures and some operators in this section [Click here](./../readme.md) to go back to the main page.

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
console.log(x, y, z);
console.log(arr);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
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
console.log(menu, starters);

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
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
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
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
```
