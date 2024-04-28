import "./App.css";
import Weather from "./components/Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        {/* previously included prop defaultCity="Philadelphia" */}
        <Weather />
        <footer>
          <p>
            <a href="https://github.com/heatherdice/react-weather">Code</a> by Heather Dice
          </p>
        </footer>
      </div>
    </div>
  );
}