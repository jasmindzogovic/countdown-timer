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

const year = futureDate.getFullYear();
const month = futureDate.getMonth();
const date = futureDate.getDate();
const day = futureDate.getDay();
const hour = futureDate.getHours();
const minutes = futureDate.getMinutes();

giveaway.textContent = `Giveaway ends on ${weekdays[day]}, ${
  months[month]
} ${date} ${year}, ${hour}:${String(minutes).padStart(2, 0)} AM`;
