import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";


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
                    <WeatherIcon icon={props.data.icon} alt={props.data.iconText} />
                    <UnitConversion fahrenheit={props.data.temperature}/>
                    <p>
                    </p>
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