import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Toronto</h1>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
        alt="image"
      />
      <h3>6°C</h3>
      <div className="row justify-content-start">
        <div className="col-6">
          <ul>
            <li>Precipitation: 20%</li>
            <li>Humidity: 40%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-6">
          <ul>
            <li>Weather</li>
            <li>Friday 5:00pm</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
