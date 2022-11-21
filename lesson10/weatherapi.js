//Input
const searchBtn = document.querySelector('#searchBtn');
let insertCity = document.querySelector('#insertCity');

//Display
const currentTemp = document.querySelector('#current-temp');

let displayCity = document.querySelector('#displayCity');
let displayCity2 = document.querySelector('#displayCity2');
let displayCity3 = document.querySelector('#displayCity3');

let latitude = document.querySelector('#lat');
let longitude = document.querySelector('#lon');

let humidity = document.querySelector('#hum');

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');



async function apiFetch(city) {

    try {

        let formatCity = city.toLowerCase();
        formatCity = formatCity.charAt(0).toUpperCase() + formatCity.slice(1);

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${formatCity}&units=imperial&appid=69cb885e3688c3992b0fe4571e137a3b`;

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

    latitude.innerHTML = weatherData.coord.lat;
    longitude.innerHTML = weatherData.coord.lon;
    humidity.innerHTML = weatherData.main.humidity;

    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    insertCity.value = '';

};

function search () {

    displayCity.innerHTML = insertCity.value;
    displayCity2.innerHTML = insertCity.value;
    displayCity3.innerHTML = insertCity.value;
    apiFetch(insertCity.value);

}

searchBtn.addEventListener('click', search);