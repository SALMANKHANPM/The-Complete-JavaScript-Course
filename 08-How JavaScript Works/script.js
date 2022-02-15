'use strict';

// ============== THE SCOPE CHAIN TUTORIAL ==============
/*
function calcAge(birthYear) {
  const age = 2022 - birthYear;

  function printAge() {
    let output = `${firstName} You are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating new variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssing outer scopes variable
      output = `NEW OUTPUT!!`;

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Aakash';
calcAge(1991);

//============== HOISTING IN JAVASCRIPT ==============

// Variables
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Aakash';
let job = 'student';
const year = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example to show a mistake need to avoid
if (!numProducts) deleteShoppingCart(); // so the clear picture is even if our products is 10 not 0, we will be getting undefined because of hoisting of var variable & undefined is a falsy value so product is going to delete. VERY DANGEROUS!!!

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

// ============== THE THIS KEYWORD:- ==============
console.log(this);

// This keyword in Function Expression
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(this); // will be undefined in strict mode but window object in sloppy mode.
};
calcAge(2003);

// This keyword in Arrow Function
const calcAgeArrow = birthYear => {
  console.log(2022 - birthYear);
  console.log(this); // window object - uses lexical this keyword. So in parent window object is this in global scope.
};
calcAgeArrow(1980);

console.log('=====THIS KEYWORD IN OBJECTS=====');

// This keyword in Objects
const aakash = {
  year: 2003,
  calcAge: function () {
    console.log(this); // will be aakash object. Points to the object that is calling the method.
    console.log(2022 - this.year);
  },
};
aakash.calcAge();

const dimple = {
  year: 2022,
};

dimple.calcAge = aakash.calcAge; // Copying the method calcAge from aakash object. IT IS ALSO CALLED METHOD BORRWING.
dimple.calcAge(); // SO THE MOST IMP POINT OF THIS KEYWORD IN OBJECTS IS THAT IT WILL POINT TO THE OBJECT THAT IS CALING THE METHOD. SO HERE EVEN WE HAVE BORROWED IT FROM AAKASH OBJECT IT WILL STILL POINTS TO THE DIMPLE OBJECT AS IT IS THE OBJECT THAT IS CALLING THE METHOD CALCAGE INSIDE IT.

const f = aakash.calcAge; // again we borrwed the calcAge function but this time the "f" function don't have it's this keyword so it's undefined.
console.log(f);
f();


// ============== REGULAR FUNCTIONS VS ARROW FUNCTION ==============

// POINT TO REMEMBER:-  A Regular function call has the "this" keyword set to undefined.

const aakash = {
  firstName: 'Aakash',
  year: 2003,
  calcAge: function () {
    // console.log(this);
    // console.log(2022 - this.year);

    // Solution-1
    //const self = this; // self or that | So here isMillineal function don't have access the this keyword outside of the function because a regular function call simply returns undefined so we created a variable and set it's value to this so the self variable now holds the aakash object. And we are using that variable to access the properties defined inside the object.
    // const isMillineal = function () {
    //   console.log(self.year >= 2000 && self.year <= 2022);
    // };
    // isMillineal();

    // Solution-2
    const isMillineal = () => {
      console.log(this); // uses this keyword uses from it's parent scope.
      console.log(this.year >= 2000 && this.year <= 2022);
    };
    isMillineal();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

aakash.greet();
aakash.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);


// ============== PRIMITIVES VS OBJECTS ==============

// Primitive types
let lastName = 'Williams';
let OldlastName = lastName;
lastName = 'Davis';
console.log(lastName, OldlastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
// console.log('Before Marriage:', jessica);
// console.log('After Marriage:', marriedJessica);

// COPYING OBJECTS
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('John');

console.log('Before Marriage:', jessica2);
console.log('After Marriage:', jessicaCopy);
*/
