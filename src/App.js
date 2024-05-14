import "./App.css";
import Weather from "./components/Weather";
import React from "react";

export default function App() {
  alert("Welcome! Please note that this page is currently under construction. As a result, you might experience some bugs. Rest assured, they're being squashed! Thanks for your patience!");

  return (
    <div className="App">
      <div className="container">
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