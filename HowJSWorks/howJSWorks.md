
# JS behind the scene
[Click here](./../readme.md) to go back to the home page
## Index

1. [Execution Context](#execution-context)
2. [Hoisting](#hoisting)
3. [Scope](#scope)
4. [Scope Chain](#scope-chain)
5. [this keyword](#this-keyword)
6. [Primitive vs Reference Types](#primitive-vs-reference-types)

### Execution Context
Execution context is a container which stores variables and in which a piece of our code is evaluated and executed. There are two types of execution context:

 
<!-- show the executionC1 image in this folder -->
![Execution Context 1](/HowJSWorks/executionC1.PNG)

![Execution Context 2](/HowJSWorks/executionC2.PNG)

### Hoisting
variables and functions can be used before they are decleared.This is because of the creation phase of the execution context. In the creation phase, a variable object is created, which contains the function and variable declearations. The code is scanned for function declearations and for each function, a property is created in the variable object, pointing to the function. The same thing happens for variable declearations, but instead of pointing to the function, it points to undefined. This is called hoisting.

***Only function declerations has hoisting. function expressions are not hoisted.***

![Hoisting](/HowJSWorks/hoisting.PNG)

```javascript
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
```

### Scope
Scope is a place in which certain variables are decleared.

Scope of a variable is the region of your code where you have access to that variable. There are three types of scope:

1. Global Scope
2. Function Scope
3. Block Scope

![Scope](/HowJSWorks/scope.PNG)

### Scope Chain
Scope chain is a chain of parent scopes. When a variable is not found in the current scope, the scope chain is used to look for the variable in the parent scope. This process continues until the variable is found or the global scope is reached.

![Scope Chain](/HowJSWorks/scopeChain.PNG)

```javascript 
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
```

***Functions are block scopped if it is in strict mode.only let and const are block scopped.Var is function scopped but not block scopped.***

```javascript
    // global scope
    var globalVariable = 1;
    function globalFunc() {
        console.log(this);
    }
    globalFunc();// window

    // function scope
    function func() {
        var localVariable = 2;
        function localFunc() {
            console.log(this);
        }
        localFunc();// window
    }
    func();

    // block scope
    if (true) {
        let blockVariable = 3;
        console.log(this);// window
    }
```

### This Keyword
This keyword is a special keyword which is created for every execution context. It is not assigned a value until a function where it is defined is called. It is only assigned a value when the function is actually called.

![This Keyword](/HowJSWorks/this.PNG)

***All about THIS keyword***
```javascript
// function
var function1 = function(){
    console.log("Hello from function")
    console.log(arguments)
    // console.log(this)//refres to the global object
}
function1(2,4,'hi');

// methods 
const demoObject = {
    name:"Asibul Hasan",
    printName:function(){//method
        console.log(this.name)//this refers to the object
        // now create a function inside the object
        const printName2 = function(){
            console.log(this.name)//here this refers to the global object as it is a function call.
        }
        printName2()

        // now lets do the same thing but with arrow function
        const printName3 = ()=>{
            console.log(this.name)//it works because arrow functions does not any this.it refers to it's sorrounding

            console.log(arguments)//it will not have any arguments propery
        }
        printName3(2,3,4)
    },
    
}
demoObject.printName()
```

### Primitive VS Reference Types

![Primitive VS Reference Types](/HowJSWorks/primptive_vs_reference.PNG)