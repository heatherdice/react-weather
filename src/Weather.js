import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            date: "Monday 5:00",
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            temperature: response.data.temperature.current,
            city: response.data.city,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                        </div>
                        <div className="col-3">
                            <input type="submit" value="search" className="btn btn-primary w-100"/>
                        </div>
                    </div>
                </form>
                <h1 className="text-capitalize">{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li>{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col d-flex">
                        <img src={weatherData.icon} alt={weatherData.description}></img>
                        <p><span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit"> °F</span></p>
                    </div>
                    <div className="col">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} mph</li>
                        </ul>
                    </div>
                </div>
            </div>
        );    
    }
    else {
        const apiKey = "335d26daoc39f096bf1t1b45c4c341e4";
        let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
        axios.get(apiURL).then(handleResponse);
        return "Loading...";
    }
}