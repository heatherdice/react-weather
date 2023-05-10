import React, {useState} from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1 className="text-capitalize">{props.data.city}</h1>
            <ul>
                <li><FormattedDate date={props.data.date}/></li>
                <li>{props.data.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col d-flex">
                    <img src={props.data.icon} alt={props.data.description}></img>
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