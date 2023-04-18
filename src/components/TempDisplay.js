import React, { useState, useContext } from "react";
import "./TempDisplay.css";
import { DegreeTypeContext } from "../context/DegreeTypeContext";

export default function TempDisplay(props) {
  function showCelsius(event) {
    event.preventDefault();
    setDegreeType("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setDegreeType("fahrenheit");
  }

  const { degreeType } = useContext(DegreeTypeContext);
  const { setDegreeType } = useContext(DegreeTypeContext);

  if (degreeType === "celsius") {
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
