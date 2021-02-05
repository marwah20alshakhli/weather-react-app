import React from "react";
import Button from "./Button";
import Description from "./Description";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="head-colour">
          <div className="card-body">
            <form id="form-search">
              <div className="row">
                <div class="col">
                  <h1 id="city-name">Ostend</h1>
                  <Description />
                  <Button />
                </div>

                <div className="col">
                  <h2>
                    {" "}
                    2°<span id="temperature"></span>
                    <a href="/" id="celsius">
                    C
                    </a>
                    |
                    <a href="/" id="fahrenheit">
                      F
                    </a>
                  </h2>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <div className="card">
        <div className="card-body text-center">
          <Forecast />
        </div>
      </div>
    </div>
  );
}