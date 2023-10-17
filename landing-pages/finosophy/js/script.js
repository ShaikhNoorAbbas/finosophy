'use strict';

// Student Section Courses
const courses = [
  {
    name: 'Finosophy Level 1',
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png',
  },
  {
    name: 'Finosophy Level 2',
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png',
  },
  {
    name: 'Finosophy Level 3',
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png',
  },
  {
    name: 'Finosophy Level 4',
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-4-cover.jpg',
  },
  {
    name: 'Finosophy Level 5',
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-5-cover.jpg',
  },
  {
    name: 'Finosophy Level 6',
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-6-cover.jpg',
  },
];

const studentTabsBtnContainer = document.querySelector(
  '.student__tabs-btn-container'
);

const insertDynamicCode = function (place, position, code) {
  place.insertAdjacentHTML(position, code);
};

const courseTabs = courses
  .map((course, i) => {
    return `
    <img
      src=${course.thumbnail}
      alt=""
      class="tabs__btn tabs__btn--${i + 1} ${
      i === 0 ? 'tabs__btn--active' : ''
    }"
      data-tabsbtn="${i + 1}"
    />
    `;
  })
  .join('');

const courseContents = courses
  .map((course, i) => {
    return `
    <div class="tabs__content tabs__content--${i + 1} ${
      i === 0 ? 'tabs__content--active' : ''
    } student__tabs-content">
        <h2>${course.name}</h2>
    </div>
  `;
  })
  .join('');

insertDynamicCode(studentTabsBtnContainer, 'beforeend', courseTabs);
insertDynamicCode(studentTabsBtnContainer, 'afterend', courseContents);

// Tabs
const tabsBtnContainer = document.querySelector('.tabs__btn-container');
const tabsBtns = document.querySelectorAll('.tabs__btn');
const tabsContents = document.querySelectorAll('.tabs__content');

tabsBtnContainer.addEventListener('click', function (e) {
  const tabsBtn = e.target.closest('.tabs__btn');

  if (!tabsBtn) return;

  tabsBtns.forEach((tb) => tb.classList.remove('tabs__btn--active'));
  tabsContents.forEach((tc) => tc.classList.remove('tabs__content--active'));

  tabsBtn.classList.add('tabs__btn--active');

  const tabsContent = document.querySelector(
    `.tabs__content--${tabsBtn.dataset.tabsbtn}`
  );

  tabsContent.classList.add('tabs__content--active');
});
