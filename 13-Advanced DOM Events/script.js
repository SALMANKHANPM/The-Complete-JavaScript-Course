'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// ======= IMPLEMENTING SMOOTH SCROLLING =======
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current Scroll (X, Y)', window.pageXOffset, pageYOffset);

  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // FOR OLD BROWSERS
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // FOR MORDERN BROWSERS
  section1.scrollIntoView({ behavior: 'smooth' });
});

///////////////////////////////
///////////////////////////////
///////////////////////////////

// ======== SELECTING, CREATING & DELETING ELEMENTS ========

// 1. Selecting elements

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');
const allbuttons = document.getElementsByTagName('button');
// console.log(allbuttons);

// console.log(document.getElementsByClassName('btn'));

// 2. Creating & inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = `This website uses cookies to ensure you get the best experience on our website.`;
message.innerHTML = `This website uses cookies to ensure you get the best experience on our website. <button class="btn btn--close-cookie">Got it!</button>`;
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// 3. DELETING ELEMENTS
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

// ======== STYLES, ATTRIBUTES & CLASSES ========
/*
// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

logo.alt = 'Beautiful minimilast logo';

// Non Standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATTRIBUTES
console.log(logo.dataset.versionNumber);

// CLASSES
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // Remember it not includes

// Don't use
logo.className = 'Aakash';
*/

////////////////////////////

// ======== TYPES OF EVENTS & EVENT HANDLERS ========
/*
const h1 = document.querySelector('h1');

// ALLOWS US TO ADD MULITPLE EVENTS
// WE CAN ACTUALLY REMOVE AN EVENT IF WE DON'T WANT IT TO HAPPEN
const alertH1 = function (e) {
  alert('AddEventListener, Great:) You are reading the heading');
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter, Great:) You are reading the heading');
// };
*/
