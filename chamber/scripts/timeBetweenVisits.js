// initialize display elements
const Display = document.querySelector(".p-header-span");
let newDay = new Date();
let newDayNumber = newDay.getTime(); 

// get the stored value in localStorage
let lastDay = Number(window.localStorage.getItem("lastDay"));

// determine if this is the first visit or display the number of visits.
visitsInterval = (newDayNumber - lastDay) / 86400000;

let visitsIntervalRounded = Math.round(visitsInterval);

// store the new number of visits value
localStorage.setItem("lastDay", newDayNumber);

// show todays date.
Display.textContent = visitsIntervalRounded;