import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border">
          <Search />
          <Weather defaultCity="Toronto" />
        </div>
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
