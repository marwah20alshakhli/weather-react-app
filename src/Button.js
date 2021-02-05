import React from "react";

export default function Button() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search a city"
        autoFocus="on"
        autoComplete="off"
        id="city-input"
      />
      <input type="submit" value="search" id="search-button" />
      <button type="button" className="btn btn-danger" id="current-location">
        Current location
      </button>
    </div>
  );
}