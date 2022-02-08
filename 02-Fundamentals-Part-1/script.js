/*
let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!!");
console.log(40 + 20 + 1);
*/

//=============VALUES & VARIABLES=============
/*
console.log("Aakash");
console.log(18);

let firstName = "Bob"; // Variable declaration
console.log(firstName);

* Variable name Conventions
let $function = 18;
let aakash_rao = "AR";
let person = "Aakash";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);
*/

//============= DATA TYPES =============
/*
! In JavaScript every value is either object or a Primitive Value.
* THE SEVEN PRIMITIVE DATA TYPES
- Number
- Strings
- Boolean
- Undefined
- Null
- Symbol
- BigInt

let javascriptisFun = true;
console.log(javascriptisFun);

// console.log(typeof javascriptisFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptisFun = "YES!";
console.log(typeof javascriptisFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(null);
console.log(typeof null);
*/

//============= LET, CONST & VAR =============
/*
let age = 30;
age = 31;

const birthYear = 2003;
// birthYear = 1990;

var job = "Programmer";
job = "Freelancer";
*/

//============= BASIC OPERATORS =============
/*
const now = 2022;

// Math Operators
const ageAakash = now - 2003;
const ageDimple = now - 2002;
console.log(ageAakash, ageDimple);
console.log(ageAakash * 2, ageDimple / 2, 2 ** 3);
// 2**3 means 2 to the power 3 = 2*2*2 = 8
const firstName = "Aakash";
const lastName = "Rao";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageAakash > ageDimple);
console.log(ageDimple >= 18);
const isFullAge = ageDimple >= 18;
console.log(now - 2003 > now - 2002);
*/

//============= OPERATOR PRECEDENCE =============
/*
const now = 2022;
const ageAakash = now - 2003;
const ageDimple = now - 2002;

console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageAakash + ageDimple) / 2;
console.log(ageAakash, ageDimple, averageAge);
*/

//============= STRINGS & TEMPLATE LITERALS =============
/*
const firstName = "Aakash";
const job = "Freelancer & Student";
const birthYear = 2003;
const year = 2022;

const aakash = "I'm " + firstName + ", a " + (year - birthYear) + " year old student currently learning JavaScript";
console.log(aakash);

const aakashNew = `I'm ${firstName}, a ${year - birthYear} year old student currently learning JavaScript.`;
console.log(aakashNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines...");

console.log(`Another multi line
string with much
simpler template literal`);
*/

//============= TAKING DECISIONS IF/ELSE STATEMENTS =============
/*
const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Dimple can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Dimple can start driving license after ${yearsLeft} years 🥲`);
}

const birthYear = 2003;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
*/

//============= TYPE CONVERSION & TYPE COERCION =============
/*
* Type Conversion [Explicity changing the data type]
const inputYear = "2003";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number("Jonas")); // NaN === invalid number
console.log(typeof NaN);
console.log(String(23), 23);

* Type Coercion [JavaScript do it automatically for us]
console.log("I'm " + 19 + " years old student.");
console.log("23" - "10" - "3");
console.log("23" / "2");
console.log("23" > "18");
*/

//============= TRUTHY & FALSY VALUES =============
/*
 * 5 FALSY VALUES ' ', 0, undefined, null, Nan

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Aakash"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) console.log("Don't spend it all.");
else console.log("You should better get a Job!");

let height;
if (height) {
  console.log("Yay! height is defined");
} else {
  console.log("height is undefined");
}
*/

//============= EQUALITY OPERATORS == vs === =============
/*
const age = "18";

if (age === 18) console.log("You just became an adult (strict).");
if (age == 18) console.log("You just became an adult (loose).");

const favorite = Number(prompt(`what's your favorite number?`));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  // 23 === 23
  console.log("Cool! 23 is an amazing number.");
} else if (favorite === 7) {
  console.log("7 is also a good number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 nor 7 ☹️");
}

if (favorite !== 23) console.log("Why not 23?");
*/

//============= LOGICAL OPERATORS =============
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log(`Dimple is able to drive.`);
} else {
  console.log(`Someone else should drive.`);
}

const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Dimple is able to drive.`);
} else {
  console.log(`Someone else should drive.`);
}
*/
