import "./App.css";
import Weather from "./components/Weather";
import { DegreeTypeProvider } from "./context/DegreeTypeContext";

export default function App() {
  return (
    <DegreeTypeProvider>
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
              rel="noopener noreferrer"
            >
              open-sourced
            </a>{" "}
            and{" "}
            <a
              href="https://dulcet-truffle-570cbb.netlify.app"
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
