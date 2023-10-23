
let WEATHER_KEY;

window.addEventListener('message', function(event) {
    WEATHER_KEY = event.data.environmentVariable
})

function findMyPosition() {
    function success(position) {
        const latitudeNum = position.coords.latitude;
        const longitudeNum = position.coords.longitude;
        getCurrentWeather(latitudeNum, longitudeNum);
    }

    function error() {
        alert('There has been an error getting your location');
    }

    if (!navigator.geolocation) {
        alert('There has been an error getting your location');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

document.querySelector('#getLocation').addEventListener('click', findMyPosition);


document.querySelector('.search-bar').addEventListener('keypress', function (event) {
    if (event.key === 'Enter' || event.keyCode === 13 || event.keyCode === 3) {
        var hasNumber = /\d/;
        let locationInput = document.getElementById("searchInput").value;
        if (hasNumber.test(locationInput)) { //if search input is zipcode
            fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${locationInput}&limit=5&appid=${WEATHER_KEY}`)
                .then(response => response.json()) //everything after this is the same for both conditions and should be put into a function instead of being written twice
                .then(json => {
                    if (json.length <= 0) {
                        alert('Invalid Location Entered');
                    } else {
                        getCurrentWeather(json.lat, json.lon);
                    }
                });
        } else { //else interpret search input as city name
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${locationInput}&limit=5&appid=${WEATHER_KEY}`)
                .then(response => response.json())
                .then(json => {
                    if (json.length <= 0) {
                        alert('Invalid Location Entered');
                    } else {
                        getCurrentWeather(json[0].lat, json[0].lon);
                    }
                });
        }
    }
});

function getCurrentWeather(latitude, longitude) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_KEY}`)
        .then(response => response.json())
        .then(json => {
            hideSearchElement();
            document.getElementById('weatherWrapper').style.display = 'flex';
            fillCurrentWeatherData(json);

        });

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${WEATHER_KEY}`)
        .then(response => response.json())
        .then(json => {
            fillForecast(json);
        });
}

function convertTime(timestamp, dow) { // unix timestamp, bool (true if include day of week)
    var date = new Date(timestamp * 1000); // convert to miliseconds from seconds 
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var day = dayName[date.getDay()];
    var hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours(); // 12-Hour Format 
    var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); // 10:3 -> 10:03 
    var period = date.getHours() < 12 ? 'AM' : 'PM';
    var formattedTime = dow ? day + ' ' + hour + ':' + min + ' ' + period : hour + ':' + min + ' ' + period;
    return formattedTime;
}

document.querySelector('#detailsButton').addEventListener('click', showDetails);

//this is a temporary function for testing purposes
function hideSearchElement() {
    document.getElementById('searchLocation').style.display = "none";
    document.querySelector('.container').style.display = "none";
}

const container = document.querySelector('#currentWeather');
const element3 = document.querySelector('#currentWeatherList');
const initialContainerWidth = container.offsetWidth;

function showDetails() {
    if(document.getElementById('currentWeatherList').style.display === 'none' ) {
        document.getElementById('currentWeatherList').style.display = 'inline-block';
        document.getElementById('detailsWrapper').style.flex = '1';
    } else {
        document.getElementById('currentWeatherList').style.display = 'none';
        document.getElementById('detailsWrapper').style.flex = '0';
    }


    // const isElement3Visible = element3.style.display === 'inline-block';

    // if (isElement3Visible) {
    //     element3.style.display = 'none';
    //     container.insertBefore(element3, container.firstElementChild); // Move the element to the end of the container
    //     container.style.width =  '40vw';
    // } else {
    //     element3.style.display = 'inline-block';
    //     container.appendChild(element3); // Move the element back to its original position
    //     container.style.width = '55vw';
    // }
    

}

const lvl0Conditions = [800];
const lvl1Conditions = [801, 802];
const lvl2Conditions = [803, 804];
const lvl3Conditions = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
const lvl4Conditions = [300, 301, 302, 310, 311, 312, 313, 314, 321];
const lvl5Conditions = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
const lvl6Conditions = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
const lvl7Conditions = [200, 201, 202, 210, 211, 212, 221, 230, 231, 231];

function fillCurrentWeatherData(json) {
    //document.getElementById('currentWeatherList').style.backgroundColor = 'rgba(0,0,0,0.25)';
    // WEATHER RESULTS
    // Location
    document.querySelector('#currentLocation').textContent = json.name;
    // Current Temperature
    document.querySelector('#currentTemp').textContent = Math.round(json.main.temp) + '°F';
    // Feels Like
    document.querySelector('#feelslike').textContent = 'Feels Like: ' + Math.round(json.main.feels_like) + '°F';
    // Main Weather Status "rain"
    // document.querySelector('#conditions').textContent = json.weather[0].main;
    //Desc for Main Status "moderate rain"
    document.querySelector('#conditions').textContent = 'Currently ' + json.weather[0].description;
    // High Temp 
    document.querySelector('#tempmax').textContent = 'High: ' + Math.round(json.main.temp_max) + '°F';
    // Low Temp
    document.querySelector('#tempmin').textContent = 'Low: ' + Math.round(json.main.temp_min) + '°F';
    // Humidity
    document.querySelector('#humidity').textContent = 'Humidity: ' + json.main.humidity + '%';
    // Wind
    // - Speed
    document.querySelector('#windspeed').textContent = 'WIND Speed: ' + Math.round(json.wind.speed) + ' MPH';
    // Sunset Time
    document.querySelector('#sunset').textContent = 'Sunset at ' + convertTime(json.sys.sunset, false);
    // Sunrise Time
    document.querySelector('#sunrise').textContent = 'Sunrise at ' + convertTime(json.sys.sunrise, false);
    // Weather Icon
    let condition = json.weather[0].id;
    if (lvl7Conditions.includes(condition)) {
        // display thunderstorm
        document.querySelector('#currentWeatherIcon').src = "graphics/1530363_weather_clouds_night_storm_icon.svg";
    } else if (lvl6Conditions.includes(condition)) {
        // display snow
        document.querySelector('#currentWeatherIcon').src = "graphics/1530371_weather_clouds_snow_winter_icon.svg";
    } else if (lvl5Conditions.includes(condition)) {
        // display rain
        document.querySelector('#currentWeatherIcon').src = "graphics/1530364_weather_rain_shower_storm_icon.svg";
    } else if (lvl4Conditions.includes(condition)) {
        // display drizzle
        document.querySelector('#currentWeatherIcon').src = "graphics/1530365_weather_cloud_drizzel_rain_icon.svg";
    } else if (lvl3Conditions.includes(condition)) {
        // display mist
        document.querySelector('#currentWeatherIcon').src = "graphics/1530368_weather_clouds_cloudy_fog_foggy_icon.svg";
    } else if (lvl2Conditions.includes(condition)) {
        // display heavy cloud
        document.querySelector('#currentWeatherIcon').src = "graphics/1530369_weather_cloud_clouds_cloudy_icon.svg";
    } else if (lvl1Conditions.includes(condition)) {
        // display light cloud
        document.querySelector('#currentWeatherIcon').src = "graphics/1530391_weather_clouds_sun_sunny_icon2.svg";
    } else {
        // display clear
        document.querySelector('#currentWeatherIcon').src = "graphics/1530392_weather_sun_sunny_temperature_icon.svg";
    }
}

function fillForecast(json) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const forecastCardDays = document.querySelectorAll(".forecastCard .day");
    const date = new Date();

    // Set day text of forecast cards
    const daysArrayLength = days.length;
    for (let i = 0; i < forecastCardDays.length; i++) {
        // Slightly odd hack providing circular array access without mutation
        forecastCardDays[i].textContent = days[((date.getDay() + i + 1) % daysArrayLength + daysArrayLength) % daysArrayLength];
    }

    // Setting highTemp and lowTemp for each day
    // API data is only in 3 hour increments, not daily, so check each increment for lowest and highest temp
    const lows = document.querySelectorAll(".low");
    const highs = document.querySelectorAll(".high");
    const forecastImgs = document.querySelectorAll(".forecastImg");

    for (let i = 0; i < 5; i++) {
        let min = 999;
        let max = -999;
        let conditions = [];
        for (let j = i * 8; j < (i * 8 + 8); j++) {
            if (json.list[j].main.temp_min < min) {
                min = json.list[j].main.temp_min;
            }

            if (json.list[j].main.temp_max > max) {
                max = json.list[j].main.temp_max
            }

            conditions.push(json.list[j].weather[0].id)
        }
        if (conditions.some(condition => lvl7Conditions.includes(condition))) {
            // display thunderstorm
            forecastImgs[i].src = "graphics/1530363_weather_clouds_night_storm_icon.svg";
        } else if (conditions.some(condition => lvl6Conditions.includes(condition))) {
            // display snow
            forecastImgs[i].src = "graphics/1530371_weather_clouds_snow_winter_icon.svg";
        } else if (conditions.some(condition => lvl5Conditions.includes(condition))) {
            // display rain
            forecastImgs[i].src = "graphics/1530364_weather_rain_shower_storm_icon.svg";
        } else if (conditions.some(condition => lvl4Conditions.includes(condition))) {
            // display drizzle
            forecastImgs[i].src = "graphics/1530365_weather_cloud_drizzel_rain_icon.svg";
        } else if (conditions.some(condition => lvl3Conditions.includes(condition))) {
            // display mist
            forecastImgs[i].src = "graphics/1530368_weather_clouds_cloudy_fog_foggy_icon.svg";
        } else if (conditions.some(condition => lvl2Conditions.includes(condition))) {
            // display heavy cloud
            forecastImgs[i].src = "graphics/1530369_weather_cloud_clouds_cloudy_icon.svg";
        } else if (conditions.some(condition => lvl1Conditions.includes(condition))) {
            // display light cloud
            forecastImgs[i].src = "graphics/1530391_weather_clouds_sun_sunny_icon2.svg";
        } else {
            // display clear
            forecastImgs[i].src = "graphics/1530392_weather_sun_sunny_temperature_icon.svg";
        }
        lows[i].textContent = Math.round(min) + "°F";
        highs[i].textContent = Math.round(max) + "°F";
    }

}

