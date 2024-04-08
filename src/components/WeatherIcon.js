import React, { useState, useEffect } from "react";
// import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon() {
    const [weatherIcon, setWeatherIcon] = useState('');

    useEffect(() => {
        const fetchWeatherIcon = async () => {
            try {
                const apiKey = '335d26daoc39f096bf1t1b45c4c341e4';
                const response = await fetch(`https://api.shecodes.io/weather/v1/current?&key=${apiKey}&units=imperial`);
                if (response.ok) {
                    const iconData = await response.json();
                    console.log('Weather Icon Data: ', iconData);
                    setWeatherIcon(iconData.icon);
                } else {
                    console.error('Failed to fetch weather icon.');
                }
            } catch (error) {
                console.error('Error fetching weather icon.', error);
            }
        };

        fetchWeatherIcon();
    }, []);

    return (
        <div>
            {weatherIcon &&
                <img src={weatherIcon} alt="weather icon" />
            }
        </div>
    );

    // const descriptionMap = {
    //     "clear-sky-day": "CLEAR_DAY",
    //     "clear-sky-night": "CLEAR_NIGHT",
    //     "few-clouds-day": "PARTLY_CLOUDY_DAY",
    //     "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    //     "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    //     "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    //     "broken-clouds-day": "CLOUDY",
    //     "broken-clouds-night": "CLOUDY",
    //     "shower-rain-day": "RAIN",
    //     "shower-rain-night": "RAIN",
    //     "rain-day": "RAIN",
    //     "rain-night": "RAIN",
    //     "thunderstorm-day": "RAIN",
    //     "thunderstorm-night": "RAIN",
    //     "snow-day": "SNOW",
    //     "snow-night": "SNOW",
    //     "mist-day": "FOG",
    //     "mist-night": "FOG"
    // };

    // return (
    //     <ReactAnimatedWeather
    //         icon={descriptionMap[props.code]}
    //         color="#0CB6D7"
    //         size={props.size}
    //         animate={true}
    //     />
    // );
}