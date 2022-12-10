# Asynchoronous Javascript

***Callback doesn't mean asynchoronous code***

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

## Promises

***Promises are the container for the future value.***

### lifycycle of promises

![Promises](/AsynchronousJavascript/promise_lifecycle.PNG)

### Promise example

```javascript
// creating simple promise and using it
var simplePromise = function(){
    const lotteryPromise = new Promise((resolve,reject)=>{
        if(Math.random()>=0.5){
            resolve('You Win');
        }else{
            reject(new Error('You Lose'));
        }
    })

    lotteryPromise.then(res=>console.log(res)).catch(err=>console.error(err));
}

simplePromise();

// promisify setTimeout
var promisifySetTimeout = function(){
    const wait = function(seconds){
        return new Promise(resolve=>{
            setTimeout(resolve,seconds*1000);
        })
    }

    wait(2).then(()=>{
        console.log('I waited for 2 seconds');
        return wait(1);
    }).then(()=>{
        console.log('I waited for 1 second');
        return wait(3);
    }).then(()=>{
        console.log('I waited for 3 second');
    })
}

promisifySetTimeout();
/* output
I waited for 2 seconds
I waited for 1 second
I waited for 3 second
*/

```