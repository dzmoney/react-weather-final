import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border">
          <Weather defaultCity="San Francisco" />
        </div>
        <footer>
          Coded by Deanna Tyndall,{" "}
          <a
            href="https://github.com/dzmoney/react-weather-final"
            target="_blank"
          >
            open-sourced
          </a>{" "}
          and{" "}
          <a href="https://comfy-tartufo-8a3ffb.netlify.app/" target="_blank">
            pusblished on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
