export default async function getWeatherDataJSON(location) {
    try {
        const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=eea6270f8d3b0007556349798ce5e18d`, {mode: 'cors'}).catch(() => {return 'error'});
        // any errors should be already caught at this point
        const weatherData = await apiResponse.json();
        return weatherData;
    } catch(error) {
        return 'error';
    }
};
