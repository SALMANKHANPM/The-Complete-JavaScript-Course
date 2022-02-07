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
? In JavaScript every value is either object or a Primitive Value.

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
