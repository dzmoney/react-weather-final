import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" placeholder="Enter a city.." />
        <button type="button" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
