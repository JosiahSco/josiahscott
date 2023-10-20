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
        //weatherData = await data;
        
        console.log(weatherData);
        setShowSearchBar(false);
    }
    return (
        <main className="main">
            {/* <div className="cloudContainer">
               <div className="cloudIntro"></div>
            </div> */}
            {showSearchBar ? (
                <WeatherSearch onSearch={handleWeatherData}/>
            ) : (
                <WeatherData weatherData={weatherData}/>
            )}
        </main>
    )
}