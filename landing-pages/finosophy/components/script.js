'use strict';

// UI COMPONENTS
// Theme Toggle
const themeToggle = function () {
  document.addEventListener('DOMContentLoaded', function () {
    const savedTheme =
      localStorage.getItem('theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');

    document.body.setAttribute('data-theme', savedTheme);

    const themeToggle = document.querySelector('.theme-toggle');

    themeToggle.addEventListener('click', function () {
      const currentTheme = document.body.getAttribute('data-theme');
      let newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  });
};
themeToggle();

// Slider
const slider = function () {
  const slidesContainer = document.querySelector('.slider__slides-container');
  const leftBtn = document.querySelector('.slider__btn--left');
  const rightBtn = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.slider__dots-container');

  let slides = Array.from(document.querySelectorAll('.slider__slide'));
  let curIndex = 0;
  let isAnimating = false;

  const updateSlides = function () {
    slides.forEach((s) => {
      slidesContainer.appendChild(s);
    });
  };

  const rotateSlider = function (direction) {
    return function () {
      if (isAnimating) return;
      isAnimating = true;

      if (direction === 'left') {
        slides.push(slides.shift());
        curIndex = (curIndex + 1) % slides.length;
      } else if (direction === 'right') {
        slides.unshift(slides.pop());
        curIndex = (curIndex - 1 + slides.length) % slides.length;
      }
      updateSlides();

      setTimeout(() => {
        isAnimating = false;
      }, 1000);
    };
  };

  slides.forEach((s) => {
    s.classList.add('fade-in');
  });

  leftBtn.addEventListener('click', rotateSlider('right'));
  rightBtn.addEventListener('click', rotateSlider('left'));

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') rotateSlider('right')();
    if (e.key === 'ArrowRight') rotateSlider('left')();
  });

  updateSlides();
};
slider();

// Tabs
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
tabs();
