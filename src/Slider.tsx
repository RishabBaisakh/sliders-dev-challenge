import React from "react";

export declare interface SliderProps {
  value: number;
  position: number;
  handleChange: (value: number, position: number) => void;
}

function Slider(props: SliderProps) {
  const { value, position, handleChange } = props;

  return (
    <div className="slider">
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
