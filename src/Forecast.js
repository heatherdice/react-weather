import React from "react";
import WeatherIcon from './WeatherIcon';
import './Forecast.css';
import axios from "axios";


export default function Forecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "335d26daoc39f096bf1t1b45c4c341e4";
    let latitude = props.coordinates.latitude;
    let longitude = props.coordinates.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="Forecast">
            <div className="row">
                <div className="col">
                    <div className="day">Friday</div>
                    <WeatherIcon code="scattered-clouds-day" size={36}/>
                    <div className="forecastTemps">
                        <span className="highTemp">77°</span>
                        <span className="lowTemp">48°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}