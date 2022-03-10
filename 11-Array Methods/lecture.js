/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*

// ============ SIMPLE ARRAY METHODS ============

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(3)); // start from 3 uptil the end
console.log(arr.slice(2, 4)); // start from 2 uptil 4
console.log(arr.slice(-2)); // only slice the last element
console.log(arr.slice(-1)); // only slice the last element
console.log(arr.slice(1, -2)); // only slice the last element
console.log(arr.slice()); // creates a shallow copy
console.log([...arr]); // creates a shallow copy

// SPLICE METHOD
// console.log(arr.splice(3));
arr.splice(-1); //  mutate & delete the original array elements & return the deleted array elements
console.log(arr);
arr.splice(1, 2);
// 1st parameter = where to start deleting
// 2nd parameter = how much elements to delete
console.log(arr);

// REVERSE METHOD
arr = ['a', 'b', 'c', 'd', 'e'];

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // mutates the array & return the reverse array of elements
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // concat & returns a new array
console.log(letters);
console.log([...arr, ...arr2]); // concat & returns a new array but using spread operator

// JOIN METHOD
console.log(letters.join(' - '));
*/

// ============ LOOPING ARRAYS FOREACH METHOD ============
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----FOR EACH METHOD----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
// 0: fucntion(200)
// 1: fucntion(450)
// 2: fucntion(400)
// ... until the end of the array
*/

// ============ FOREACH WITH MAPS & SETS ============
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _value, map) {
  console.log(`${_value}: ${value}`);
});
*/
