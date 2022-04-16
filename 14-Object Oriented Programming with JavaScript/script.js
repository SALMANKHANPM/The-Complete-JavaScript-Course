'use strict';
/*
// =================== 1. FUNCTION CONSTRUCTOR ===================

// Only difference between a constructor function & normal function is just the new operator
// Constructor function always start with a capital letter

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // NEVER DO THIS
  // this.calcAge = function () {
  //   this.age = new Date().getFullYear() - this.birthYear;
  //   console.log(this.age);
  // };
};

const jonas = new Person('Aakash', 1991);
console.log(jonas);

// 1. New Empty {} object is created
// 2. Function is called & this keyword is set to the new object & this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(jonas instanceof Person);

// =================== 2. PROTOTYPES ===================

// We created a method on Person object & passing using it in instances of that object
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(Person));

// __defineGetter__;
// __defineSetter__;
// __lookupGetter__;
// __lookupSetter__;
// __proto__;

// city;
// constructor;
// greet;
// hasOwnProperty;
// isPrototypeOf;
// propertyIsEnumerable;
// toLocaleString;
// toString;
// toValueOf;

Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of the prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 3, 5, 5, 2, 1]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.myCustomMethod = function () {
  return [...new Set(this)];
};

console.log(arr.myCustomMethod());
const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

/////////////////////////////////////////
/////////////////////////////////////////
/*
// ========= CODING-CHALLENGE-01 =========
const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function (speed) {
  this.speed += 10;
  console.log(this.speed);
};

car.prototype.brake = function (speed) {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new car('BMW', 120);
BMW.accelerate();
BMW.brake();

const Mercedes = new car('Mercedes', 95);
Mercedes.accelerate();
Mercedes.brake();

console.table(BMW);
*/
