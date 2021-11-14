import React from "react";
import "./App.css";
import { getSliderValues } from "./helper";
import Slider from "./Slider";

function App() {
  const sliderValues = getSliderValues(4);

  return (
    <div className="App">
      <div className="sliderContainer">
        {sliderValues.map((sliderValue) => (
          <Slider value={sliderValue} />
        ))}
      </div>
    </div>
  );
}

export default App;
