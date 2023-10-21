'use strict';

// Datasets
const student = [
  {
    heroSection: {
      heading: 'What is Finosophy?',
      para: 'Pathway to build financially literate and financially resilient Students through scientifically curated course with lesson plans, interactive games, flashcards and live projects.',
      img: 'http://127.0.0.1:8080/landing-pages/finosophy/assets/images/final.png',
    },
    coursesSection: {
      header: 'Financial Literacy Courses',
      courses: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
      ],
    },
    faqsSection: {
      faqs: [
        {
          id: 1,
          question:
            'What qualifications or expertise do I need to teach a financial literacy course?',
          answer:
            'While specific qualifications may vary depending on your educational institution or region, having a background or expertise in finance, economics, or related fields can be beneficial. Additionally, familiarity with financial concepts, personal finance management, and teaching methodologies is crucial. Professional development courses or certifications in financial literacy education can also enhance your knowledge and skills.',
        },
        {
          id: 2,
          question:
            'How can I integrate financial literacy into my existing curriculum?',
          answer:
            'Integrating financial literacy into your curriculum can be done in various ways. Look for opportunities to connect financial concepts to subjects like mathematics, social studies, or business. For example, teaching financial calculations in math class or discussing economic principles and personal finance in social studies. You can also consider standalone units or dedicated lessons on financial literacy within your subject area.',
        },
        {
          id: 3,
          question:
            'Are there any specific resources or materials available for teaching financial literacy?',
          answer:
            'Letstute provides Teacher training lesson plans for Teachers to learn how to teach Financial Literacy to students.',
        },
        {
          id: 4,
          question:
            'How can I make financial literacy engaging and relevant for my students?',
          answer:
            'Making financial literacy engaging involves teaching methods mentioned in Letstute LessonPlans. Letstute has Incorporated gaming activities and flash cards to make learning more engaging. Teachers can also include group discussions, case studies, and role-playing exercises. Encourage students to connect financial concepts to their own lives, such as budgeting for a trip or understanding the costs of college. Guest speakers from financial institutions or experts in personal finance can also provide real-world insights.',
        },
        {
          id: 5,
          question:
            'How can I assess students understanding of financial literacy concepts?',
          answer:
            'Letstute provided a live project at the end of the course for students to put their learning in real life use. Further, assessment methods can include quizzes, tests, projects, presentations, financial simulations, and group assignments. Consider using real-life scenarios or case studies that require students to apply their knowledge and make informed financial decisions. Assessing financial literacy skills may also involve evaluating budgeting exercises, investment portfolios, or analyzing financial data.',
        },
      ],
    },
  },
];

const teacher = [
  {
    heroSection: {
      heading: 'What is Finosophy??',
      para: 'Pathway to build financially literate and financially resilient Students through scientifically curated course with lesson plans, interactive games, flashcards and live projects.',
      img: 'http://127.0.0.1:8080/landing-pages/finosophy/assets/images/final.png',
    },
    coursesSection: {
      header: 'Courses for Your Students',
      courses: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
      ],
    },
    faqsSection: {
      faqs: [
        {
          id: 1,
          question:
            'What qualifications or expertise do I need to teach a financial literacy course?',
          answer:
            'While specific qualifications may vary depending on your educational institution or region, having a background or expertise in finance, economics, or related fields can be beneficial. Additionally, familiarity with financial concepts, personal finance management, and teaching methodologies is crucial. Professional development courses or certifications in financial literacy education can also enhance your knowledge and skills.',
        },
        {
          id: 2,
          question:
            'How can I integrate financial literacy into my existing curriculum?',
          answer:
            'Integrating financial literacy into your curriculum can be done in various ways. Look for opportunities to connect financial concepts to subjects like mathematics, social studies, or business. For example, teaching financial calculations in math class or discussing economic principles and personal finance in social studies. You can also consider standalone units or dedicated lessons on financial literacy within your subject area.',
        },
        {
          id: 3,
          question:
            'Are there any specific resources or materials available for teaching financial literacy?',
          answer:
            'Letstute provides Teacher training lesson plans for Teachers to learn how to teach Financial Literacy to students.',
        },
        {
          id: 4,
          question:
            'How can I make financial literacy engaging and relevant for my students?',
          answer:
            'Making financial literacy engaging involves teaching methods mentioned in Letstute LessonPlans. Letstute has Incorporated gaming activities and flash cards to make learning more engaging. Teachers can also include group discussions, case studies, and role-playing exercises. Encourage students to connect financial concepts to their own lives, such as budgeting for a trip or understanding the costs of college. Guest speakers from financial institutions or experts in personal finance can also provide real-world insights.',
        },
        {
          id: 5,
          question:
            'How can I assess students understanding of financial literacy concepts?',
          answer:
            'Letstute provided a live project at the end of the course for students to put their learning in real life use. Further, assessment methods can include quizzes, tests, projects, presentations, financial simulations, and group assignments. Consider using real-life scenarios or case studies that require students to apply their knowledge and make informed financial decisions. Assessing financial literacy skills may also involve evaluating budgeting exercises, investment portfolios, or analyzing financial data.',
        },
      ],
    },
  },
];

const school = [
  {
    heroSection: {
      heading: 'What is Finosophy?',
      para: 'Pathwayy to build financially literate and financially resilient Students through scientifically curated course with lesson plans, interactive games, flashcards and live projects.',
      img: 'http://127.0.0.1:8080/landing-pages/finosophy/assets/images/final.png',
    },
    coursesSection: {
      header: 'Courses for Your Students',
      courses: [
        {
          id: 1,
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
          id: 2,
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
          id: 3,
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
          id: 4,
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
          id: 5,
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
          id: 6,
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
      ],
    },
    faqsSection: {
      faqs: [
        {
          id: 1,
          question:
            'Whatt qualifications or expertise do I need to teach a financial literacy course?',
          answer:
            'Whilee specific qualifications may vary depending on your educational institution or region, having a background or expertise in finance, economics, or related fields can be beneficial. Additionally, familiarity with financial concepts, personal finance management, and teaching methodologies is crucial. Professional development courses or certifications in financial literacy education can also enhance your knowledge and skills.',
        },
        {
          id: 2,
          question:
            'How can I integrate financial literacy into my existing curriculum?',
          answer:
            'Integrating financial literacy into your curriculum can be done in various ways. Look for opportunities to connect financial concepts to subjects like mathematics, social studies, or business. For example, teaching financial calculations in math class or discussing economic principles and personal finance in social studies. You can also consider standalone units or dedicated lessons on financial literacy within your subject area.',
        },
        {
          id: 3,
          question:
            'Are there any specific resources or materials available for teaching financial literacy?',
          answer:
            'Letstute provides Teacher training lesson plans for Teachers to learn how to teach Financial Literacy to students.',
        },
        {
          id: 4,
          question:
            'How can I make financial literacy engaging and relevant for my students?',
          answer:
            'Making financial literacy engaging involves teaching methods mentioned in Letstute LessonPlans. Letstute has Incorporated gaming activities and flash cards to make learning more engaging. Teachers can also include group discussions, case studies, and role-playing exercises. Encourage students to connect financial concepts to their own lives, such as budgeting for a trip or understanding the costs of college. Guest speakers from financial institutions or experts in personal finance can also provide real-world insights.',
        },
        {
          id: 5,
          question:
            'How can I assess students understanding of financial literacy concepts?',
          answer:
            'Letstute provided a live project at the end of the course for students to put their learning in real life use. Further, assessment methods can include quizzes, tests, projects, presentations, financial simulations, and group assignments. Consider using real-life scenarios or case studies that require students to apply their knowledge and make informed financial decisions. Assessing financial literacy skills may also involve evaluating budgeting exercises, investment portfolios, or analyzing financial data.',
        },
      ],
    },
  },
];

// Components
// Tabs
const tabs = function () {
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
};

// Accordion
const accordion = function () {
  const accordionItems = document.querySelectorAll('.accordion__item');
  const accordionIcons = document.querySelectorAll('.accordion__icon');

  accordionItems.forEach((accordionItem, i) => {
    accordionItem.addEventListener('click', () => {
      const isOpen = accordionItem.classList.contains('accordion__active');

      if (!isOpen) {
        accordionItems.forEach((accordionItem) => {
          accordionItem.classList.remove('accordion__active');
        });

        accordionIcons.forEach((accordionIcon) => {
          accordionIcon.innerHTML = '+';
        });

        accordionItem.classList.add('accordion__active');

        accordionIcons[i].innerHTML = '-';
        return;
      } else {
        accordionItem.classList.remove('accordion__active');

        accordionIcons[i].innerHTML = '+';
      }
    });
  });
};

// Variables
// Nav btn section
const navBtns = document.querySelectorAll('.nav-btn__btn');

// Hero section
const heroHeading = document.querySelector('.hero__heading');
const heroPara = document.querySelector('.hero__para');
const heroImg = document.querySelector('.hero__img');

// Courses section
const coursesContainer = document.querySelector('.courses__container');

// FAQs section
const faqsFaqsContainer = document.querySelector('.faqs__faqs-container');

// Functions
// Insert dynamic code
const insertDynamicCode = function (place, position, code) {
  place.insertAdjacentHTML(position, code);
};

// Render content function
const renderContent = function (dataset) {
  // Hero section
  heroHeading.textContent = dataset[0].heroSection.heading;
  heroPara.textContent = dataset[0].heroSection.para;
  heroImg.src = dataset[0].heroSection.img;

  // Courses section
  const header = `
    <div class="header">
      <h2 class="header__heading header__heading--purple heading-2 move-in-top">
        ${dataset[0].coursesSection.header}
      </h2>
    </div>
  `;

  const courses = dataset[0].coursesSection.courses;

  const tabs = `
    <div class="tabs">
      <div class="tabs__btn-container">
        ${courses
          .map((c, i) => {
            return `
            <img src=${c.thumbnail} alt="" class="tabs__btn tabs__btn--${
              i + 1
            } ${i === 0 ? 'tabs__btn--active' : ''}" data-tabsbtn="${i + 1}"/>
          `;
          })
          .join('')}
      </div>

      ${courses
        .map((c, i) => {
          return `
            <div class="tabs__content tabs__content--${i + 1} ${
            i === 0 ? 'tabs__content--active' : ''
          }">
              <div class="courses__tabs-content-label-container">
                <span class="courses__tabs-content-label courses__tabs-content-label--primary">${
                  c.name
                }</span>
                <span class="courses__tabs-content-label courses__tabs-content-label--secondary">${
                  c.age
                }</span>
              </div>
      
              <div class="courses__tabs-content-header">
                <h3 class="courses__tabs-content-heading heading-3">About ${
                  c.name
                }</h3>
                <p class="courses__tabs-content-para para">${c.desc}</p>
              </div>
  
              <ul class="courses__tabs-content-list">
                ${c.features
                  .map((feature) => {
                    return `
                    <li><i class="ri-verified-badge-fill"></i> <span>${feature}</span></li>
                  `;
                  })
                  .join('')}
              </ul>
              
              <div class="courses__tabs-content-demo">
                <img src="./assets/images/web-02.png" alt="">
                <img src="./assets/images/web-01.png" alt="">
                <img src="./assets/images/web-03.png" alt="">
              </div>
              
              <div class="courses__tabs-content-ctas">
                <a href="#" class="courses__tabs-content-cta btn btn--fill">Enroll Now for ${
                  c.price
                }</a>
              
                <a href="#" class="courses__tabs-content-cta btn btn--outline">Download Brochure</a>
              </div>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

  coursesContainer.innerHTML = '';

  insertDynamicCode(coursesContainer, 'beforeend', header);
  insertDynamicCode(coursesContainer, 'beforeend', tabs);

  // FAQs section
  const faqs = dataset[0].faqsSection.faqs;

  const accordion = `
    <div class="accordion">
      ${faqs
        .map((f, i) => {
          return `
            <div class="accordion__item ${i == 0 ? 'accordion__active' : ''}">
              <p class="accordion__num">0${i + 1}</p>
              <h4 class="accordion__title">
                ${f.question}
              </h4>
              <span class="accordion__icon">+</span>
              <p class="accordion__content">
                ${f.answer}
              </p>
            </div>
          `;
        })
        .join('')}
    </div>
  `;

  faqsFaqsContainer.innerHTML = '';

  insertDynamicCode(faqsFaqsContainer, 'beforeend', accordion);
};

// Init
renderContent(student);
tabs();
accordion();

// Nav Btn Section
navBtns.forEach((nb, i, arr) => {
  nb.addEventListener('click', () => {
    arr.forEach((i) => {
      i.classList.remove('nav-btn__btn--active');
    });

    nb.classList.add('nav-btn__btn--active');

    let dataSet;

    if (nb.textContent.trim() === 'Student') {
      dataSet = student;
    } else if (nb.textContent.trim() === 'Teacher') {
      dataSet = teacher;
    } else if (nb.textContent.trim() === 'School') {
      dataSet = school;
    }

    renderContent(dataSet);
    tabs();
    accordion();
  });
});
