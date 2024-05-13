import React from "react";

export default function Background(props) {
    const getBackgroundImage = (iconName) => {
        let iconImages = {
            "broken-clouds-day" : "url('../../assets/images/brokenCloudsDay.jpg')",
            "broken-clouds-night" : "url('../../assets/images/brokenCloudsNight.jpg')",
            "clear-sky-day" : "url('../../assets/images/clearSkyDay.jpg')",
            "clear-sky-night" : "url('../../assets/images/clearSkyNight.jpg')",
            "few-clouds-day" : "url('../../assets/images/fewCloudsDay.jpg')",
            "few-clouds-night" : "url('../../assets/images/fewCloudsNight.jpg')",
            "mist-day" : "url('../../assets/images/mistDay.jpg')",
            "mist-night" : "url('../../assets/images/mistNight.jpg')",
            "rain-day" : "url('../../assets/images/rainDay.jpg')",
            "rain-night" : "url('../../assets/images/rainNight.jpg')",
            "shower-rain-day" : "url('../../assets/images/rainDay.jpg')",
            "shower-rain-night" : "url('../../assets/images/rainNight.jpg')",
            "scattered-clouds-day" : "url('../../assets/images/scatteredCloudsDay.jpg')",
            "scattered-clouds-night" : "url('../../assets/images/scatteredCloudsNight.jpg')",
            "snow-day" : "url('../../assets/images/snowDay.jpg')",
            "snow-night" : "url('../../assets/images/snowNight.jpg')",
            "thunderstorm-day" : "url('../../assets/images/thunderstormDay.jpg')",
            "thunderstorm-night" : "url('../../assets/images/thunderstormNight.jpg')"
        };
        
        return iconImages[iconName];
    }

    const backgroundImage = getBackgroundImage(props.iconText);

    return (
        <div className="vh-100 vw-100 position-fixed overflow-hidden top-0 left-0">
            <img src={backgroundImage} alt={props.iconText} />
        </div>
    )
}