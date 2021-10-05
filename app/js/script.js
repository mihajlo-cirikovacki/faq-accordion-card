'use strict';

const faqInfoList = document.querySelector('.faq__info-list');
const infoAnswers = document.querySelectorAll('.faq__info-answer');

// Event Listener:
faqInfoList.addEventListener('click', (e) => { 
  const currItem = e.target.closest('.faq__info-question-box');
  const itemState = currItem.getAttribute('aria-expanded');

  const items = faqInfoList.querySelectorAll('.faq__info-question-box');

  items.forEach(item => item.setAttribute('aria-expanded', 'false'));

  if (itemState === 'false') {
    currItem.setAttribute('aria-expanded', 'true');
  }
})









