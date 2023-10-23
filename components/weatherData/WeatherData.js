import { useEffect, useState } from 'react';
import styles from './weatherData.css'

const WeatherData = ({ weatherData }) => {
    const currentData = weatherData[0];
    const forecastData = weatherData[1];

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
        if (showDetails == 'none') {
            setShowDetails('block');
        } else {
            setShowDetails('none');
        }
        handleDetailsButtonText();
    }

    const [detailsButtonText, setDetailsButtonText] = useState('Show');
    const handleDetailsButtonText = () => {
        if (detailsButtonText == 'Show') {
            setDetailsButtonText('Hide');
        } else {
            setDetailsButtonText('Show');
        }
    }

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const getDayString = (dayNum) => {
        const date = new Date();
        const day = date.getDay();
        return days[dayNum + day];
    }


    useEffect(() => {
        const d = new Date();
        const currentDayOfMonth = d.getDate();
        const days = document.querySelectorAll('.dayForecastData');
        for(let i = 0; i < days.length; i++) {
            let matchingData = forecastData.list.filter(dataPoint => {
                return dataPoint.dt_txt.substring(8,10) == (currentDayOfMonth + i + 1);
            });
    
            let low = 999;
            let high = -999;
            let conditions = [];
            matchingData.forEach(dataPoint => {
                if (dataPoint.main.temp > high) high = Math.round(dataPoint.main.temp);
                if (dataPoint.main.temp < low) low = Math.round(dataPoint.main.temp);
                conditions.push(dataPoint.weather[0].id);
            });
            let img = document.createElement('img');
            if (conditions.some(condition => lvl7Conditions.includes(condition))) {
                // display thunderstorm
                img.src = "/publicWIMBY/graphics/1530363_weather_clouds_night_storm_icon.svg";
            } else if (conditions.some(condition => lvl6Conditions.includes(condition))) {
                // display snow
                img.src = "/publicWIMBY/graphics/1530371_weather_clouds_snow_winter_icon.svg";
            } else if (conditions.some(condition => lvl5Conditions.includes(condition))) {
                // display rain
                img.src = "/publicWIMBY/graphics/1530364_weather_rain_shower_storm_icon.svg";
            } else if (conditions.some(condition => lvl4Conditions.includes(condition))) {
                // display drizzle
                img.src = "/publicWIMBY/graphics/1530365_weather_cloud_drizzel_rain_icon.svg";
            } else if (conditions.some(condition => lvl3Conditions.includes(condition))) {
                // display mist
                img.src = "/publicWIMBY/graphics/1530368_weather_clouds_cloudy_fog_foggy_icon.svg";
            } else if (conditions.some(condition => lvl2Conditions.includes(condition))) {
                // display heavy cloud
                img.src = "/publicWIMBY/graphics/1530369_weather_cloud_clouds_cloudy_icon.svg";
            } else if (conditions.some(condition => lvl1Conditions.includes(condition))) {
                // display light cloud
                img.src = "/publicWIMBY/graphics/1530391_weather_clouds_sun_sunny_icon2.svg";
            } else {
                // display clear
                img.src = "/publicWIMBY/graphics/1530392_weather_sun_sunny_temperature_icon.svg";
            }
            days[i].appendChild(img);
            const p = document.createElement('p');
            p.innerHTML = `${low}°F - ${high}°F`;
            days[i].appendChild(p);
        }
    }, []);
    

    return (
        <div className='weatherDataMain'>
            <div className="currentWeatherCard">
                <img id="currentIcon" src={chooseCurrentImg(currentData)}></img>
                <div className='currentStack'>
                    <p id='location'>{currentData.name}</p>                    
                    <p id='currentTemp'>{Math.round(currentData.main.temp)}°</p>
                    <button id="showDetails" onClick={handleShowDetails}>{detailsButtonText} Details</button>
                </div>
                <ul id="currentWeatherList" style={{display: showDetails}}>
                    <li id="conditions"><p id='currentDescription'>{currentData.weather[0].description}</p></li>
                    <li id="feelslike">Feels Like: {Math.round(currentData.main.feels_like)}°F</li>
                    <li id="tempmax">High: {Math.round(currentData.main.temp_max)}°F</li>
                    <li id="tempmin">Low: {Math.round(currentData.main.temp_min)}°F</li>
                    <li id="humidity">Humidity: {currentData.main.humidity}%</li>
                    <li id="windspeed">Wind: {Math.round(currentData.wind.speed)}MPH</li>
                </ul>
            </div>
            <div className='forecast'>
                <div className="day" id='day1'>
                    <p>{getDayString(1)}</p>
                    <div className='dayForecastData'></div>
                </div>
                <div className="day" id='day2'>
                    <p>{getDayString(2)}</p>
                    <div className='dayForecastData'></div>
                </div>
                <div className="day" id='day3'>
                    <p>{getDayString(3)}</p>
                    <div className='dayForecastData'></div>
                </div>
                <div className="day" id='day4'>
                    <p>{getDayString(4)}</p>
                    <div className='dayForecastData'></div>
                </div>
                <div className="day" id='day5'>
                    <p>{getDayString(5)}</p>
                    <div className='dayForecastData'></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherData;