var appMode;
(function (appMode) {
  appMode["development"] = "DEV";
  appMode["production"] = "PROD";
})(appMode || (appMode = {}));
var mode = appMode.development;
// console.log(mode)
var tuple = ["masum", 10, "ahmed"];
// console.log(tuple);

class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDtails() {
    return `${this.name} er boyos ${this.age}`;
  }
}


const masum = new Person('masum',20);

console.log(masum.getDtails());