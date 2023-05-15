import React, {useState, useEffect} from "react";
import './Forecast.css';
import ForecastDay from './ForecastDay';
import axios from "axios";


export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    // set loaded to false when the coordinates change
    // shows forecast for city when new city is searched
    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="Forecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index){
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <ForecastDay data={dailyForecast}/>
                                </div>
                            );
                        }
                    })}
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