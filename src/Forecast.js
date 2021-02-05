import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="Forecast row" id="forecast">
      <div class="col-2">
        <h3>MON</h3>
        <h4>
          <strong>12°</strong>
          -7°
        </h4>
        <span>🌧️</span>
      </div>
      <div class="col-2">
        <h3>TUE</h3>
        <h4>
          <strong>12°</strong>
          -9°
        </h4>
        <span>🌧️</span>
      </div>
      <div class="col-2">
        <h3>WED</h3>
        <h4>
          <strong>12°</strong>
          -9°
        </h4>
        <span>🌧️</span>
      </div>
      <div class="col">
        <h3>THU</h3>
        <h4>
          <strong>13°</strong>
          -12°
        </h4>
        <span>🌧️</span>
      </div>
      <div class="col">
        <h3>FRI</h3>
        <h4>
          <strong>16°</strong>
          -11°
        </h4>
        <span>☁️</span>
      </div>
      <div class="col">
        <h3>SAT</h3>
        <h4>
          <strong>16°</strong>
          -11°
        </h4>
        <span>🌧️</span>
      </div>
    </div>
  );
}
