import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js"
import Background from "./Background.js";
import axios from "axios";
import "../css/Weather.css";

export default function Weather() {
    // establish useState for city, weather data
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState({ready: false});

    // set weather data according to API response
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coordinates,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            iconText: response.data.condition.icon,
            temperature: response.data.temperature.current,
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed
        });
    }

    // handle errors for geolocation function
    function handleError(error) {
        console.error('API request error: ', error);
    }

    // sets initial city to user's current location; otherwise, sets a default location &/or handles errors
    function search() {
        const apiKey = "335d26daoc39f096bf1t1b45c4c341e4";
    
        // check if geolocation is supported
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const apiURL = `https://api.shecodes.io/weather/v1/current?lat=${latitude}&lon=${longitude}&key=${apiKey}&units=imperial`;
    
                    // make API call w/ lat & long
                    axios.get(apiURL)
                        .then(handleResponse)
                        .catch(handleError);
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                    // if geolocation fails, set default city to Philadelphia
                    const defaultCity = "Philadelphia";
                    const apiURL = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=imperial`;
                    axios.get(apiURL)
                        .then(handleResponse)
                        .catch(handleError);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
            const defaultCity = "Philadelphia";
            const apiURL = `https://api.shecodes.io/weather/v1/current?query=${defaultCity}&key=${apiKey}&units=imperial`;
            axios.get(apiURL)
                .then(handleResponse)
                .catch(handleError);
        }
    }

    // submit city
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    // change, display city info
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    // return weather info or loading message
    if (weatherData.ready) {
        return (
            <>
                <Background image={weatherData.iconText} />
                <div className="Weather">
                    <form onSubmit={handleSubmit} className="input-group">
                        <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                        <button type="button" className="btn fw-semibold" id="button-addon2">Search</button>
                    </form>
                    <WeatherInfo data={weatherData} />
                    <Forecast coordinates={weatherData.coordinates} />
                </div>
            </>
        );
    }
    else {
        search();
        return "Loading...";
    }
}