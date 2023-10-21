import { NextResponse } from 'next/server'

export async function POST(request) {
    const WEATHER_KEY = process.env.WEATHER_KEY;
    const onlyNumbers = /^[0-9]*$/;
    const onlyLettersAndUnderScores = /^\w+$/

    try {
        let locationInput = await request.json();
        locationInput = locationInput.split(' ').join('_');
        let response;

        if (onlyNumbers.test(locationInput)) {
            response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${locationInput}&limit=5&appid=${WEATHER_KEY}`);
        } else if (onlyLettersAndUnderScores.test(locationInput)) {
            // locationInput = locationInput.split(' ').join('_');
            response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=5&appid=${WEATHER_KEY}`);
        } else {
            return NextResponse.json("Incorrect Input: use only city name OR zip code", {response: 400})
        }
        const data = await response.json();
        const lat = data[0].lat;
        const lon = data[0].lon;
        let weatherData = await fetchWeatherData(lat, lon);
        
        return NextResponse.json(weatherData, {response: 200})
    } catch (error) {
        return NextResponse.json("Could not fetch weather data", {response: 500})
    }

}

const fetchWeatherData = async (lat, lon) => {
    const WEATHER_KEY = process.env.WEATHER_KEY;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_KEY}`);
    const data = await response.json();
    return data;
}