import React, { useState } from "react";

export declare interface SliderProps {
  value: number;
}

function Slider(props: SliderProps) {
  const { value } = props;
  const [sliderValue, setSliderValue] = useState(value);

  const handleInputChange = (event: any) => {
    setSliderValue(event.target.value);
  };

  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="100"
        onChange={handleInputChange}
        value={sliderValue}
      ></input>
      <p>{sliderValue}</p>
    </div>
  );
}

export default Slider;
