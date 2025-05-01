import { CheckboxProps } from "@radix-ui/react-checkbox";
import { Checkbox } from "./checkbox";
import React from "react";

type EMultiCheckProps = CheckboxProps & {
  options: string[];
  categoryName: string;
  selectedOptions: string[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>;
};
const EMultiCheck = ({
  options,
  categoryName,

  selectedOptions,
  setSelectedOptions,
}: EMultiCheckProps) => {
  return (
    <div>
      <h2 className="mb-2">{categoryName}</h2>
      {options.map((option, index) => (
        <div className="flex items-center gap-1 space-y-2" key={index}>
          <Checkbox
            id={option}
            checked={selectedOptions.includes(option)}
            onCheckedChange={(checked) => {
              if (checked) {
                setSelectedOptions((prev) => [...prev, option]);
              } else {
                setSelectedOptions((prev) =>
                  prev.filter((item) => item !== option)
                );
              }
            }}
          />
          <label
            htmlFor={option}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default EMultiCheck;
