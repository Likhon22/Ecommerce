/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
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
    category: "",
    subCategory: "",
    colors: [],
    sizes: [],
    price: 0,
    description: "",
    brand: "",
    stock: 0,
    discount: 0,
    images: null,
  },
  resolver,
}: EFormProps) => {
  const methods = useForm({
    defaultValues,
    resolver: resolver && zodResolver(resolver),
    mode: "onBlur",
  });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onsubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default EForm;
