import React, { useState } from "react";

export declare interface SliderProps {
  value: number;
  position: number;
  handleChange: (value: number, position: number) => void;
  lockSlider: (position: number) => void;
}

function Slider(props: SliderProps) {
  const { value, position, handleChange, lockSlider } = props;
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div className="slider">
      <input
        type="checkbox"
        checked={isLocked}
        onChange={() => lockSlider(position)}
      />
      <input
        type="range"
        min="0"
        max="100"
        onChange={(event: any) =>
          handleChange(event.target.value - value, position)
        }
        value={value}
      ></input>
      <p>{value}</p>
    </div>
  );
}

export default Slider;
