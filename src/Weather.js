import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Toronto</h1>
      <div className="row align-items-center">
        <div className="col">
          <div className="d-flex align-items-center">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt="image"
            />
            <p className="degree">6°</p>
          </div>
        </div>
        <div className="col stats">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
        <div className="col date">
          <ul>
            <li className="date-header">Weather</li>
            <li>Friday 5:00pm</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
