'use strict';

/* DATASETS */
const categories = {
  kids: {
    heroSection: {
      heading1: 'Seeking Financial Education for Your Kid?',
      heading2: 'Everything You Need is Here!!',
      heading3:
        'Make Your Child Financially Confident with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/student-hero-img.jpg',
    },
  },
  youth: {
    heroSection: {
      heading1: 'Looking for Financial Literacy Program?',
      heading2: 'Everything You Need is Here!!',
      heading3: 'Learn to Grow Your Money with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/student-hero-img.jpg',
    },
  },
  teacher: {
    heroSection: {
      heading1: 'Want to Become a Certified Financial Tutor?',
      heading2: 'Everything You Need is Here!!',
      heading3:
        'Teach Your Students Financial Literacy with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/teacher-hero-img.jpg',
    },
  },
  school: {
    heroSection: {
      heading1: 'Looking for Financial Literacy Program?',
      heading2: 'Everything You Need is Here!!',
      heading3: 'Craft Financially Savvy Students with <span>Finosophy</span>',
      img: 'https://www.letstute.com/s/pages/assets/images/school-hero-img.jpg',
    },
  },
};

const courses = {
  academic: {
    level1: {
      name: 'Finosophy Level 1',
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
    level2: {
      name: 'Finosophy Level 2',
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
    level3: {
      name: 'Finosophy Level 3',
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
    level4: {
      name: 'Finosophy Level 4',
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
    level5: {
      name: 'Finosophy Level 5',
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
    level6: {
      name: 'Finosophy Level 6',
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
  },
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

/* FUNCTIONS */
/* Insert Dynamic Code */
const insertDynamicCode = function (place, position, code) {
  place.insertAdjacentHTML(position, code);
};

/* Render Content */
const renderContent = function (dataset) {
  const heroSectionCode = `
    <div class="hero__content-container move-in-left">
      <h2 class="hero__heading hero__heading--1">${dataset.heroSection.heading1}</h2>
      <h2 class="hero__heading hero__heading--2">${dataset.heroSection.heading2}</h2>
      <h2 class="hero__heading hero__heading--3">${dataset.heroSection.heading3}</h2>

      <div class="hero__btns-container">
        <a href="#" class="btn hero__btn hero__btn--outline">Download Complete Brochure</a>
        <a href="#courses" class="btn hero__btn hero__btn--fill">Explore Finosophy Courses</a>
      </div>
    </div>

    <div class="hero__img-container move-in-right">
      <img src="${dataset.heroSection.img}" alt="" class="hero__img" />
    </div>
  `;

  heroContainer.innerHTML = '';
  insertDynamicCode(heroContainer, 'beforeend', heroSectionCode);
};

/* Init */
const init = function (datasetKey) {
  if (categories[datasetKey]) {
    renderContent(categories[datasetKey]);
  } else {
    alert('Dataset not found!');
  }
};

/* Update Dropdown and Hash */
const updateSwitcherDropdownAndURL = function (section) {
  switcherDropdown.value = section;
  window.location.hash = section;

  init(section);
};

/* Load Content Based on URL Hash */
window.addEventListener('load', function () {
  let hash = window.location.hash.substring(1);

  if (!categories[hash]) {
    let defaultDataset = Object.keys(categories)[0];

    updateSwitcherDropdownAndURL(defaultDataset);
  } else {
    updateSwitcherDropdownAndURL(hash);
  }
});

/* SECTIONS */
/* Switcher Section */
switcherDropdown.addEventListener('change', function () {
  updateSwitcherDropdownAndURL(this.value);
});
