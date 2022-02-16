'use strict';

//============ DESTRUCTURING ARRAYS ============
/*
// Normal method
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring method [Destructuring Assignment] - More Simpler than the normal method
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// An example with objects
const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Taking out categories array from restaurant object & destructuring
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log('After exchanging the values:', main, secondary);

// Switching variables values using desturcturing
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nestedArr = [2, 4, [5, 6]];
// Destructuring 2 & second array
// const [i, , j] = nestedArr;
// console.log(i, j);
const [i, , [j, k]] = nestedArr;
console.log(i, j, k);

// Setting Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
