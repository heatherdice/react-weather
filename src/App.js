import "./App.css";
import Weather from "./Weather";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Philadelphia"/>
        <footer>
          <p>
            <a href="https://github.com/heatherdice/react-weather">Code</a> by Heather Dice
          </p>
        </footer>
      </div>
    </div>
  );
}