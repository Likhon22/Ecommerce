/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
type EFormProps = {
  children: ReactNode;
  onsubmit: SubmitHandler<FieldValues>;
  className?: string;
  defaultValues?: Record<string, any>;
  resolver?: any;
};
const EForm = ({
  children,
  onsubmit,
  className,
  defaultValues = {
    name: "",
    // or "Male"/"Female" if you want a pre-selected value
  },
  resolver,
}: EFormProps) => {
  const methods = useForm({ defaultValues, resolver, mode: "onChange" });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default EForm;
