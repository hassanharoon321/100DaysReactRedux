import React from 'react';
import "./SeasonDisplay.css";

const seasonConfig = {
    summer: {
        text: "let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Burr Its Chilly",
        iconName: "snowflake"
    }
}

const getSeasons = (lat, getMonth) => {
    if (getMonth > 2 && getMonth < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer"
    }

}

function SeasonDisplay(props) {
    const season = getSeasons(props.lat, new Date().getMonth())
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay
