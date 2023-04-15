import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div className="forecast-icon">
            <img src={props.data.icon} alt="" />
          </div>
          <div className="forecast-temps">
            <span className="forecast-temp-max">10°</span>
            <span className="forecast-temp-min">8°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
