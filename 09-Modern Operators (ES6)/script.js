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

//============ THE SPREAD OPERATOR:- ============
/*
// Take all the values out of the "arr" array and write them individually.
// 👉🏼 Use Case 👈🏼
// 👉🏼 Array literal
// 👉🏼 When we pass arguments to the function
// 👉🏼 Expand the array & adding a new value in that array.

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.startMenu];
console.log(menu);

// Iterables are arrays -- strings -- maps -- sets but not objects
const str = 'Aakash';
const letters = [...str, ' ', 'R.'];
console.log(letters);
console.log(...str);

// Taking the valuse from the prompt window and passing to to the orderpasta method on restaurant object.
const ingredients = [
  prompt(`Let's make pasta! Ingredient 1?`),
  prompt(`Let's make pasta! Ingredient 2?`),
  prompt(`Let's make pasta! Ingredient 3?`),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 2003, ...restaurant, founder: 'Aakash' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);


//============ THE REST PATTERN & PARAMETERS:- ============
// takes the rest of the elements  & put them into new Array.
// Conditions for rest parameters:-
// 🤔 Should be last in any destructing assignment otherwise how does one know that it has to select rest of the last parameters.
// And that's the reason there should be only one rest parameter in any destructuring assignment.

const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// 1. Destucturing
// SPREAD BECAUSE ON THE RIGHT SIDE OF ASSIGNMENT OPERATOR
const arr = [1, 2, ...[3, 4]];

// REST BECAUSE ON THE LEFT SIDE OF ASSIGNMENT OPERATOR
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.startMenu,
];
console.log(pizza, rissoto, otherFood);

// Let work on objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2. Functions
const add = function (...numbers) {
  // packs the value again
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // unpack the values

restaurant.orderPizza('mushrooms', 'onions', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

//============ SHORT CIRCUITING (&& AND ||):- ============
// Use ANY data type, return ANY Data type, short-circuiting.
/*
console.log('----------OR OPERATOR----------');

const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// In OR OPERATOR:
// 👉🏼 if both are false the last value is returned & if both are true 1st one is returned.
// 👉🏼 And in bunch of true & false the first true value is gonna returned.
// 👉🏼 It will return first truthy value of all the operands & simply last value if all of the operands are false.
console.log(3 || 'Aakash');
console.log('' || 'Aakash');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

// In OR OPERATOR:
// 👉🏼 if both are false the last value is returned & if both are true 1st one is returned.
// 👉🏼 And in bunch of true & false the first true value is gonna returned.
// 👉🏼 It will return first falsy value of all the operands are fasle & simply last value if all of the operands are true.
console.log('----------AND OPERATOR----------');
console.log(0 && 'Aakash');
console.log(7 && 'Aakash');

console.log('Hello' && 23 && null && 'Aakash');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}
restaurant.orderPizza && restaurant.orderPizza('cheese', 'patties');
*/

//============ THE NULLISH COALESCING OPERATOR(??):- ============
/*
const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.numGuests = 0;

// OR OPERATOR:-
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values: null & undefined (Not '' or 0)
const guessCorrect = restaurant.numGuests ?? 10;
console.log(guessCorrect);
*/

//============ THE FOR OF LOOP ============
/*
const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

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

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.startMenu, ...restaurant.mainMenu];

// Normal For Loop
console.log(`-------Normal For Loop-------`);
for (let i = 0; i < menu.length; i++) {
  console.log(`${[i + 1]}: ${menu[i]}`);
}

// For-of Loop
console.log(`-------For-of Loop-------`);
for (const item of menu) console.log(item);
// here item is always the current element in each iteration

// to print index with the values
for (const [i, el] of menu.entries()) {
  // console.log(item); // using this array & destructuring it in the next console.log
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/

//============ ENHANCED OBJECT LITERALS ============
/*
// Enhancements
// 👉🏼 You don't need to right object.property: objectName; you can directly write objectName inside an object to copy it inside another object. Like this object { anotherObject, }
// 👉🏼 You can remove function keyword & semicolon from object methods to write a function.
// 👉🏼 We can also compute property names of an object

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },

  [weekDays[4]]: {
    open: 11,
    close: 23,
  },

  [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

  // openingHours: openingHours, -- Normal
  // Now ES6 Enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Passing an object to a function as a Parameter
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Recieved!! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
*/

//============ OPTIONAL CHAINING (?.) :- ============
/*
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },

  [weekDays[4]]: {
    open: 11,
    close: 23,
  },

  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

  // openingHours: openingHours, -- Normal
  // Now ES6 Enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Passing an object to a function as a Parameter
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Recieved!! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open); // only if the property before ?. exists then read the property after that. otherwise just return undefined

console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed'; // === openingHours.mon
  console.log(`On ${day}, we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'method does not exist');

// Arrays
const users = [];
console.log(users[0]?.name ?? 'User array empty');
// Normal method if we don't use optional chaining operator
if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/

//============ LOOPING OBJECTS: OBJECT KEYS, VALUES & ENTERIES :- ============
/*
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },

  [weekDays[4]]: {
    open: 11,
    close: 23,
  },

  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italino',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

  // openingHours: openingHours, -- Normal
  // Now ES6 Enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Passing an object to a function as a Parameter
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Recieved!! ${this.startMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your deleicious pasta with ${ing1}, ${ing2} & ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Property names
const properties = Object.keys(openingHours);
console.log(properties); // returns an array with 3 property names

let openStr = `We are open on ${properties.length} days: `;

// With this loop we are adding the string at the end of that string 3 times as the loop runs
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);
// Enteries = property name + value (together)

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} & close at ${close}.`);
}
*/
