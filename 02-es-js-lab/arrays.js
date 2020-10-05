var i, copy;
var employees = [
  { name: "John", age: 35 },
  { name: "Bill", age: 45 },
  { name: "Amy", age: 27 },
  {
    name: "Ivan",
    age: 27,
    qualifications: ["javascript", "React programing", "TDD"],
  },
];

var person1 = {};
person1.name = "Petar";
person1.age = 30;
person1.qualifications = ["javascript", "react", "react", "TDD"];

var person2 = new Object();
person2.name = "Dimitar";
person2.age = 40;
person2.qualifications = ["C++", ".NET"];

var person3 = Object.create(Object.prototype, {
  name: {
    value: "Stefan",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  age: {
    value: 35,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  qualifications: {
    value: ["javascript", "react16", "TDD"],
    writable: true,
    enumerable: true,
    configurable: true,
  },
});

employees.push(person1, person2, person3);
console.log("All available empl: ", employees.length);

//Shallow copy
// var copy = employees.slice(0);
// console.log(copy);
// console.log("Same?: ", employees === copy);
// console.log(employees[0] === copy[0]);

//Deep copy
// var deepCopy = JSON.parse(JSON.stringify(employees));
// console.log(deepCopy);
// console.log("Same?: ", employees === deepCopy);
// console.log(employees[0] === deepCopy[0]);

//every
//employee.hasOwnProperty('qualifications')
const areQualified = (employee) => {
  employee.qualifications &&
    employee.qualifications.lenghts &&
    employee.qualifications.lenghts > 0;
};
// Array.isArray(employee.qualifications);

// console.log(employees.every(areQualified));

// console.log(employees.every((employee) => employee.qualifications));

// var reactSomeDev = employees.some((empl) => {
//   var result =
//     empl.hasOwnProperty("qualifications") &&
//     empl.qualifications.indexOf("react") === -1;
//   console.log("Empl: ", empl.name, "use react: ", result);
//   return result;
// });
// console.log("React some dev:", reactSomeDev);

var isReactQualified = (empl) => {
  var result =
    empl.hasOwnProperty("qualifications") &&
    empl.qualifications.includes("react");
  /*console.log("Empl: ", empl.name, "use react: ", result);*/
  return result;
};

var reactAllDevs = employees
  .filter(isReactQualified)
  .map((e) => e.qualifications)
  .reduce((acc, qa) => acc.concat(qa), []);

// [...new Set(reactAllDevs)]
console.log("React all dev:", new Set(reactAllDevs));

//
//
//
// var copy = employees.slice(0);// shallow copy
// var copy = JSON.parse(JSON.stringify(employees)); // deep copy
// console.log(copy);
// console.log(copy[0] === employees[0]);

// var result = employees
//   .filter(function (employee) {
//     return employee.age < 40;
//   })
//   .map((emp, index) => ({ name: emp.name.toUpperCase(), index, age: emp.age }))
//   // .reduce( (accum, res) => accum + res.age, 0);
//   .forEach((res) => console.log(`${res.index} -> ${res.name}, ${res.age}`));

// console.log(result);
