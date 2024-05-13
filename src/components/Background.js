import React, { useMemo } from "react";

export default function Background(props) {
    const getBackgroundImage = useMemo(() => {
        // console.log("Icon name: ", props.image);

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
        
        const imageURL = iconImages[props.image];
        console.log("Image URL: ", imageURL);
        return imageURL;
    }, [props.image]); 

    const backgroundStyle = {
        backgroundImage: getBackgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
    };

    return (
        <div style={backgroundStyle} aria-label={props.image}></div>
    )
}