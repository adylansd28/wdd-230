const tempString = document.getElementById("temp").textContent;
const tempNumber = parseFloat(tempString);

const speedString = document.getElementById("speed").textContent;
const speedNumber = parseFloat(speedString);

let windChill = 35.74 + (0.6215*tempNumber) - (35.75*Math.pow(speedNumber, 0.16)) + (0.4275*tempNumber*Math.pow(speedNumber, 0.16));
let windChillRound = Math.round(windChill);

if (tempNumber <= 50 && speedNumber > 3) {

    document.getElementById("chill").textContent = "Wind Chiil is " + windChillRound + "\xB0F";

} else {

    document.getElementById("chill").textContent = "No Wind Chill today";

}