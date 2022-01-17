import waterLogo from './img/humidity-logo.png';
import windSym from './img/windspeed-logo.png';

export default function updateUI(city, country, temperature, weatherMain, weatherDesc, windSpeed, humidity, localTime) {
    // grab each element from the DOM
    const locationDisplay = document.getElementById('locationDisplay');
    const temperatureDisplay = document.getElementById('tempDisplay');
    const mainWeatherDisplay = document.getElementById('weatherMainDisplay');
    const weatherDescriptionDisplay = document.getElementById('weatherDescDisplay');
    const windSpeedDisplay = document.getElementById('windSpeedDisplay');
    const humidityDisplay = document.getElementById('humidityDisplay');
    const localTimeDisplay = document.getElementById('localTimeDisplay');

    // add logos for humidity and wind speed
    const humidityLogo = document.getElementById('dropLogo');
    humidityLogo.src = waterLogo;
    humidityLogo.style.cssText = 'object-fit: contain; height: 2vh; width: auto';

    const windLogo = document.getElementById('speedLogo');
    windLogo.src = windSym;
    windLogo.style.cssText = 'object-fit: contain; height: 2vh; width: auto';

    // set the displays for each field
    locationDisplay.textContent = `${city}, ${country}`;
    temperatureDisplay.textContent = `${Math.round(temperature)} °C`;
    mainWeatherDisplay.textContent = weatherMain;
    // capitalize each word in string
    // weatherDesc is a string, capitalize each word
    let descriptionArray = weatherDesc.split(' ');
    let capitalizedDescription = descriptionArray.map(word => word[0].toUpperCase() + word.slice(1));
    let outputDescription = capitalizedDescription.join(' ');
    weatherDescriptionDisplay.textContent = outputDescription;
    windSpeedDisplay.textContent = `Wind Speed: ${windSpeed.toFixed(1)} km/h`;
    humidityDisplay.textContent = `Humidity: ${humidity} %`;
    localTimeDisplay.textContent = `${localTime}`;
}