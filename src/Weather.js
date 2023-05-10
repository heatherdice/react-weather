import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
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

    function search() {
        const apiKey = "335d26daoc39f096bf1t1b45c4c341e4";
        let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`; // city = (use)State
        axios.get(apiURL).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="search" className="btn w-100"/>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData}/>
            </div>
        );
    }
    else {
        search();
        return "Loading...";
    }
}