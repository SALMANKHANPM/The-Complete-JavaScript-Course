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
