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

//============ SETS ============
// Just to get unique values
/*
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rizotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet);
console.log(new Set('Jonas'));

console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');

ordersSet.delete('Rizotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('Aakash Rao').size);
*/

//============ MAPS: FUNDAMENTALS ============
/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

// to read data from a map we use get method
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 7;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
rest.set(document.querySelector('h1'), 'Heading');
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

//============ MAPS: ITERATION ============
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🤩'],
  [false, 'Try Again!'],
]);

console.log(question);

// Creating a map using object
const openingHours = {
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
};
console.log(Object.entries(openingHours));
// new map using opening hours object
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your Answer'));
// console.log(answer);
// console.log(question.get(answer === question.get('correct')));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/

//============ WORKING WITH STRINGS: PART 1 ============
/*
const airline = 'TATA Vistara';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);
console.log('B373'.length);

console.log(airline.indexOf('a'));
console.log(airline.lastIndexOf('a'));
console.log(airline.lastIndexOf('Vistara'));

console.log(airline.slice(8));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' '))); // to get the first parameter without knowing it's index
console.log(airline.slice(airline.lastIndexOf(' '))); // to get the last parameter without knowing it's index

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B & E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 🙄');
  } else console.log('You got lucky 😊');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
*/
//============ WORKING WITH STRINGS: PART 2 ============
/*
const airline = 'TATA Vistara';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capilization in name

const passenger = 'aAkAsh'; // Aakash
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo'))
  console.log('Part of the new Airbus Family');

// Practice Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food & a pocket Knife');
checkBaggage('Socks and Camera');
checkBaggage('Got some snacks and a gun for protection.');
*/

//============ WORKING WITH STRINGS: PART 3 ============
/*
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

// split & join
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '-'));
console.log(message.padStart(23, '+').padEnd(30, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(12708758947490));
console.log(maskCreditCard('127087589474909483737'));

// Repeat
const message2 = 'Bad weather... All Departures Delayed... ';
console.log(message2.repeat(4));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(10);
*/
