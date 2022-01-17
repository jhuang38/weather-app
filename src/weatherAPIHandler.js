async function getWeatherDataJSON(location) {
    try {
        let apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=eea6270f8d3b0007556349798ce5e18d`, {mode: 'cors'});
        const weatherData = await apiResponse.json();
        return weatherData;
    } catch(error) {
        // errors are not being caught?
        console.log(error);
    }
};

export default getWeatherDataJSON;
