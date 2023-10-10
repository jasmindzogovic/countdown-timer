const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2023, 9, 24, 8, 0, 0);

const [year, month, date, day, hour, minutes] = [
  futureDate.getFullYear(),
  futureDate.getMonth(),
  futureDate.getDate(),
  futureDate.getDay(),
  futureDate.getHours(),
  futureDate.getMinutes(),
];

giveaway.textContent = `Giveaway ends on ${weekdays[day]}, ${
  months[month]
} ${date} ${year}, ${hour}:${String(minutes).padStart(2, 0)} AM`;

const futureTime = futureDate.getTime();

const getRemainingTime = () => {
  setInterval(() => {
    const today = new Date().getTime();
    const remainder = futureTime - today;

    const oneMinute = 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneDay = 24 * 60 * 60 * 1000;

    let days = Math.floor(remainder / oneDay);
    let hours = Math.floor((remainder % oneDay) / oneHour);
    let minutes = Math.floor((remainder % oneHour) / oneMinute);
    let secs = Math.floor((remainder % oneMinute) / 1000);

    const values = [days, hours, minutes, secs];

    items.forEach((item, i) => {
      item.textContent = values[i] < 10 ? `0${values[i]}` : values[i];
    });

    if (remainder < 0) {
      clearInterval(getRemainingTime);
      deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired.</h4>`;
    }
  }, 1000);
};

window.addEventListener("DOMContentLoaded", getRemainingTime);
