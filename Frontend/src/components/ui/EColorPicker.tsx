import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { Input } from "./input";
import { X, Upload, XIcon } from "lucide-react";

type ColorData = {
  name: string;
  hex: string;
  images?: string[];
};

type EColorPickerProps = {
  name: string;
  label: string;
  required?: boolean;
};

const EColorPicker = ({ name, label, required = true }: EColorPickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [colorName, setColorName] = useState("");
  const [tempImages, setTempImages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

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
          const colors: ColorData[] = field.value || [];

          const addColor = () => {
            if (!colorName.trim()) return;

            const newColor: ColorData = {
              name: colorName,
              hex: document.getElementById(`color-picker-${name}`)
                ? (
                    document.getElementById(
                      `color-picker-${name}`
                    ) as HTMLInputElement
                  ).value
                : "#000000",
            };

            if (tempImages.length > 0) {
              newColor.images = [...tempImages];
            }

            field.onChange([...colors, newColor]);

            // Reset inputs
            setColorName("");
            setTempImages([]);
          };

          const removeColor = (index: number) => {
            const newColors = [...colors];
            newColors.splice(index, 1);
            field.onChange(newColors);
          };

          const handleImageUpload = (files: FileList) => {
            const newImages = Array.from(files).map((file) =>
              URL.createObjectURL(file)
            );
            setTempImages([...tempImages, ...newImages]);
          };

          const removeImage = (index: number) => {
            setTempImages(tempImages.filter((_, i) => i !== index));
          };

          return (
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger>
                <Button
                  type="button"
                  variant="outline"
                  className="w-68 justify-between font-normal capitalize min-h-10"
                >
                  {colors.length > 0
                    ? colors.length > 2
                      ? `${colors.length} colors added`
                      : colors.map((c) => c.name).join(", ")
                    : `Add ${label}`}
                </Button>
              </PopoverTrigger>

              <PopoverContent
                side="right"
                className="w-80 z-60 
                 p-4 bg-white shadow-md border  rounded-md"
              >
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  <XIcon />
                </div>

                <div className="space-y-4">
                  {/* Color input section */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium">Add New Color</h3>

                    <div className="grid grid-cols-[1fr,auto] gap-3 items-end">
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">
                          Color Name
                        </label>
                        <Input
                          value={colorName}
                          onChange={(e) => setColorName(e.target.value)}
                          placeholder="e.g. Blue"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 mb-1 block">
                          Pick
                        </label>
                        <input
                          id={`color-picker-${name}`}
                          type="color"
                          defaultValue="#3b82f6"
                          className="h-9 w-10 cursor-pointer rounded border"
                        />
                      </div>
                    </div>

                    {/* Image upload */}
                    <div className="mt-3">
                      <label className="text-xs text-gray-500 mb-1 block">
                        Images (Optional)
                      </label>
                      <div className="flex items-center justify-center h-20 border-2 border-dashed rounded-md border-gray-300 bg-gray-50 relative">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-8 w-8 text-gray-400" />
                          <div className="text-sm text-gray-500">
                            <label
                              htmlFor="image"
                              className="font-medium text-primary hover:text-primary/80 cursor-pointer"
                            >
                              Upload images
                            </label>
                          </div>
                        </div>
                        <input
                          multiple
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          id="image"
                          accept="image/*"
                          type="file"
                          onChange={(e) =>
                            handleImageUpload(e.target.files as FileList)
                          }
                        />
                      </div>
                    </div>

                    {/* Image previews */}
                    {tempImages.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {tempImages.map((url, i) => (
                          <div key={i} className="relative group h-16 w-16">
                            <img
                              src={url}
                              alt=""
                              className="h-full w-full object-cover rounded-md border"
                            />
                            <button
                              type="button"
                              className="absolute -top-1 -right-1 bg-white rounded-full shadow-sm p-0.5 border"
                              onClick={() => removeImage(i)}
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <Button
                      type="button"
                      onClick={addColor}
                      disabled={!colorName.trim()}
                      className="w-full mt-2"
                    >
                      Add Color
                    </Button>
                  </div>

                  {/* Selected colors */}
                  {colors.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium mb-2">
                        Selected Colors
                      </h3>
                      <div className="border rounded-md divide-y max-h-40 overflow-y-auto">
                        {colors.map((color, i) => (
                          <div key={i} className="p-2 flex items-center gap-3">
                            <div
                              className="w-6 h-6 rounded-full border"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className="flex-1 text-sm capitalize">
                              {color.name}
                            </span>
                            {color.images && (
                              <span className="text-xs text-gray-500">
                                {color.images.length} image
                                {color.images.length !== 1 ? "s" : ""}
                              </span>
                            )}
                            <button
                              type="button"
                              onClick={() => removeColor(i)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <X size={16} />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
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

export default EColorPicker;
