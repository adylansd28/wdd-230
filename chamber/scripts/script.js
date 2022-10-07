/* Formatted Date Header */
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
datefield.innerHTML = `<em>${fulldate}</em>`;


/* Hamburger Button */
function toggleMenu () {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;

const date = new Date(document.lastModified).toLocaleString();

document.querySelector("#last-updated").innerHTML = date;


/* Monday and Tuesday Message */
const dayNumber = now.getDay();
const message = document.getElementById("message");

if ((dayNumber == 1) || (dayNumber == 2)) {
    message.classList.add("showme");
} else {
    message.classList.add("hideme");
};