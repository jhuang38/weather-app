export default function updateUI(city, country, temperature, weatherDesc, windSpeed, humidity) {
    // grab each element from the DOM
    const locationDisplay = document.getElementById('locationDisplay');
    const temperatureDisplay = document.getElementById('tempDisplay');
    const weatherDescriptionDisplay = document.getElementById('weatherDescDisplay');
    const windSpeedDisplay = document.getElementById('windSpeedDisplay');
    const humidityDisplay = document.getElementById('humidityDisplay');

    // set the displays for each field
    locationDisplay.textContent = `${city}, ${country}`;
    temperatureDisplay.textContent = `${Math.round(temperature)} °C`;
    // capitalize each word in string
    // weatherDesc is a string, capitalize each word
    let descriptionArray = weatherDesc.split(' ');
    let capitalizedDescription = descriptionArray.map(word => word[0].toUpperCase() + word.slice(1));
    let outputDescription = capitalizedDescription.join(' ');

    weatherDescriptionDisplay.textContent = outputDescription;
    windSpeedDisplay.textContent = `Wind Speed: ${windSpeed.toFixed(1)} km/h`;
    humidityDisplay.textContent = `Humidity: ${humidity} %`;
}