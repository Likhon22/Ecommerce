import { TColor, TProduct } from "@/types/products";

type ColorSelectorProps = {
  product: TProduct;
  selectedColor: TColor;
  setSelectedColor: (color: TColor) => void;
};

const ColorSelector = ({
  product,
  selectedColor,
  setSelectedColor,
}: ColorSelectorProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-sm font-medium mb-3 text-foreground/80 uppercase tracking-wider">
        Colors
      </h3>
      <div className="flex gap-3 flex-wrap">
        {product.colors.map((color, index) => (
          <div
            key={index}
            title={color.name}
            className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center transition-all duration-300 ${
              selectedColor.hex === color.hex
                ? "ring-2 ring-primary ring-offset-2"
                : "border border-gray-300 hover:shadow-md"
            }`}
            style={{ backgroundColor: color.hex }}
            onClick={() =>
              setSelectedColor({ name: color.name, hex: color.hex })
            }
          >
            {selectedColor.hex === color.hex && (
              <div className="text-sm animate-fade-in">
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
