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

//============ DESTRUCTURING OBJECTS ============
/*
const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Object inside an object
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Passing an object to a function as a Parameter
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Recieved!! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// Calling the method again but without some properties to check default values set to parameters.
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// 👉🏼 TO DESTRUCTURE OBJECT WE USE CURLY BRACES
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);


// Renaming variable names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Setting default values
const { menu = [], startMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { x: 23, y: 7, z: 14 };
({ x: a, y: b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
