'use strict';

const modalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function removeHidden() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function addHidden() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

modalBtns.forEach(ele => {
  ele.addEventListener('click', removeHidden);
});

function keyPreseed(e) {
  let value = e.key;
  if (value === 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
}

closeModalBtn.addEventListener('click', addHidden);
overlay.addEventListener('click', addHidden);
document.addEventListener('keydown', keyPreseed);
