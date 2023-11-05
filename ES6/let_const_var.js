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
