import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response);
  }

  let apiKey = "3otb16192f2361042505a3f67b74408b";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.data.city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

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
