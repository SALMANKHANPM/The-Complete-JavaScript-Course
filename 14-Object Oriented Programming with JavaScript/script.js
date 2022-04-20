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

// =================== ES6 CLASSES ===================
/*
// class expression
// const PersonCl = class {};

// Class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods are added to the prototype
  calcAge() {
    this.age = new Date().getFullYear() - this.birthYear;
    console.log(this.age);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 2003);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__, PersonCl.prototype);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();
*/

// =================== GETTERS & SETTERS ===================
/*
// IN REGULAR OBJECT
const account = {
  owner: 'Aakash',
  movements: [200, -100, -300, 40],

  get latestMovement() {
    return this.movements.slice(-1).pop();
  },

  set latestMovement(value) {
    this.movements.push(value);
  },
};

console.log(account.latestMovement);
account.latestMovement = 50;
console.log(account.movements);

// IN ES6 CLASSES
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods are added to the prototype
  calcAge() {
    this.age = new Date().getFullYear() - this.birthYear;
    console.log(this.age);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      console.log(name);
      this._fullName = name;
    } else {
      alert('Please enter your full name');
    }
  }

  get fullName() {
    return this._fullName;
  }
}

const jessica = new PersonCl('Jessica Davis', 2003);
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1975);
console.log(walter);
*/

// =================== STATIC METHODS ===================
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log('Hey there 🙏🏼');
  console.log(this);
};

const Aakash = new Person('Aakash', 2003);
Person.hey();


class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method: will get access to its instances
  // Methods are added to the prototype
  calcAge() {
    this.age = new Date().getFullYear() - this.birthYear;
    console.log(this.age);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) {
      console.log(name);
      this._fullName = name;
    } else {
      alert('Please enter your full name');
    }
  }

  get fullName() {
    return this._fullName;
  }

  // Static method: will only be available to the class
  static hey() {
    console.log('Hey there 🙏🏼');
    console.log(this);
  }
}

PersonCl.hey();
*/
////////////////////////////////////////////////////
////////////////////////////////////////////////////

// ================== OBJECT.CREATE ==================
/*
const PersonProto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2003;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);
console.log(steven.__proto__ === PersonProto.prototype);
console.log(PersonProto.prototype);
console.log(steven.__proto__);
console.log(steven.__proto__.__proto__);

const Sarah = Object.create(PersonProto);
Sarah.init('Sarah', 2000);
Sarah.calcAge();
*/
