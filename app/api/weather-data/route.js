import { NextResponse } from 'next/server'

export async function POST(request) {
    const WEATHER_KEY = process.env.WEATHER_KEY;
    try {
        let locationInput = await request.json();
        let lat = locationInput[0];
        let lon = locationInput[1];
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${WEATHER_KEY}`);
        const weatherData = await response.json();
        return NextResponse.json(weatherData, {response: 200})
    } catch (error) {
        return NextResponse.json("Could not fetch weather data", {response: 500})
    }


}

