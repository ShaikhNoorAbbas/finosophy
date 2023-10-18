'use strict';

// Student Section Courses
const courses = [
  {
    name: 'Finosophy Level 1',
    age: 'Age group 8-9 yrs',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est, quisquam numquam sint, nemo explicabo doloribus dolores officiis sed error.',
    features: [
      '8+ Interactive Activities',
      '9+ Interactive Flashcards',
      '10+ Hours Course Duration',
      'Course Completion Certificate',
    ],
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png',
  },
  {
    name: 'Finosophy Level 2',
    age: 'Age group 9-10 yrs',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est, quisquam numquam sint, nemo explicabo doloribus dolores officiis sed error.',
    features: [
      '10+ Interactive Activities',
      '9+ Interactive Flashcards',
      '10+ Hours Course Duration',
      'Course Completion Certificate',
    ],
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png',
  },
  {
    name: 'Finosophy Level 3',
    age: 'Age group 10-11 yrs',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est, quisquam numquam sint, nemo explicabo doloribus dolores officiis sed error.',
    features: [
      '8+ Interactive Activities',
      '9+ Interactive Flashcards',
      '10+ Hours Course Duration',
      'Course Completion Certificate',
    ],
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png',
  },
  {
    name: 'Finosophy Level 4',
    age: 'Age group 11-12 yrs',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est, quisquam numquam sint, nemo explicabo doloribus dolores officiis sed error.',
    features: [
      '8+ Interactive Activities',
      '9+ Interactive Flashcards',
      '10+ Hours Course Duration',
      'Course Completion Certificate',
    ],
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-4-cover.jpg',
  },
  {
    name: 'Finosophy Level 5',
    age: 'Age group 12-13 yrs',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est, quisquam numquam sint, nemo explicabo doloribus dolores officiis sed error.',
    features: [
      '8+ Interactive Activities',
      '9+ Interactive Flashcards',
      '10+ Hours Course Duration',
      'Course Completion Certificate',
    ],
    price: '₹499/- per year',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/letstute-level-5-cover.jpg',
  },
  {
    name: 'Finosophy Level 6',
    age: 'Age group 13-14 yrs',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate est, quisquam numquam sint, nemo explicabo doloribus dolores officiis sed error.',
    features: [
      '8+ Interactive Activities',
      '9+ Interactive Flashcards',
      '10+ Hours Course Duration',
      'Course Completion Certificate',
    ],
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

      <div class="student__tabs-content-label-container">
        <span class="student__tabs-content-label student__tabs-content-label--primary">${
          course.name
        }</span>
        <span class="student__tabs-content-label student__tabs-content-label--secondary">${
          course.age
        }</span>
      </div>
    
      <div class="student__tabs-content-header">
        <h3 class="student__tabs-content-header__heading heading-3">Why Choose ${
          course.name
        }?</h3>
        <p class="student__tabs-content-header__heading para">${course.desc}</p>
      </div>

      <ul class="student__tabs-content-list">
        ${course.features
          .map((feature) => {
            return `
          <li><i class="ri-verified-badge-fill"></i> <span>${feature}</span></li>
          `;
          })
          .join('')}
      </ul>

      <div class="student__tabs-content-demo">
        <img src="./assets/images/web-02.png" alt="">
        <img src="./assets/images/web-01.png" alt="">
        <img src="./assets/images/web-03.png" alt="">
      </div>

      <div class="student__tabs-content-ctas">
        <a href="#" class="student__tabs-content-cta btn btn--fill">Enroll Now for ${
          course.price
        }</a>

        <a href="#" class="student__tabs-content-cta btn btn--outline">Download Brochure</a>
      </div>
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
