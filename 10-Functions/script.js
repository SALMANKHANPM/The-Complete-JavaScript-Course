'use strict';

//========= DEFAULT PARAMETERS:- =========
/*
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

// ========= HOW PASSING ARGUMENTS WORK VALUE VS REFERENCE:- =========
/*
const flight = 'LH234';
const aakash = {
  name: 'Aakash Rao',
  passport: 9503200970,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 9503200970) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, aakash);
// console.log(flight);
// console.log(aakash);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(aakash);
checkIn(flight, aakash);
*/

// ========= FUNCTIONS ACCEPTING CALLBACK FUNCTIONS:- =========
/*
// remove the whitespace between each words & convert it to lowercase.
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// split & convert the first word into uppercase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS Uses callbacks all the time.
const high5 = function () {
  console.log('👋🏼');
};
document.body.addEventListener('click', high5);
['Aakash', 'Martha', 'Adam'].forEach(high5);
*/

// ========= FUNCTION RETURNING OTHER FUNCTIONS:- =========

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Functions returning other function works in a way that you need to call the parameter side by side.
greet('Hey Good Morning')('Aakash');

// Functions returning other functions using Arrow FUnctions
const greet2 = greeting => name => {
  console.log(`${greeting} ${name}`);
};
greet2('Hey this is another test')('Aakash');
*/

// ========= THE CALL, APPLY & BIND METHODS:- =========
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book(239, 'Aakash Rao');
lufthansa.book(635, 'John Smith');

console.log(lufthansa);

// Here we are trying to copy the method from one lufthansa Object to euroWings Object. So the problem arises when you try to copy the object method to another object. We wanted to use 'this' keyword points to that object so we have option to store that method to external function & then call that function but this will not work because, this keyword now points to undefined because of regular function call.

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// DOES NOT WORK
// book(23, 'Aakash'); returns an typeError to the console [Reason: Book is now just a regular function call & as we know in a regular function call the 'this' keyword points to undefined.]

//============ CALL METHOD ============
// Function is really an object & objects have methods & therefore functions can have methods too & the call method is one of them.

// First argument -----> what we want the 'this' keyword points to
// & rest will be the parameters that we want to pass

console.log('------CALL METHOD------');
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

// WHAT HAPPENED HERE? ----> Here we did acutally not call the book function ourselves. Instead we called the .call() method & it's then this .call() method which will call the book() function with a this keyword set to euroWings object.

// So whatever we pass has the first argument of the call method.

// And so this allows us to manually & explicitly set the this keyword of any function that we want to call.

// Then all the arguments after the first one are simply the arguments of the original function.

// And so in the case of the book function ofcourse, that's flightNumber & the passenger name

book.call(lufthansa, 295, 'Mark Zukerberg');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 230, 'Mr. Sundar Pichai');
console.log(swiss);

//============ APPLY METHOD ============

console.log('------APPLY METHOD------');
// The difference between the 'this' keyword is that the .apply() does not recieve a list of arguments after the 'this' keyword.

// But instead it's gonna take an array of the arguments. And so it will take the elements from that array & paste it into the function.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Same as the .apply() method.
book.call(swiss, ...flightData);

//============ BIND METHOD ============

console.log('------BIND METHOD------');

// Just like the .call() method .bind() method also allows us to manually set this keywords for any function call.

// Difference is that .bind() method does not immediately call the function. Instead it returns a new function where 'this' keyword is bound.

// So it's set to whatever value we pass into bind.

// book.call(euroWings, 23, 'Sarah Williams');
const bookEW = book.bind(euroWings); // this will not call the book function. Instead it will return a new function where this keyword will always be set to Eurowings.
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(33, 'Steven Williams');
// bookLH(33, 'Steven Williams');
// bookLX(33, 'Steven Williams');

// As you see, this now looks the normal book function call again. And that's because the function here already has the this keyword set in stone basically.

// And so here of course, we no longer need to specify to the 'this' keyword again.

//================== TAKING IT EVEN FURTHER ==================

// ============ Ex-1:- ============

// So in the .call() method, we can pass multiple arguments here besides the this keyword. And so in the bind method, we can actually do the same.

// And then all of these arguments will also be basically set in stone. So they will be defined and the function then always be called with these same arguments.

// For Ex:- We could use bind to create a function for one specific airline & a specific flight number.

const bookEW23 = book.bind(euroWings, 223); // Specifing parts of the argument beforehand is acutally a common pattern called Partial Application, means that the part of the arguments of the original function are already applied, which means already set.
bookEW23('Mr Robert Downey Junior');
bookEW23('Mr Tony Stark a.k.a IronMan');

// ============ Ex-2:- ============
// With Eventlisteners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// In theory lectures, we learnt that in an EventHandler Function the this keyword always points to the element on which the handler is attached to.

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTaxRate(0.23)(100));
console.log(addTaxRate(0.23)(23));
*/
