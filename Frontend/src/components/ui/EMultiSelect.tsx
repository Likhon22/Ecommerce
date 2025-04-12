import { Controller, useFormContext } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Checkbox } from "./checkbox";

import { Button } from "./button";

type Option = {
  id: number;
  name: string;
};

type EMultiSelectProps = {
  multiOptions: Option[];
  name: string;
  label: string;
  required?: boolean;
};

const EMultiSelect = ({
  multiOptions,
  name,
  label,
  required = false,
}: EMultiSelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <div className="space-y-2">
      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
        }}
        render={({ field }) => {
          const selected = field.value || [];

          return (
            <Popover>
              <PopoverTrigger>
                <Button
                  type="button"
                  variant="outline"
                  className="w-68 justify-between font-normal capitalize min-h-10"
                >
                  {selected.length > 0
                    ? selected.length > 2
                      ? `${selected.length} options selected`
                      : selected.map((opt: Option) => opt.name).join(", ")
                    : `Select ${label}`}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-full">
                <div className="flex flex-col space-y-2">
                  {multiOptions.map((option) => {
                    const isChecked = selected.some(
                      (item: Option) => item.id === option.id
                    );

                    return (
                      <div className="flex gap-2 items-center">
                        <Checkbox
                          checked={isChecked}
                          onCheckedChange={(checked) => {
                            const newValue = checked
                              ? [...selected, option]
                              : selected.filter(
                                  (item: Option) => item.id !== option.id
                                );

                            field.onChange(newValue);
                          }}
                        />
                        <span className="uppercase text-sm">{option.name}</span>
                      </div>
                    );
                  })}
                </div>
              </PopoverContent>
            </Popover>
          );
        }}
      />

      {error && (
        <p className="text-red-500 text-sm">{error.message as string}</p>
      )}
    </div>
  );
};

export default EMultiSelect;
