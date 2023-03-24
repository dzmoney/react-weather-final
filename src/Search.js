import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" placeholder="Enter a city.." />
        <button type="button" class="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}
