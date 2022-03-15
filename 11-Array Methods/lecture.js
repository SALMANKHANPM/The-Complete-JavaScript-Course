'use strict';

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
