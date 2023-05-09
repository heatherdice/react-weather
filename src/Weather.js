import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>New York</h1>
            <ul>
                <li>Monday 5:00</li>
                <li>Partly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col d-flex">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly cloudy"></img>
                    <p><span className="temperature">23</span><span className="unit"> °C</span></p>
                </div>
                <div className="col">
                    <ul>
                        <li>Precipitation: 0%</li>
                        <li>Humidity: 41%</li>
                        <li>Wind: 14 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}