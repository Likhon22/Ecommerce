import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./input";
import { cn } from "@/lib/utils";

type InputProps = {
  type?: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  label?: string;
  multiple?: boolean;
};

const EInput = ({
  type = "text",
  name,
  placeholder,
  required = true,
  className,
  label,
  multiple = false,
}: InputProps) => {
  const {
    control,

    formState: { errors },
  } = useFormContext();

  const hasError = !!errors[name];

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}

      <Controller
        name={name}
        control={control}
        rules={{
          required: required ? `${label || placeholder} is required` : false,
        }}
        render={({ field }) => (
          <Input
            {...field}
            multiple={type === "file" ? multiple : undefined}
            type={type}
            placeholder={placeholder}
            onChange={(e) => {
              let value;
              if (type === "number") {
                value =
                  e.target.value === "" ? null : parseFloat(e.target.value);
              } else {
                value = e.target.value;
              }
              field.onChange(value);
            }}
            className={cn(
              hasError && "border-red-500 ring-red-500/20",
              className
            )}
          />
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

export default EInput;
