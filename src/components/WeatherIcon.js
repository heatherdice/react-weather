import React, { useEffect } from "react";
// import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
    // calls getImage & sets image to match icon
    // function backgroundImage(response) {
    //     document.querySelector('#icon').setAttribute("src", response.data.condition.icon_url);
    //     let iconElement = document.querySelector("#icon");
    //     iconElement.setAttribute("alt", response.data.condition.icon);
    // }

    // useEffect(() => {
    //     backgroundImage(response);
    // }, [props.icon]);

    // map of icon descriptions for ReactAnimatedWeather
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

    return (
        <>
            <img id="icon" src={props.icon} alt={props.alt} height={70} />
        </>

        // previous return code, using ReactAnimatedWeather component
        // <ReactAnimatedWeather
        //     icon={descriptionMap[props.code]}
        //     color="#0CB6D7"
        //     size={props.size}
        //     animate={true}
        // />
    );
}