import React, {useState} from "react";
import WeatherIcon from './WeatherIcon';
import './Forecast.css';
import axios from "axios";


export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        console.log(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="Forecast">
                <div className="row">
                    <div className="col">
                        <div className="day">{Date(forecast[0].time)}</div>
                        <WeatherIcon code={forecast[0].condition.icon} size={36}/>
                        <div className="forecastTemps">
                            <span className="highTemp">{Math.round(forecast[0].temperature.maximum)}°</span>
                            <span className="lowTemp">{Math.round(forecast[0].temperature.minimum)}°</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        let apiKey = "335d26daoc39f096bf1t1b45c4c341e4";
        let latitude = props.coordinates.latitude;
        let longitude = props.coordinates.longitude;
        let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=imperial`;
    
        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}