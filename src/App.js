import React, { useState } from "react";
import "./App.css";
import ToggleSwitch from "./components/ToggleSwitch";
import Weather from "./components/Weather";
import { DegreeTypeProvider } from "./context/DegreeTypeContext";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const HandleToggleSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <DegreeTypeProvider>
      <div className={`App ${isDarkMode ? "App--dark" : "App--light"}`}>
        <div className="container">
          <ToggleSwitch
            isChecked={isDarkMode}
            HandleToggleSwitch={HandleToggleSwitch}
          />
          <div className="border">
            <Weather defaultCity="San Francisco" />
          </div>
          <footer>
            Coded by Deanna Tyndall,{" "}
            <a
              href="https://github.com/dzmoney/react-weather-final"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced
            </a>{" "}
            and{" "}
            <a
              href="https://fanciful-chebakia-dc113e.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              published on Netlify
            </a>
          </footer>
        </div>
      </div>
    </DegreeTypeProvider>
  );
}
