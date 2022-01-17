import './style.css';
import getWeatherDataJSON from './weatherAPIHandler.js';
import updateUI from './uiHandler';
//input jdkfsajk.timezone into getLocalTime function
import getLocalTime from './getLocalTime.js';
import websiteLogo from './img/website_logo.png';

const initialValues = await getWeatherDataJSON('vancouver');
const locationName = initialValues.name;
const locationCountry = initialValues.sys.country;
const tempOverall = initialValues.main.temp;
const mainWeather = initialValues.weather[0].main;
const descWeather = initialValues.weather[0].description;
const humidityPercentage = initialValues.main.humidity;
const windSpeed = initialValues.wind.speed;

// set icon
const webIcon = document.getElementById('icon');
webIcon.href = websiteLogo;

// update the UI
updateUI(locationName, locationCountry, tempOverall, mainWeather, descWeather, windSpeed, humidityPercentage, getLocalTime(initialValues.timezone));

// handle user location submissions
const locationSubmit = document.getElementById('inputFields');

locationSubmit.addEventListener('submit', async (event) => {
    // prevent a refresh
    event.preventDefault();
    // get value of user input
    let inputLocation = locationSubmit['location'].value;
    const location = await getWeatherDataJSON(inputLocation).catch(() => {return 'error'});
    // just pass on the case that the user is stupid and enters weird value
    if (location.message !== 'city not found' && location.message !== 'Nothing to geocode' && location !== undefined) {
        updateUI(location.name, location.sys.country, location.main.temp, location.weather[0].main, location.weather[0].description, location.wind.speed, location.main.humidity, getLocalTime(location.timezone));
    }
    
});
