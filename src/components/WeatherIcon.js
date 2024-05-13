import React from "react";

export default function WeatherIcon(props) {
    return (
        <>
            <img id="icon" src={props.icon} alt={props.alt} height={props.height} />
        </>
    );
}