import { useState } from 'react';
import styles from './weatherData.css'

const WeatherData = ({ weatherData }) => {
    const lvl0Conditions = [800];
    const lvl1Conditions = [801, 802];
    const lvl2Conditions = [803, 804];
    const lvl3Conditions = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
    const lvl4Conditions = [300, 301, 302, 310, 311, 312, 313, 314, 321];
    const lvl5Conditions = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
    const lvl6Conditions = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
    const lvl7Conditions = [200, 201, 202, 210, 211, 212, 221, 230, 231, 231];


    const chooseCurrentImg = (json) => {
        let condition = json.weather[0].id;
        if (lvl7Conditions.includes(condition)) {
            // display thunderstorm
            return "/publicWIMBY/graphics/1530363_weather_clouds_night_storm_icon.svg";
        } else if (lvl6Conditions.includes(condition)) {
            // display snow
            return "/publicWIMBY/graphics/1530371_weather_clouds_snow_winter_icon.svg";
        } else if (lvl5Conditions.includes(condition)) {
            // display rain
            return "/publicWIMBY/graphics/1530364_weather_rain_shower_storm_icon.svg";
        } else if (lvl4Conditions.includes(condition)) {
            // display drizzle
            return "/publicWIMBY/graphics/1530365_weather_cloud_drizzel_rain_icon.svg";
        } else if (lvl3Conditions.includes(condition)) {
            // display mist
            return "/publicWIMBY/graphics/1530368_weather_clouds_cloudy_fog_foggy_icon.svg";
        } else if (lvl2Conditions.includes(condition)) {
            // display heavy cloud
            return "/publicWIMBY/graphics/1530369_weather_cloud_clouds_cloudy_icon.svg";
        } else if (lvl1Conditions.includes(condition)) {
            // display light cloud
            return "/publicWIMBY/graphics/1530391_weather_clouds_sun_sunny_icon2.svg";
        } else {
            // display clear
            return "/publicWIMBY/graphics/1530392_weather_sun_sunny_temperature_icon.svg";
        }
    }

    const [showDetails, setShowDetails] = useState('none');
    const handleShowDetails = () => {
        console.log(showDetails)
        if (showDetails == 'none') {
            setShowDetails('block');
        } else {
            setShowDetails('none');
        }
    }

    return (
        <div className='main'>
            <div className="currentWeatherCard">
                <img id="currentIcon" src={chooseCurrentImg(weatherData)}></img>
                <div className='currentStack'>
                    <p id='location'>{weatherData.name}</p>                    
                    <p id='currentTemp'>{Math.round(weatherData.main.temp)}°</p>
                    <button id="showDetails" onClick={handleShowDetails}>Show Details</button>
                </div>
                <ul id="currentWeatherList" style={{display: showDetails}}>
                    <li id="conditions"><p>{weatherData.weather[0].description}</p></li>
                    <li id="feelslike">Feels Like: {Math.round(weatherData.main.feels_like)}°F</li>
                    <li id="tempmax">High: {Math.round(weatherData.main.temp_max)}°F</li>
                    <li id="tempmin">Low: {Math.round(weatherData.main.temp_min)}°F</li>
                    <li id="humidity">Humidity: {weatherData.main.humidity}%</li>
                    <li id="windspeed">Wind: {Math.round(weatherData.wind.speed)}MPH</li>
                </ul>
            </div>
            <div className='forecast'>
                <div className='day1'></div>
                <div className='day2'></div>
                <div className='day3'></div>
                <div className='day4'></div>
                <div className='day5'></div>
            </div>
        </div>
    )
}

export default WeatherData;