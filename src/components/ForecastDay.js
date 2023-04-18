import React, { useContext } from "react";
import { DegreeTypeContext } from "../context/DegreeTypeContext";

export default function ForecastDay(props) {
  const { degreeType } = useContext(DegreeTypeContext);

  function maxTemp() {
    let temp = Math.round(props.data.temperature.maximum);
    if (degreeType === "fahrenheit") {
      temp = (temp * 9) / 5 + 32;
    }
    return `${Math.round(temp)}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data.temperature.minimum);
    if (degreeType === "fahrenheit") {
      temp = (temp * 9) / 5 + 32;
    }
    return `${Math.round(temp)}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img src={props.data.condition.icon_url} alt="" />
      </div>
      <div className="forecast-temps">
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
