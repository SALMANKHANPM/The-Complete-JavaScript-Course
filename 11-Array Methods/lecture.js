'use strict';
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 1 Euro = 1.1 USD

const euroToUsd = 1.1;

// METHOD - 1 USING MAP METHOD [FUNCTIONAL PROGRAMMING]
// const movementsUSD = movements.map(function (mov) {
//   return mov * euroToUsd;
// });

const movementsUSD = movements.map(mov => mov * euroToUsd);
console.log(movementsUSD);

// METHOD - 2 USING FOR OF LOOP
const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * euroToUsd);
}
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
*/

/*
// THE FILTER METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposits);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

// THE REDUCE METHOD
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 100);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 100);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Finding the Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
*/

/*
// CHAINING METHODS
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.1;
const totalDepositsInUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsInUSD);
*/

/*
//  THE FIND METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);
*/

/*
// ========= FIND METHOD =========
console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') {
    console.log(acc);
  }
}
*/

/*
// THE SOME METHOD
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// ONLY CHECK FOR EQUALITY
console.log(movements);
console.log(movements.includes(-130));
// WILL CHECK FOR CONDITION
const anyDeposits = movements.some(mov => mov > 5000);
console.log(anyDeposits);

// THE EVERY METHOD
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));
*/

/*
// THE FLAT & FLATMAP METHOD
const nested = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(nested.flat());

const nestedDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(nestedDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
*/

/*
// SORTING ARRAYS
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// numbers
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);

// return < 0, A, B (keep order)
// return > 0 B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1; // a - b === +ve
//   if (a < b) return -1; // a - b === -ve
// });

movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);
*/

/*
// More ways of Creating & filling arrays
// FILL METHOD
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrys + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from METHOD
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_curr, i) => i + 1);
console.log(z);

// const radomValues = Array.from(
//   { length: 100 },
//   (curr, i) => i + 1 * Math.floor(Math.random() * 100)
// );
// console.log(radomValues);

labelBalance.addEventListener('click', () => {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI);
});
*/

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
