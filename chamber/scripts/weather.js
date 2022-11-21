//Display
const weatherIcon = document.querySelector('#weatherIcon');
const temperature = document.querySelector('#temperature');
const caption = document.querySelector('#caption');
const windSpeed = document.querySelector('#windSpeed');
const windChill = document.querySelector('#windChill');

async function apiFetch() {

    try {

        let url = "https://api.openweathermap.org/data/2.5/weather?q=Quito&units=imperial&appid=69cb885e3688c3992b0fe4571e137a3b";

        const response = await fetch(url);

        if (response.ok) {

            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data);

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);

    }

};

function displayResults ( weatherData ) {

    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed}</strong>`

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    caption.textContent = desc;

    const tempNumber = parseFloat(weatherData.main.temp);
    const speedNumber = parseFloat(weatherData.wind.speed);

    let windChill = 35.74 + (0.6215*tempNumber) - (35.75*Math.pow(speedNumber, 0.16)) + (0.4275*tempNumber*Math.pow(speedNumber, 0.16));
    let windChillRound = Math.round(windChill);

    if (tempNumber <= 50 && speedNumber > 3) {

        document.querySelector("#windChill").innerHTML = "Wind Chiil is " + windChillRound + "\xB0F";

    } else {

        document.querySelector("#windChill").innerHTML = "N/A";

    }

};

apiFetch();