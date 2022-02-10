"use strict";
/*
let hasDriverlicense = false;
const passTest = true;

if (passTest) hasDriverlicense = true;
if (hasDriverlicense) console.log("I can drive :D");
const interface = "Audio";
const private = 123;
*/

//================== FUNCTIONS DECLARATIONS ======================
/*
function logger() {
  console.log("My name is Aakash");
}

// invoking / calling / running the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples & ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

//================== FUNCTIONS EXPRESSIONS ======================
/*
 * Function without a name is called anonymous Function.

// Funciton Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(2003);
console.log(age1);

// Function Expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1991);
console.log(age2);
console.log(age1, age2);
*/

//================== ARROW FUNCTIONS ==================
/*
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear;
  const retirement = 25 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(2003, "Aakash Rao"));
console.log(yearUntilRetirement(2021, "Bob"));
*/

//================== FUNCTIONS CALLING OTHER FUNCTIONS ==================
/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple peices & ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

//================== REVIEWING FUNCTIONS ==================
/*
const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const yearUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 25 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} retires in ${retirement} years.`);
    return -1;
  }
  // return `${firstName} retires in ${retirement} years.`;
};

console.log(yearUntilRetirement(2003, "Aakash"));
console.log(yearUntilRetirement(1970, "Mike"));
*/

//================== INTRO TO ARRAYS:- ==================
/*
const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); // .length is not based so when we subtract it with -1 we get the last element of the array.

friends[2] = "Jay";
console.log(friends);

const firstName = "Aakash";
const aakash = [firstName, "Rao", 2037 - 1991, "student", friends];
console.log(aakash);

const calcAge = function (birthYear) {
  return 2022 - birthYear;
};

const years = [1996, 1967, 2000, 2003, 2008];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//================== BASIC ARRAY OPERATIONS (METHODS):- ==================
/*
const friends = ["Micheal", "Steven", "Peter"];

// ADD ELEMENTS
const newLength = friends.push("Jay"); // add element at the end of array & returns the length of the array
console.log(friends);
console.log(newLength);
friends.unshift("John"); // add element at the beginning of array & returns the length of the array
console.log(friends);

// REMOVE ELEMENTS
friends.pop(); // Remove last element of the array & returns the removed element
console.log(friends);
friends.shift(); // Remove first element of the array & returns the removed element
console.log(friends);

console.log(friends.indexOf("Steven")); // returns the index value in an array
console.log(friends.indexOf("Bob"));

console.log(friends.includes("Steven")); // returns boolean if the element is present or not in an array
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven.");
}
*/

//================== INTRODUCTION TO OBJECTS:- ==================

/* 
// OBJECT LITERAL SYNTAX
const aakash = {
  firstName: "Aakash",
  lastName: "Rao",
  age: 2022 - 2003,
  job: "Student",
  friends: ["Micheal", "Peter", "Steven"],
};
console.log(aakash);
*/

//================== DOT VS BRACKET NOTATION:- ==================
/*
const aakash = {
  firstName: "Aakash",
  lastName: "Rao",
  age: 2022 - 2003,
  job: "Student",
  friends: ["Micheal", "Peter", "Steven"],
};
console.log(aakash);
console.log(aakash["lastName"]); // Bracket notation [put any expression]
console.log(aakash.lastName); // Dot notation

const nameKey = "Name";
console.log(aakash["first" + nameKey]);
console.log(aakash["last" + nameKey]);

// console.log(aakash."first" + nameKey);

const interestedIn = prompt("What do you want to know about Aakash? Choose between firstName. lastName. age, job & friends");
console.log(aakash[interestedIn]);

if (aakash[interestedIn]) {
  console.log(aakash.interestedIn);
}
*/

//================== OBJECT METHODS:- ==================
/*
// ANY FUNCTION THAT IS ATTACHED TO AN OBJECT IS CALLED A METHOD.

const aakash = {
  firstName: "Aakash",
  lastName: "Rao",
  birthYear: 2003,
  job: "Student",
  friends: ["Micheal", "Peter", "Steven"],
  hasDriverLicense: false,

  // calcAge: function (birthYear) {
  //   return 2022 - 2003;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2022 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  // Challenge
  // "Aakash is a 18-year old student, and he has a/no driver's license."
  getSummary: function () {
    this.summary = `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's License.`;
    return this.summary;
  },
};

console.log(aakash.calcAge());
console.log(aakash.age);
// console.log(aakash["calcAge"](2003));

console.log(aakash.getSummary());
*/
