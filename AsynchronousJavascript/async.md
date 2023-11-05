# Asynchoronous Javascript
[Back](./../readme.md)

**_Callback doesn't mean asynchoronous code_**

1. [simple asynchronous code and synchronous code](#simple-asynchronous-code-and-synchronous-code)
2. [How asynchronous code works in javascript](#how-asynchronous-code-works-in-javascript)
3. [Event loop Simulation](#event-loop-simulation)
4. [Promises](#promises)
5. [Using async await pattern to write asynchronous code](#using-async-await-pattern-to-write-asynchronous-code)
6. [Runnung promises in parallel](#runnung-promises-in-parallel)

## simple asynchronous code and synchronous code

```javascript
var asyncBasic = function () {
  // synchoronous code
  console.log("1");
  console.log("2");
  console.log("3");
  console.log("4");

  // Asynchronous code
  setTimeout(() => {
    console.log("a1");
    setTimeout(() => {
      console.log("a2");
      setTimeout(() => {
        console.log("a3");
        setTimeout(() => {
          console.log("a4");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);

  console.log("Finishline");
};
asyncBasic();

// output
// 1
// 2
// 3
// 4
// Finished
// a1
// a2
// a3
// a4
```

## How asynchronous code works in javascript

whenever a function is called, it is placed on the execution stack. If the function is asynchronous, like setTimeout or fetch, it is taken out of the stack and placed in the web api. Then the execution stacks performs its task normally in a synchoronous manner. After that, when the async function finishes it's execution, the callback function is placed in the callback queue. The event loop checks if the execution stack is empty. If it is empty, it takes the callback function from the callback queue and places it in the execution stack. Then the callback function is executed.

![Asynchronous code](/AsynchronousJavascript/asynchronous_js_behind.PNG)

## Event loop Simulation

![Event loop](/AsynchronousJavascript/event-loop.gif)

## Promises

**_Promises are the container for the future value._**

### lifycycle of promises

![Promises](/AsynchronousJavascript/promise_lifecycle.PNG)

### Promise example

Here we have a promise named lotteryPromise which resolves or rejects depending on a random value. and then we consumed it using then and catch block. If the promise is resolved then it would go to the then block and if it rejects, it'll go to the catch block

```javascript
// creating simple promise

var simplePromise = function () {
  const lotteryPromise = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5) {
      resolve("You Win");
    } else {
      reject(new Error("You Lose"));
    }
  });

  lotteryPromise
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

simplePromise();

// promisify setTimeout
var promisifySetTimeout = function () {
  const wait = function (seconds) {
    return new Promise((resolve) => {
      setTimeout(resolve, seconds * 1000);
    });
  };

  wait(2)
    .then(() => {
      console.log("I waited for 2 seconds");
      return wait(1);
    })
    .then(() => {
      console.log("I waited for 1 second");
      return wait(3);
    })
    .then(() => {
      console.log("I waited for 3 second");
    });
};

promisifySetTimeout();
/* output
I waited for 2 seconds
I waited for 1 second
I waited for 3 second
*/
```

## Using async await pattern to write asynchronous code

There was a problem in the .then and .catch way of handling promises. We can see a long chain of then block. It does not look good and not very readable. That's why the async await pattern was introduced. It makes the code more readable and easy to understand. It is also very easy to write. We just need to put async keyword before the function and await keyword before the promise. We can also use try catch block to handle the error. We can also use the await keyword in a for loop to make the code more readable.

```javascript
// Returning Values from Async Functions
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    resolve({ latitude: "88.612097", longitude: "24.374403" });
  });
};
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos;
    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error("Problem getting location data");
    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error("Problem getting country");
    const data = await res.json();
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} 💥`);
    // Reject promise returned from async function
    throw err;
  }
};
console.log("1: Will get location");
const city = whereAmI();
console.log(city);
```

## Runnung promises in parallel
Sometimes we need several asyncoronous funcions in a particuar place or time. so, insted of awaiting the functions one by one, we can await just one function which will return all the promises. It'll be more efficient and faster.

The function Promise.all() takes an array of promises and returns an array of resolved values. If any of the promises is rejected, the whole promise.all() will be rejected.

```javascript
// Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c1}`
    // );
    // const [data2] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c2}`
    // );
    // const [data3] = await getJSON(
    //   `https://restcountries.eu/rest/v2/name/${c3}`
    // );
    // console.log([data1.capital, data2.capital, data3.capital]);
    const data = await Promise.all([
      getJSON(`https://restcountries.eu/rest/v2/name/${c1}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c2}`),
      getJSON(`https://restcountries.eu/rest/v2/name/${c3}`),
    ]);
    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries("portugal", "canada", "tanzania");
```

### Other promise functions

```javascript
const timeout = function (sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(`Resolved after ${sec} seconds`);
    }, sec * 1000);
  });
};

// 1.promise.race
const race = Promise.race([
  //it will return the first promise which is resolved. in this case it'll be the timeout(1)
  timeout(2),
  timeout(1),
  timeout(3),
]);

// 2.promise.allSettled
const allSettled = Promise.allSettled([
  //it will return the all the promises whether they are resolved or rejected
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
]);

// 3.promise.any
const any = Promise.any([
  //it will return the first promise which is resolved. in this case it'll be the timeout(1). But it'll ignore the rejected promises
  Promise.resolve("Success"),
  Promise.reject("Error"),
  Promise.resolve("Another success"),
]);
```
