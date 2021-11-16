import React, { useState } from "react";
import "./App.css";
import Chart from "./Chart";
import { generateRandomNumber, getSliderValues } from "./helper";
import Slider from "./Slider";

function App() {
  const [numberOfSliders, setNumberOfSliders] = useState(5);
  const [sliderValues, setSliderValues] = useState(
    getSliderValues(numberOfSliders)
  );

  const handleChange = (value: number, position: number) => {
    let changePosition;
    while (true) {
      changePosition = generateRandomNumber(numberOfSliders);
      if (changePosition === position) continue;
      else if (value > 0 && sliderValues[changePosition] === 0) continue;
      else if (value < 0 && sliderValues[changePosition] === 100) continue;
      else break;
    }
    sliderValues[changePosition] -= value;
    sliderValues[position] += value;
    setSliderValues([...sliderValues]);
  };

  const addNewSlider = () => {
    setSliderValues([...sliderValues, 0]);
    setNumberOfSliders(numberOfSliders + 1);
  };

  return (
    <div className="app">
      <div className="chartContainer">
        <Chart values={sliderValues} />
        <button onClick={addNewSlider}> Add new Slider</button>
      </div>
      <div className="sliderContainer">
        {sliderValues.map((sliderValue, index) => (
          <Slider
            key={index}
            value={sliderValue}
            position={index}
            handleChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
