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

// ========= THE CALL & APPLY METHODS:- =========
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Aakash Rao');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const euroWings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// DOES NOT WORK
// book(23, 'Aakash Rao');

// CALL METHOD
book.call(euroWings, 23, 'Sarah Williams');
console.log(euroWings);

book.call(lufthansa, 239, 'Mery Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Aishwarya Rao');
console.log(swiss);

// APPLY METHOD
console.log('----APPLY METHOD-----');

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);
*/
