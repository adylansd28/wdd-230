/* Formatted Date Header */
const datefield = document.querySelector(".date");
let now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const header = document.querySelector(".header");
datefield.innerHTML = `<em>${fulldate}</em>`;


function Message(){
    if (now.getDay() == 1 || now.getDay() == 2 || now.getDay() == 5){

        let newMessage = document.createElement("p");
        newMessage.textContent = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
        newMessage.setAttribute("class", "message");

        header.prepend(newMessage);
    }
}

Message();

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