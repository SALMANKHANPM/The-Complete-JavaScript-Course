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

// ================== CODING CHALLENGE 02 ==================

/*

Your tasks:

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.

Test data:
§ Data car 1: 'Ford' going at 120 km/h


GOOD LUCK 😀



class Carcl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    this.speed = value * 1.6;
  }
}

const BMW = new Carcl('BMW', 120);
console.log(BMW);

console.log(BMW.speedUS);
*/

// ================== INHERITANCE BETWEEN CLASSES: CONSTRUCTOR FUNCTIONS ==================
/*
{things we learned here: setting call method() , using Object.create() as a filling gap for inheritance }

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

console.log(Student.prototype);

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};

const mike = new Student('Mike', 1990, 'CS');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);

console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
*/

// ========= CODING CHALLEGE 03 =========

/*
Your tasks:

1. Use a constructor function to implement an Electric Car (called 'EV') as a child
"class" of 'Car'. Besides a make and current speed, the 'EV' also has thecurrent battery charge in % ('charge' property)

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20,
and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
km/h, with a charge of 22%'

4. Create an electric car object and experiment with calling 'accelerate',
'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism �

Test data:
§ Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😄


const Car = function (make, currentSpeed) {
  this.make = make;
  this.currentSpeed = currentSpeed;
};

const EV = function (make, currentSpeed, charge) {
  Car.call(this, make, currentSpeed);
  this.charge = charge;

  this.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
  };

  this.accerlerate = function () {
    this.currentSpeed += 20;
    this.charge -= 1;
    console.log(
      `${this.make} going at ${this.currentSpeed} km/h, with a charge of ${this.charge}%`
    );
  };
};

EV.prototype = Object.create(Car.prototype);

const Tesla = new EV('Tesla', 120, 23);
Tesla.accerlerate();
Tesla.chargeBattery(90);
*/

// =========== INHERITANCE BETWEEN CLASSES: ES6 CLASSES ==================

/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method: will get access to its instances
  // Methods are added to the prototype
  calcAge() {
    console.log(2022 - this.birthYear);
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

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first - Responsible for creating the this keyword in this subclass
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I am studying ${this.course}`);
  }

  // Overriding the parent method
  calcAge() {
    console.log(
      `I'm ${
        2022 - this.birthYear
      } years old but as a student I feel like more ${
        2022 - this.birthYear + 10
      }`
    );
  }
}

const Aakash = new StudentCl('Aakash Rao', 2003, 'CS');
Aakash.introduce();
Aakash.calcAge();
*/

// ========== INHERITANCE BETWEEN CLASSES: OBJECT.CREATE() ==================

/*
const PersonProto = {
  calcAge: function () {
    console.log(new Date().getFullYear() - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I am studying ${this.course}`);
};

jay.init('Jay', 2003, 'CS');
jay.introduce();
jay.calcAge();
*/
