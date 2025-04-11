import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./input";
import { cn } from "@/lib/utils";

type InputProps = {
  type?: string;
  name: string;
  placeholder: string;
  required?: boolean;
  className?: string;
  label?: string;
};

const EInput = ({
  type = "text",
  name,
  placeholder,
  required = true,
  className,
  label,
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
            type={type}
            placeholder={placeholder}
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
