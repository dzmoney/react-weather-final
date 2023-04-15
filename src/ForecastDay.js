import React from "react";

export default function ForecastDay(props) {
  function maxTemp() {
    let temp = Math.round(props.data[0].temperature.maximum);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.data[0].temperature.minimum);
    return `${temp}°`;
  }

  function day() {
    let date = new Date(props.data[0].time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecast-day">{day()}</div>
      <div className="forecast-icon">
        <img src={props.data[0].condition.icon_url} alt="" />
      </div>
      <div className="forecast-temps">
        <span className="forecast-temp-max">{maxTemp()}</span>
        <span className="forecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
