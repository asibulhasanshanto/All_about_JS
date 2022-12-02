// this returns an empty object in nodejs
console.log(this);

// hoisting

// variable hoisting
console.log(variable1)// undefined
var variable1 = 1;
console.log(variable1)// 1

// function hoisting

// function declaration
console.log(func1)// [Function: func1]
function func1() {
    console.log('func1')
}
console.log(func1)// [Function: func1]

// function expression
console.log(func2)// undefined
var func2 = function() {
    console.log('func2')
}
console.log(func2)// [Function: func2]

// scope chain

// global scope
var globalVariable = 1;
function globalFunc() {
    console
}

// function scope
function func() {
    var localVariable = 2;
    function localFunc() {
        console.log(localVariable);
        localVariable = 3;
        console.log(localVariable);
    }
    localFunc();
}
func();

// block scope
if (true) {
    let blockVariable = 3;
}
// console.log(blockVariable);//error
