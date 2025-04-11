import EForm from "@/components/form/EForm";
import EButton from "@/components/ui/EButton";
import EInput from "@/components/ui/EInput";
import EMultiSelect from "@/components/ui/EMultiSelect";
import ESelect from "@/components/ui/ESelect";
import { categoryOptions, sizeOptions } from "@/constants/product";
import { FieldValues, SubmitHandler } from "react-hook-form";

const AddProduct = () => {
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <EForm className="space-y-4" onsubmit={handleSubmit}>
        <EInput name="name" placeholder="Name" label="Name" />
        <ESelect
          name="category"
          label="Category"
          selectOptions={categoryOptions}
        />
        <ESelect
          name="subCategory"
          label="Sub Category"
          selectOptions={categoryOptions}
        />
        <EMultiSelect multiOptions={sizeOptions} name="sizes" label="Sizes" />

        <EButton type="submit" text="Submit" />
      </EForm>
    </div>
  );
};

export default AddProduct;
