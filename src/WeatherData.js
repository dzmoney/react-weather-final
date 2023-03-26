import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div className="WeatherData">
      <h1>{props.data.city}</h1>
      <div className="row align-items-center">
        <div className="col icons">
          <div className="d-flex align-items-center">
            <img src={props.data.icon} alt="image" />
            <p className="degree-value">{Math.round(props.data.temp)}</p>
            <p className="degree-type">°C | °F</p>
          </div>
        </div>
        <div className="col stats">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col date">
          <ul>
            <li className="date-header">Weather</li>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
