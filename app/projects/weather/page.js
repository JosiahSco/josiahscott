'use client'
import styles from './weather.css'
import { FormEvent, useState } from 'react';
import WeatherSearch from '../../../components/weatherSearch/WeatherSearch.js'
import WeatherData from '@/components/weatherData/WeatherData.js';

export default function Weather() {
    const [showSearchBar, setShowSearchBar] = useState(true);
    const [weatherData, setWeatherData] = useState(null);
    

    const handleWeatherData = async (data) => {
        const resolvedData = await data;
        setWeatherData(resolvedData);

        if(resolvedData === null) {
            alert("Could not retrieve weather data");
            return;
        }
        setShowSearchBar(false);

    }

    return (
        <main className="weather-main">
            
            <div id="background-wrap">
                <div class="x1">
                    <div class="cloud"></div>
                </div>
                <div class="x2">
                    <div class="cloud"></div>
                </div>
                <div class="x3">
                    <div class="cloud"></div>
                </div>
                <div class="x4">
                    <div class="cloud"></div>
                </div>
                <div class="x5">
                    <div class="cloud"></div>
                </div>
            </div>

            {showSearchBar ? (
                <WeatherSearch onSearch={handleWeatherData}/>
            ) : (
                <WeatherData weatherData={weatherData}/>
            )}
        </main>
    )
}