import React from "react";
import "./App.css";
import Chart from "./Chart";
import { getSliderValues } from "./helper";
import Slider from "./Slider";

function App() {
  const sliderValues = getSliderValues(4);

  return (
    <div className="app">
      <div className="chartContainer">
        <Chart values={sliderValues} />
      </div>
      <div className="sliderContainer">
        {sliderValues.map((sliderValue, index) => (
          <Slider key={index} value={sliderValue} />
        ))}
      </div>
    </div>
  );
}

export default App;
