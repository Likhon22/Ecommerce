import { TProduct } from "@/types/products";

type SizeSelectorProps = {
  product: TProduct;
  selectedSize: string | null;
  setSelectedSize: (sizeId: string) => void;
};

const SizeSelector = ({
  product,
  selectedSize,
  setSelectedSize,
}: SizeSelectorProps) => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-medium mb-2">Sizes</h3>
      <div className="flex gap-2 flex-wrap">
        {product.sizes.map((size) => (
          <div
            key={size.id}
            className={`h-8 min-w-8 px-2 rounded cursor-pointer flex items-center justify-center uppercase text-sm ${
              selectedSize === size.name
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedSize(size.name)}
          >
            {size.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;
