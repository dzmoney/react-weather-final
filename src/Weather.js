import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>{props.defaultCity}</h1>
        <div className="row align-items-center">
          <div className="col icons">
            <div className="d-flex align-items-center">
              <img src={weatherData.icon} alt="image" />
              <p className="degree-value">{Math.round(weatherData.temp)}</p>
              <p className="degree-type">°C | °F</p>
            </div>
          </div>
          <div className="col stats">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
          <div className="col date">
            <ul>
              <li className="date-header">Weather</li>
              <li>Friday 5:00pm</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "3otb16192f2361042505a3f67b74408b";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return <p>Loading...</p>;
  }
}
