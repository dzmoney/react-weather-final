import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather />
        <footer>
          Coded by Deanna Tyndall,{" "}
          <a href="https://github.com/dzmoney/react-weather-final">
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
