import { NextResponse } from 'next/server'

export async function POST(request) {
    const WEATHER_KEY = process.env.WEATHER_KEY;
    const onlyNumbers = /^[0-9]*$/;
    const onlyLettersAndUnderScores = /^\w+$/

    try {
        let locationInput = await request.json();
        locationInput = locationInput.split(' ').join('_');
        let response;
        let lat;
        let lon;
        let data;
        
        if (onlyNumbers.test(locationInput)) {
            response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${locationInput}&limit=5&appid=${WEATHER_KEY}`);
            const data = await response.json();
            lat = data.lat;
            lon = data.lon;
        } else if (onlyLettersAndUnderScores.test(locationInput)) {
            response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=5&appid=${WEATHER_KEY}`);
            const data = await response.json();
            lat = data[0].lat;
            lon = data[0].lon;
        } else {
            return NextResponse.json({responseCode: 400});
        }
    
        let weatherData = await fetchWeatherData(lat, lon);
        
        return NextResponse.json(weatherData, {responseCode: 200});
    } catch (error) {
        return NextResponse.json({responseCode: 500});
    }

}

const fetchWeatherData = async (lat, lon) => {
    const WEATHER_KEY = process.env.WEATHER_KEY;

    let dataArray = [];
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_KEY}`);
    const currentData = await response.json();
    dataArray.push(currentData);

    response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_KEY}`);
    const forecastData = await response.json();
    dataArray.push(forecastData);

    return dataArray;
}