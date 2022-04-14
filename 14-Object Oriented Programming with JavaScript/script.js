'use strict';
// =================== 1. FUNCTION CONSTRUCTOR ===================
/*

// Only difference between a constructor function & normal function is just the new operator
// Constructor function always start with a capital letter
console.time();
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS
  this.calcAge = function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  };
};

const jonas = new Person('Aakash', 2003);
console.log(jonas, jonas.calcAge());

// 1. New Empty {} object is created
// 2. Function is called & this keyword is set to the new object & this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, matilda.calcAge());
console.log(jack, jack.calcAge());

console.log(jonas instanceof Person);
console.timeEnd();

*/
