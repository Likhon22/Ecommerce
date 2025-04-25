import { TProduct } from "@/types/products";

type ColorSelectorProps = {
  product: TProduct;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
};

const ColorSelector = ({
  product,
  selectedColor,
  setSelectedColor,
}: ColorSelectorProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium mb-2">Colors</h3>
      <div className="flex gap-2 flex-wrap">
        {product.colors.map((color, index) => (
          <div
            key={index}
            title={color.name}
            className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center border ${
              selectedColor === color.hex
                ? "border-black ring-2 ring-gray-300"
                : "border-gray-300"
            }`}
            style={{ backgroundColor: color.hex }}
            onClick={() => setSelectedColor(color.hex)}
          >
            {selectedColor === color.hex && (
              <div className="text-xs">
                {color.hex.toLowerCase() === "#ffffff" ||
                color.hex.toLowerCase() === "#fff" ||
                color.name.toLocaleLowerCase() === "white" ? (
                  <span className="text-black">✓</span>
                ) : (
                  <span className="text-white">✓</span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
