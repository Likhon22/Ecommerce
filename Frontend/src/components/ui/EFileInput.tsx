import { X } from "lucide-react";
import { ChangeEvent } from "react";
import { Controller, useFormContext } from "react-hook-form";

type EFileInputProps = {
  images: string[];
  setImages: (images: string[]) => void;
  label?: string;
};

const EFileInput = ({
  images,
  setImages,
  label = "Images",
}: EFileInputProps) => {
  const { control, setValue } = useFormContext();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      const newImages = [...images, ...fileArray];
      setImages(newImages);
      setValue("images", newImages); // Update form value
    }
  };
  const removeImages = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
    setValue("images", newImages);
  };

  return (
    <div className="space-y-3">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name="images"
        control={control}
        render={({ field }) => (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors">
              <input
                type="file"
                multiple
                onChange={(e) => {
                  handleFileChange(e);
                  field.onChange(images);
                }}
                accept="image/*"
                className="w-full text-sm file:mr-4 file:py-2.5 file:px-5 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-colors cursor-pointer"
              />
              <p className="mt-2 text-xs text-gray-500">
                PNG, JPG, WEBP up to 10MB each
              </p>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {images.map((image, index) => (
                  <div key={index} className="relative group">
                    <X
                      size={15}
                      className="absolute  top-1 right-1 transition duration-150  hover:scale-110 cursor-pointer"
                      onClick={() => removeImages(index)}
                    />
                    <img
                      src={image}
                      alt={`Preview ${index}`}
                      className="h-24 w-full object-cover rounded-md"
                    />
                  </div>
                ))}
              </div>
            )}

            {images.length <= 0 && (
              <p className="text-amber-600 text-sm flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                Please select at least one image
              </p>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default EFileInput;
