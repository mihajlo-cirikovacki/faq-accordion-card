'use strict';

const faqInfoList = document.querySelector('.faq__info-list');
const infoAnswers = document.querySelectorAll('.faq__info-answer');

// EVENT LISTENERS:
faqInfoList.addEventListener('click', (e) => {
 const currItem = e.target.closest('.faq__info-list-item');
 const question = currItem.querySelector('.faq__info-question');
 const arrow = currItem.querySelector('.arrow');
 const answer = currItem.querySelector('.faq__info-answer');

 if (!currItem) return; // Guard clauses
 
 // REMOVE CLASES:
 infoAnswers.forEach(e => {
  e.classList.remove('faq__info-answer--active');
  e.previousElementSibling.querySelector('.faq__info-question').classList.remove('faq__info-question--active');
  e.previousElementSibling.querySelector('.arrow').classList.remove('arrow--down')
 });

 // ADD CLASSES:
 answer.classList.add('faq__info-answer--active');
 question.classList.add('faq__info-question--active');
 arrow.classList.add('arrow--down'); 

});













