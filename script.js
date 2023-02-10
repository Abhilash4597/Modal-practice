'use strict';

const modalBtns = document.querySelectorAll('.show-modal');
const closeModalBtn = document.querySelectorAll('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

modalBtns.forEach((ele) => {
  ele.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  })
})

closeModalBtn.forEach(ele => {
  ele.addEventListener('click', () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});