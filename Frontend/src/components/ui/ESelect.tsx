import { Controller, useFormContext } from "react-hook-form";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./select";

type ESelectProps = {
  name: string;
  label: string;
  selectOptions: string[];
  placeholder?: string;
  required?: boolean;
};

const ESelect = ({
  name,
  label,
  selectOptions,
  placeholder = "Select an option",
  required = true,
}: ESelectProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name];

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium capitalize">{label}</label>

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label} is required` : false,
        }}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger
              className={hasError ? "border-red-500 ring-red-500/20" : ""}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {selectOptions.map((option, index) => (
                <SelectItem className="capitalize" key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {hasError && (
        <p className="text-red-500 text-sm">
          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default ESelect;
