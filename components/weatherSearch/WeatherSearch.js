'use client'
import styles from './weatherSearch.css'
import { FormEvent, useState } from 'react';

export default function WeatherSearch({onSearch}) {
    const [locationString, setLocationString] = useState('')

    const handleLocationChange = (e) => {
        setLocationString(e.target.value)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (locationString.length < 3) return;
        try {
            const response = await fetch('/api/geo-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(locationString)
            })
            const weatherData = await response.json();
            onSearch(weatherData);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const handleUseCurrentLocation = async () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const weatherData = getWeatherDataWithLatLon(latitude, longitude);
            onSearch(weatherData);
          });
        } else {
          alert("Geolocation is not supported by your browser.");
        }
      };
    
    return (
        <main className="main">
            {/* <div className="cloudContainer">
               <div className="cloudIntro"></div>
            </div> */}
            <div className="searchContainer">
                <form onSubmit={handleFormSubmit} className='searchForm'>
                    <input onChange={handleLocationChange} id="searchInput" type="text"  value={locationString} placeholder="Enter Location (City Name OR Zip Code)" minLength={3}></input>
                </form>
                    <button id="getLocation" type="button" onClick={handleUseCurrentLocation}><img className="locationImg" src="/publicWIMBY/graphics/map-marker-alt.png"></img></button>
            </div>
        </main>
    )
}

async function getWeatherDataWithLatLon(lat, lon) {
    let array = [lat, lon]
    try {
        const response = await fetch('/api/weather-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(array)
        })
        return await response.json()
    } catch (error) {
        console.error("Error:", error);
    }
}