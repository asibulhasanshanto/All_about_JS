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

  obj.printName();