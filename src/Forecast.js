import React, {useState} from "react";
import './Forecast.css';
import ForecastDay from './ForecastDay';
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
                        <ForecastDay data={forecast[0]}/>
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