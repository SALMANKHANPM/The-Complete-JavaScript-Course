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
