import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDay(props) {
    function day() {
        let date = new Date(props.data.time * 1000)
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    };

    return (
        <div className="ForecastDay">
            <div className="day">{day()}</div>
            {/* <WeatherIcon code={props.data.condition.icon} size={36}/> */}
            <WeatherIcon />
            <div className="forecastTemps">
                <span className="highTemp">{Math.round(props.data.temperature.maximum)}°</span>
                <span className="lowTemp">{Math.round(props.data.temperature.minimum)}°</span>
            </div>
        </div>
    );
}