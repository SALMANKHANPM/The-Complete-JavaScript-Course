'use strict';

// Selecting modal, overlay & close-modal btn through DOM.
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// Selecting all 3 show modal btns
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Open modal function
const OpenModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Selecting a button out of all 3 btns & Removing hidden class from modal when show modal btn is clicked
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', OpenModal);
}

// Closing the modal through close button
btnCloseModal.addEventListener('click', closeModal);
// Closing the modal window when overlay is clicked
overlay.addEventListener('click', closeModal);

// We are using eventlistener to listen when the key is pressed & if key pressed was escape we are checking if it contains the hidden class & if it does not contain it we are adding it on modal & overlay using closeModal() function.
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
