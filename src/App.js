import './App.css';
import React, {useState} from "react";
import axios from "axios";

export default function App() {
  let [weather, setWeather] = useState(null);
  let [city, setCity] = useState(" ");

  function submitInput(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function showWeather(response) {
    setWeather({
      temp: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url
    });
  }

  function handleCity(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=335d26daoc39f096bf1t1b45c4c341e4&units=imperial`;
    axios.get(url).then(showWeather);
  }

  if (weather) {
    return (
      <div className="App">
        <form onSubmit={handleCity}>
          <input type="text" placeholder="Enter a city..." onChange={submitInput}/>
          <input type="submit" value="Search"/>
        </form>
        <ul>
          <li>{Math.round(weather.temp)}</li>
          <li>{weather.description}</li>
          <li>{weather.humidity}%</li>
          <li>{Math.round(weather.wind)} mph</li>
          <li><img src={weather.icon} alt="weather icon"/></li>
        </ul>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <form onSubmit={handleCity}>
          <input type="text" placeholder="Enter a city..." onChange={submitInput}/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}