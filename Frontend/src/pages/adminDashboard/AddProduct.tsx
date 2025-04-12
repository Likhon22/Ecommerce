import EForm from "@/components/form/EForm";
import EButton from "@/components/ui/EButton";
import EColorPicker from "@/components/ui/EColorPicker";
import EFileInput from "@/components/ui/EFileInput";
import EInput from "@/components/ui/EInput";
import EMultiSelect from "@/components/ui/EMultiSelect";
import ESelect from "@/components/ui/ESelect";

import { categoryOptions, sizeOptions } from "@/constants/product";
import { productSchema } from "@/schemas/productSchema";
import formatCloudinaryResponse from "@/utils/formatCloudinaryResponse ";
import { uploadImages } from "@/utils/uploadImage";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const AddProduct = () => {
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const { images } = data;
    const uploadImagesCloudinary = await uploadImages(images);

    const validImages = uploadImagesCloudinary.filter(
      (img): img is { secure_url: string; public_id: string } => img !== null
    );

    const formattedImages = formatCloudinaryResponse(validImages);
    const productData = {
      ...data,
      images: formattedImages,
    };
    console.log("Product Data:", productData);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Add New Product
        </h1>
        <p className="text-gray-600">
          Fill in the details below to add a new product to your store
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
        <EForm
          className="space-y-6"
          resolver={productSchema}
          onsubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EInput
              name="name"
              placeholder="Product Name"
              label="Product Name"
              type="text"
            />
            <EFileInput
              images={images}
              previewUrls={previewUrls}
              setImages={setImages}
              setPreviewUrls={setPreviewUrls}
              label="Product Images"
            />
          </div>
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
          <EColorPicker name="colors" label="Colors" />
          <EMultiSelect multiOptions={sizeOptions} name="sizes" label="Sizes" />
          <EInput
            name="price"
            type="number"
            placeholder="Price"
            label="Price"
          />
          <EInput
            name="description"
            placeholder="Description"
            label="Description"
          />
          <EInput
            name="brand"
            placeholder="Brand(optional)"
            required={false}
            label="Brand"
          />
          <EInput
            name="stock"
            type="number"
            placeholder="Stock"
            label="Stock"
          />
          <EInput
            name="discount"
            type="number"
            placeholder="Discount"
            label="Discount"
          />
          <div className="mt-8 flex justify-end">
            <EButton type="submit" text="Add Product" className="px-6 py-2" />
          </div>
        </EForm>
      </div>
    </div>
  );
};

export default AddProduct;
