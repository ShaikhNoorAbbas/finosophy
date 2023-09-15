// Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

const countDownDate = new Date('Sept 27, 2023 00:00:00').getTime();
const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('days').innerHTML = `${days}`;
  document.getElementById('hours').innerHTML = `${hours}`;
  document.getElementById('minutes').innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById('seconds').innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('days').innerHTML = '00';
    document.getElementById('hours').innerHTML = '00';
    document.getElementById('minutes').innerHTML = '00';
    document.getElementById('seconds').innerHTML = '00';
  }
}, 1000);
