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
            console.log(this.name)//here this refers to the global object
            //as it is a function call.
        }
        printName2()

        // now lets do the same thing but with arrow function
        const printName3 = ()=>{
            console.log(this.name)//it works because arrow functions does not
            //any this.it refers to it's sorrounding

            console.log(arguments)//it will not have any arguments propery
        }
        printName3(2,3,4)
    },
    
}
demoObject.printName()