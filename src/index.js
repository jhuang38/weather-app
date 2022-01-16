import './style.css';
// this is an await function
import getWeatherDataJSON from './weatherAPIHandler.js';
import updateUI from './uiHandler';

const initialValues = await getWeatherDataJSON('vancouver');
const locationName = initialValues.name;
const locationCountry = initialValues.sys.country;
const tempOverall = initialValues.main.temp;
const mainWeather = initialValues.weather[0].description;
const humidityPercentage = initialValues.main.humidity;
const windSpeed = initialValues.wind.speed;

// update the UI
updateUI(locationName, locationCountry, tempOverall, mainWeather, windSpeed, humidityPercentage);

// handle user location submissions
const locationSubmit = document.getElementById('input');

locationSubmit.addEventListener('submit', async (event) => {
    // prevent a refresh
    event.preventDefault();
    // get value of user input
    let inputLocation = locationSubmit['location'].value;
    const location = await getWeatherDataJSON(inputLocation);

    // just pass on the case that the user is stupid and enters weird value
    if (location != 'error') {
        updateUI(location.name, location.sys.country, location.main.temp, location.weather[0].description, location.main.humidity, location.wind.speed);
    }
    
});
