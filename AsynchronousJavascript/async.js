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

// asyncBasic();

// creating simple promise and using it
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

// simplePromise();

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

// promisifySetTimeout();

const asyncAwait = function () {
  // Returning Values from Async Functions
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      resolve({latitude: '88.612097', longitude: '24.374403'});
    });
  };
  const whereAmI = async function () {
    try {
      // Geolocation
      const pos = await getPosition();
      const { latitude: lat, longitude: lng } = pos;
      // Reverse geocoding
      const resGeo = await fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json`
      );
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
};

asyncAwait();
