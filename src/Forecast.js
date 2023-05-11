import React from "react";
import WeatherIcon from './WeatherIcon';
import './Forecast.css';


export default function Forecast() {
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