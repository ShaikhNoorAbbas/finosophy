'use strict';

/* DATASETS */
const categories = {
  kids: {
    heroSection: {
      heading1: 'Seeking Financial Education for Your Kid?',
      heading2: 'Everything You Need is Here!!',
      heading3:
        'Make Your Child Financially Confident with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/kids-white.jpg',
    },
  },
  youth: {
    heroSection: {
      heading1: 'Looking for Financial Literacy Program?',
      heading2: 'Everything You Need is Here!!',
      heading3: 'Learn to Grow Your Money with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/kids-white.jpg',
    },
  },
  teacher: {
    heroSection: {
      heading1: 'Want to Become a Certified Financial Tutor?',
      heading2: 'Everything You Need is Here!!',
      heading3:
        'Teach Your Students Financial Literacy with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/teacher-white.jpg',
    },
  },
  school: {
    heroSection: {
      heading1: 'Looking for Financial Literacy Program?',
      heading2: 'Everything You Need is Here!!',
      heading3: 'Craft Financially Savvy Students with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/school-white.jpg',
    },
  },
};

const courses = {
  academic: [
    {
      name: 'Level 1',
      age: 'Age group 8-9 yrs',
      desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
      features: [
        '8 Pre-recorded Videos',
        '14 Amazing Chapters',
        '8 Interactive Activities',
        '14 Interactive Flashcards',
        'Students Assessments',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/870947079?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/644fa8cfe4b04f2ff1c08255?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1ukE9yeKfUNiNdE77Gimhg87DnOx5EqyV&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-1-cover.png',
    },
    {
      name: 'Level 2',
      age: 'Age group 9-10 yrs',
      desc: 'The Financial Literacy Online Course Level 2 is a thorough course that builds on Level 1, focusing on advanced concepts and strategies in finance, such as investing, retirement planning, and risk management, through interactive lessons and practical exercises.',
      features: [
        '9 Pre-recorded Videos',
        '20 Amazing Chapters',
        '9 Interactive Activities',
        '20 Interactive Flashcards',
        'Students Assessments',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/64817b66e4b09ba937123fb9?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1cA5XoK7OEK32O8myvZoL5mXifI-STEj9&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-2-cover.png',
    },
    {
      name: 'Level 3',
      age: 'Age group 10-11 yrs',
      desc: 'Master advanced finance in Level 3: from Household Economics to Securities Market. Gain expertise in Savings, Investments, and Behavior Aspects. Acquire practical skills for confident financial decision-making.',
      features: [
        '11 Pre-recorded Videos',
        '22 Amazing Chapters',
        '11 Interactive Activities',
        '22 Interactive Flashcards',
        'Students Assessments',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/64b7b516e4b067424cc6f47b?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=12RHA4KU-y9n6FNttFdnKkNK5-QEkIIY5&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-3-cover.png',
    },
    {
      name: 'Level 4',
      age: 'Age group 11-12 yrs',
      desc: 'Improve your financial understanding with Level 4. Discover complex subjects including banking and consumer protection, as well as investments and behavioral aspects. learn how to protect your assets and make good financial decisions.',
      features: [
        '12 Pre-recorded Videos',
        '24 Amazing Chapters',
        '12 Interactive Activities',
        '24 Interactive Flashcards',
        'Students Assessments',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/64f02ffee4b0d0e2871bd909?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1MWhfG5nOaiIrtYUcaqVCsH4ogTXpUmA1&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-4-cover.jpg',
    },
    {
      name: 'Level 5',
      age: 'Age group 12-13 yrs',
      desc: 'This Course takes your financial knowledge to new heights. Explore advanced banking, investment, and behavior aspects. Get savvy with asset allocation and risk assessment. Plan for retirement, safeguard against scams, and master tax return essentials.',
      features: [
        '12 Pre-recorded Videos',
        '24 Amazing Chapters',
        '12 Interactive Activities',
        '24 Interactive Flashcards',
        'Students Assessments',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Enroll Now for ₹499/- per year',
      purchaseLink:
        'https://www.letstute.com/single-checkout/65325bb9e4b020072f2094ac?pid=p1',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=14tnfjFulbq_6sAOkWGFRVPYlgwU7iwG3&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-5-cover.jpg',
    },
    {
      name: 'Level 6',
      age: 'Age group 13-14 yrs',
      desc: "With Level 6, you'll be a financial expert. Explore the ways in which you can make informed financial decisions, including banking intricacies and investment strategies. Find out how to plan for retirement, avoid scams, and reduce taxes.",
      features: [
        '11 Pre-recorded Videos',
        '28 Amazing Chapters',
        '11 Interactive Activities',
        '28 Interactive Flashcards',
        'Students Assessments',
        'Course Certificate',
      ],
      game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
      flashcard:
        'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
      videoLink:
        'https://player.vimeo.com/video/850805049?autoplay=1&loop=1&muted=1',
      price: 'Coming soon...',
      purchaseLink: '#',
      downloadBtnText: 'Download Curriculum',
      downloadBtnLink:
        'https://drive.google.com/uc?id=1UKLJaAZBH6W3QfJam46mq0XlCf-gFWzA&export=download',
      thumbnail:
        'https://www.letstute.com/s/pages/assets/images/letstute-level-6-cover.jpg',
    },
  ],
  youth: {
    name: 'Finosophy for Youth',
    age: 'Age group 15-25 yrs',
    desc: 'This extensive online course will educate you on vital financial literacy skills. Through real-world examples and activities, you may learn how to set up a budget, save money, invest, manage your credit, and handle debt. We will build up your confidence and you can control your financial future.',
    features: [
      '25 Pre-recorded Videos',
      '31 Amazing Chapters',
      '24 Interactive Activities',
      '31 Interactive Flashcards',
      'Students Assessments',
      'Course Certificate',
    ],
    game: 'https://creations.letstute.com/articulate/level-1/game/story.html',
    flashcard:
      'https://creations.letstute.com/articulate/level-1/flashcard/story.html',
    videoLink:
      'https://player.vimeo.com/video/870947079?autoplay=1&loop=1&muted=1',
    price: 'Enroll Now for ₹499/- per year',
    purchaseLink:
      'https://www.letstute.com/single-checkout/654b316ce4b02a857b5537bd?pid=p1',
    downloadBtnText: 'Download Brochure',
    downloadBtnLink:
      'https://drive.google.com/uc?id=1kI7ABMquU4lNJnwVIwROf53K8DB4KMbf&export=download',
    thumbnail:
      'https://www.letstute.com/s/pages/assets/images/youth-thumbnail.png',
  },
};

/* VARIABLES */
const switcherDropdown = document.getElementById('switcher__dropdown');
const heroContainer = document.querySelector('.hero__container');
const coursesContainer = document.querySelector('.courses__container');

/* COMPONENTS */
/* Tabs */
const tabs = function () {
  const btnContainer = document.querySelector('.tabs__btn-container');
  const btns = document.querySelectorAll('.tabs__btn');
  const contents = document.querySelectorAll('.tabs__content');

  btnContainer.addEventListener('click', function (e) {
    const btn = e.target.closest('.tabs__btn');

    if (!btn) return;

    btns.forEach((tb) => tb.classList.remove('tabs__btn--active'));
    contents.forEach((tc) => tc.classList.remove('tabs__content--active'));

    btn.classList.add('tabs__btn--active');

    const content = document.querySelector(
      `.tabs__content--${btn.dataset.tabsbtn}`
    );

    content.classList.add('tabs__content--active');
  });
};

/* FUNCTIONS */
/* Insert Dynamic Code */
const insertDynamicCode = function (place, position, code) {
  place.insertAdjacentHTML(position, code);
};

/* Render Content */
const renderContent = function (key) {
  const heroSectionCode = `
    <div class="hero__content-container move-in-left">
      <h2 class="hero__heading hero__heading--1">${categories[key].heroSection.heading1}</h2>
      <h2 class="hero__heading hero__heading--2">${categories[key].heroSection.heading2}</h2>
      <h2 class="hero__heading hero__heading--3">${categories[key].heroSection.heading3}</h2>
    </div>

    <div class="hero__btns-container">
      <a href="#courses" class="btn hero__btn hero__btn--fill">Explore Finosophy Courses</a>
      <a href="#" class="btn hero__btn hero__btn--outline">Download Complete Brochure</a>
      <a href="#contact" class="btn hero__btn hero__btn--fill">Enquire About Finosophy</a>
    </div>

    <div class="hero__img-container move-in-right">
      <img src="${categories[key].heroSection.img}" alt="" class="hero__img" />
    </div>
  `;

  heroContainer.innerHTML = '';
  insertDynamicCode(heroContainer, 'beforeend', heroSectionCode);

  let coursesSectionCode;

  if (key === 'kids' || key === 'teacher') {
    coursesSectionCode = `
      <div class="header container">
        <h2 class="header__heading heading-2">Finosophy Online Courses</h2>
        <p class="header__para para">Choose Level from Below List:</p>
      </div>

      <div class="tabs">
        <div class="tabs__btn-container container">
          ${courses['academic']
            .map((c, i) => {
              return `
                <button
                  class="tabs__btn tabs__btn--${i + 1} ${
                i === 0 && 'tabs__btn--active'
              }"
                  data-tabsbtn="${i + 1}"
                >
                ${c.name}
                </button>
              `;
            })
            .join('')}
        </div>

        ${courses['academic']
          .map((c, i) => {
            return `
            <div class="tabs__content tabs__content--${i + 1} ${
              i === 0 && 'tabs__content--active'
            }">
              <img
                src="https://www.letstute.com/s/pages/assets/images/music-bg.png"
                alt=""
                class="courses__bg-img"
              />

              <div class="courses__courses-container container">
                <div class="courses__course-img-container">
                  <img src="${
                    c.thumbnail
                  }" alt="" class="courses__course-img" />
                </div>
    
                <h3 class="courses__course-heading heading-3">
                  Welcome to Finosophy ${c.name}
                </h3>

                <div class="courses__course-container">
                  <span class="courses__course-label">Suitable for ${
                    c.age
                  }</span>
                </div>
              </div>
            </div>
          `;
          })
          .join('')}
      </div>
  `;
  } else if (key === 'youth' || key === 'school') {
    coursesSectionCode = `
      <div class="tabs__content">
        <div class="courses__courses-container container">
          <h2>Some content here...</h2>
        </div>
      </div>
    `;
  }

  coursesContainer.innerHTML = '';
  insertDynamicCode(coursesContainer, 'beforeend', coursesSectionCode);
};

/* Init */
const init = function (category) {
  if (categories[category]) {
    renderContent(category);
  } else {
    alert('Category not found!');
  }

  tabs();
};

/* Update Dropdown and Hash */
const updateSwitcherDropdownAndURL = function (category) {
  switcherDropdown.value = category;
  window.location.hash = category;

  init(category);
};

/* Load Content Based on URL Hash */
window.addEventListener('load', function () {
  let categoryURL = window.location.hash.substring(1);

  if (!categories[categoryURL]) {
    let defaultCategory = Object.keys(categories)[0];

    updateSwitcherDropdownAndURL(defaultCategory);
  } else {
    updateSwitcherDropdownAndURL(categoryURL);
  }
});

/* SECTIONS */
/* Switcher Section */
switcherDropdown.addEventListener('change', function () {
  updateSwitcherDropdownAndURL(this.value);
});
