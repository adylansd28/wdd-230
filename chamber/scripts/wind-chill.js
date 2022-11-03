const temperatureInput = document.querySelector(".temp-input");
const windSpeedInput = document.querySelector(".wind-speed-input");
let windChillSpan = document.querySelector(".wind-chill-span");
const calcBtn = document.querySelector(".calc-btn");

function windChill(){
    if (temperatureInput.value >= 50 || windSpeedInput <= 4.8) {
        windChillSpan.textContent = "N/A";
    } else {
        let f = 0;
        let t = temperatureInput.value;
        let s = windSpeedInput.value;
        let sTo016 = Math.pow(s, 0.16);

        f = 35.74 + 0.6215 * t - 35.75 * sTo016 + 0.4275 * t * sTo016

        f = f.toFixed(2);

        windChillSpan.textContent = f.toString() + " F°";
    }
}

calcBtn.addEventListener("click", windChill);

/* f = 35.74 + 0.6215t - 35.75s(to 0.16) + 0.4275ts(to -.16)
    f = wind chill
    t = temperature
    s = wind speed
    t < 50 F
    s > 4.8 mph
*/

