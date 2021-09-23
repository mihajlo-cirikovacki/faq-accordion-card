'use strict';

const faqInfoList = document.querySelector('.faq__info-list');

// EVENT LISTENERS:
faqInfoList.addEventListener('click', (e) => {
 const item = e.target.closest('.faq__info-list-item');
 const question = item.querySelector('.faq__info-question');
 const arrow = item.querySelector('.arrow');

 if (!item) return; // Guard clauses
  
  const answer = item.querySelector('.faq__info-answer');
  answer.classList.toggle('hidden');
  
  if(answer.classList !== 'hidden') {
    question.classList.toggle('active');
    arrow.classList.toggle('arrow-down')
  }
});













