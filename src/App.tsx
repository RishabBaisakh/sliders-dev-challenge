import React, { useState } from "react";
import "./App.css";
import Chart from "./Chart";
import { generateValidRandomPosition, getSliderValues } from "./helper";
import Slider from "./Slider";
import { colors } from "./constants";

function App() {
  const [numberOfSliders, setNumberOfSliders] = useState(5);
  const [isDisabled, setDisabled] = useState(false);
  const [sliderValues, setSliderValues] = useState(
    getSliderValues(numberOfSliders)
  );
  const [lockedPositions, setLockedPositions] = useState<Array<number>>([]);

  const handleChange = (value: number, position: number) => {
    const invalidPositions: Array<number> = [];
    sliderValues.forEach((element, index) => {
      if (element === 0) invalidPositions.push(index);
    });

    invalidPositions.push(position);

    const changePosition = generateValidRandomPosition(
      numberOfSliders,
      value > 0 ? invalidPositions : [],
      lockedPositions
    );

    if (changePosition === -1) return;
    else {
      sliderValues[changePosition] -= value;
      sliderValues[position] += value;
      setSliderValues([...sliderValues]);
    }
  };

  const addNewSlider = () => {
    if (sliderValues.length === 10) {
      alert("Max Limit Reached");
      setDisabled(true);
      return;
    }
    setSliderValues([...sliderValues, 0]);
    setNumberOfSliders(numberOfSliders + 1);
  };

  const lockSlider = (value: boolean, position: number) => {
    let newPositions: Array<number>;
    if (value) {
      newPositions = lockedPositions;
      newPositions.push(position);
    } else {
      newPositions = lockedPositions.filter((element) => element !== position);
    }
    setLockedPositions([...newPositions]);
  };

  return (
    <div className="app">
      <div className="chartContainer">
        <Chart values={sliderValues} />
        <button
          className="addSliderButton"
          onClick={addNewSlider}
          disabled={isDisabled}
        >
          {"Add new Slider"}
        </button>
      </div>
      <div className="sliderContainer">
        {sliderValues.map((sliderValue, index) => (
          <Slider
            key={index}
            value={sliderValue}
            color={colors[index]}
            position={index}
            handleChange={handleChange}
            lockSlider={lockSlider}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
