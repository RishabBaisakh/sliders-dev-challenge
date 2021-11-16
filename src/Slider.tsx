import React, { useState } from "react";

export declare interface SliderProps {
  value: number;
  position: number;
  color: string;
  handleChange: (value: number, position: number) => void;
  lockSlider: (value: boolean, position: number) => void;
}

function Slider(props: SliderProps) {
  const { value, position, handleChange, lockSlider, color } = props;
  const [isLocked, setIsLocked] = useState(false);

  const handleSliderInputChange = (event: any) => {
    if (isLocked) return;
    handleChange(event.target.value - value, position);
  };

  const handleCheckboxInputChange = () => {
    lockSlider(!isLocked, position);
    setIsLocked(!isLocked);
  };

  return (
    <div className="slider" style={{ border: `2px solid ${color}` }}>
      <input
        type="checkbox"
        checked={isLocked}
        onChange={handleCheckboxInputChange}
      />
      <input
        type="range"
        min="0"
        max="100"
        onChange={handleSliderInputChange}
        value={value}
      ></input>
      <p>{value}</p>
    </div>
  );
}

export default Slider;
