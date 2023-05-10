import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1 className="text-capitalize">{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.date}/></li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col d-flex">
                    <WeatherIcon code={props.data.iconText} alt={props.data.description}/>
                    <p><span className="temperature">{Math.round(props.data.temperature)}</span><span className="unit"> °F</span></p>
                </div>
                <div className="col">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} mph</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}