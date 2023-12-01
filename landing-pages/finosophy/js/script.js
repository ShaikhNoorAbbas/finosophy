'use strict';

/* DATASETS */
const datasets = {
  kids: {
    title: 'Kids',
  },
  youth: {
    title: 'Youth',
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
    <h1 class="hero__heading heading-1">${dataset.title}</h1>
  `;

  heroContainer.innerHTML = '';
  insertDynamicCode(heroContainer, 'beforeend', heroSectionCode);
};

/* Init */
const init = function (datasetKey) {
  if (datasets[datasetKey]) {
    renderContent(datasets[datasetKey]);
  }
};

/* Update Dropdown and Hash */
const updateSection = function (section) {
  switcherDropdown.value = section;
  window.location.hash = section;

  init(section);
};

/* SECTIONS */
/* Switcher Section */
switcherDropdown.addEventListener('change', function () {
  updateSection(this.value);
});

/* Load Content Based on URL Hash */
window.addEventListener('load', function () {
  let hash = window.location.hash.substring(1);

  if (!datasets[hash]) {
    let defaultDataset = Object.keys(datasets)[0];

    updateSection(defaultDataset);
  } else {
    updateSection(hash);
  }
});
