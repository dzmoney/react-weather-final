import React, { useState } from "react";
import "./TempDisplay.css";

export default function TempDisplay(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === "celsius") {
    return (
      <div className="TempDisplay">
        <p className="degree-value">{Math.round(props.celsius)}</p>
        <p className="degree-type">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </p>
      </div>
    );
  } else {
    let fahrenheitTemp = (props.celsius * 9) / 5 + 32;
    return (
      <div className="TempDisplay">
        <p className="degree-value">{Math.round(fahrenheitTemp)}</p>
        <p className="degree-type">
          <a href="/" onClick={showCelsius}>
            °C {""}
          </a>
          | °F
        </p>
      </div>
    );
  }
}
