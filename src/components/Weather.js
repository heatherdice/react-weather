import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo.js";
import Forecast from "./Forecast.js"
import axios from "axios";
import "../css/Weather.css";
// will need to import Background

export default function Weather(props) {
    // establish useState for city, weather data
    const [city, setCity] = useState(props.defaultCity);
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
            // add something here to grab image?
        });
    }

    // API call
    function search() {
        const apiKey = "335d26daoc39f096bf1t1b45c4c341e4";
        let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`; // city = (use)State
        
        axios.get(apiURL).then(handleResponse);
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
            <div className="Weather">
                <form onSubmit={handleSubmit} className="input-group">
                    <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
                    <button type="button" className="btn fw-semibold" id="button-addon2">Search</button>
                </form>
                <WeatherInfo data={weatherData} />
                <Forecast coordinates={weatherData.coordinates} />
            </div>
        );
    }
    else {
        search();
        return "Loading...";
    }
}