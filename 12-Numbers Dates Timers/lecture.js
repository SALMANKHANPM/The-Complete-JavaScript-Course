/////////////////////////////////////////////////
//////////////////////////////////////////////
// Coverting & Checking Numbers
/*
// Base 10 - 0 to 9, 1/10 = 0.1  3/10 = 3.33333

// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Converting
console.log(Number('23'));
console.log(+'23');

// Parsing
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e34', 10));

console.log(Number.parseInt('30.5px'));
console.log(Number.parseFloat('   30.5px   '));

// console.log(parseFloat('   30.5px   '));
console.log(Number.isNaN(28));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN(23 / 0));

//  Checking if a value is a number
console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(+'23x'));
console.log(Number.isFinite(23 / 0));
*/

// Math & Rounding

/*
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));

console.log(Math.max(5, 18, '23', 11, 2));

console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0..1 -> 0....(max-min) -> min...(max-min + min)
console.log(randomInt(10, 20));

// Rounding Integers
console.log(Math.trunc(23.3));

console.log(Math.round(23.3));
console.log(Math.round(23.9));

console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.floor(-23.9));
console.log(Math.trunc(-23.9));

// Rounding Decimals
console.log((2.3).toFixed(0));
console.log((2.3).toFixed(3));
console.log(+(2.345).toFixed(2));
*/

// The Remainder Operator
/*
console.log(5 % 2);
console.log(5 / 2); //  2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 3 * 2 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;

console.log(isEven(5));
console.log(isEven(4));
console.log(isEven(514));
*/

// THE Bigint Data Type
/*
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(49998476626266382829393073726273839n);
console.log(BigInt(49998476626266382829393073726273839n));

// Opearations
console.log(10000n + 10000n);
console.log(484383893847930308373636472738483363n * 10000000n);

const huge = 2830029237794749827203838303n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY BIG');

// Divisions
console.log(10n / 3n);
*/

// CREATING DATES
/*
// First way
const now = new Date();
console.log(now);

// Second way
console.log(new Date('Apr 07 2022 08:14:03'));
console.log(new Date('December 24 2017'));

console.log(account1);
console.log(new Date(account1.movementsDates[0]));
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));


// working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142237180000));
console.log(Date.now());

future.setFullYear(2040);
console.log(future);
*/

/*
// OPERATIONS WITH DATES
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcdaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const day1 = calcdaysPassed(new Date(2037, 3, 34), new Date(2037, 3, 24));
console.log(day1);
*/

const num = 3884764.23;

console.log('US: ', new Intl.NumberFormat('en-US').format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE').format(num));
console.log('Syria: ', new Intl.NumberFormat('ar-SY').format(num));
