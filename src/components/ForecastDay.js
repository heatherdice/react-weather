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
        <>
            <div className="day">{day()}</div>
            <WeatherIcon icon={props.data.condition.icon_url} alt={props.data.condition.icon} />
            <div className="forecastTemps">
                <span className="highTemp">{Math.round(props.data.temperature.maximum)}°</span>
                <span className="lowTemp">{Math.round(props.data.temperature.minimum)}°</span>
            </div>
        </>
    );
}