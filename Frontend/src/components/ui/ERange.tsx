import React from "react";
import { Slider } from "./slider";

type ERangeProps = React.ComponentProps<typeof Slider> & {
  min: number;
  max: number;
  step: number;
};
const ERange = ({ min, max, step, ...props }: ERangeProps) => {
  return (
    <div>
      <h1 className="text-lg font-semibold">Price Range</h1>
      <Slider
        {...props}
        min={min}
        defaultValue={[min, max]}
              max={max}
              
        step={step}
      />
      <div className="flex justify-between mt-2">
        <span className="text-sm text-gray-500">{min}</span>
        <span className="text-sm text-gray-500">{max}</span>
      </div>
    </div>
  );
};

export default ERange;
