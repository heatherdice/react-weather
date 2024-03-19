import React from "react";

export default function Background() {

    function getImage(iconElement) {
        let iconImages = {
            "broken-clouds-day" : "url('../images/brokenCloudsDay.jpg')",
            "broken-clouds-night" : "url('../images/brokenCloudsNight.jpg')",
            "clear-sky-day" : "url('../images/clearSkyDay.jpg')",
            "clear-sky-night" : "url('../images/clearSkyNight.jpg')",
            "few-clouds-day" : "url('../images/fewCloudsDay.jpg')",
            "few-clouds-night" : "url('../images/fewCloudsNight.jpg')",
            "mist-day" : "url('../images/mistDay.jpg')",
            "mist-night" : "url('../images/mistNight.jpg')",
            "rain-day" : "url('../images/rainDay.jpg')",
            "rain-night" : "url('../images/rainNight.jpg')",
            "shower-rain-day" : "url('../images/rainDay.jpg')",
            "shower-rain-night" : "url('../images/rainNight.jpg')",
            "scattered-clouds-day" : "url('../images/scatteredCloudsDay.jpg')",
            "scattered-clouds-night" : "url('../images/scatteredCloudsNight.jpg')",
            "snow-day" : "url('../images/snowDay.jpg')",
            "snow-night" : "url('../images/snowNight.jpg')",
            "thunderstorm-day" : "url('../images/thunderstormDay.jpg')",
            "thunderstorm-night" : "url('../images/thunderstormNight.jpg')"
        }
        return iconImages[iconElement];
    }

    // change this to useEffect
    function backgroundImage(response) {
        document.querySelector('#icon').setAttribute("src", response.data.condition.icon_url);
        let iconElement = document.querySelector("#icon");
        iconElement.setAttribute("alt", response.data.condition.icon);
        document.body.style.backgroundImage = getImage(iconElement.alt); // calls below function & sets image to match icon
    }

    return (
        <div className="vh-100 vw-100 position-fixed overflow-hidden top-0 left-0">
            <img src={} />
        </div>
    )
}