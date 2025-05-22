import { useState } from "react";
import { TColor, TCreateProduct } from "@/types/products";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ColorSelector from "./ColorSelector";
import SizeSelector from "./SizeSelector";
import AddToCart from "./AddToCart";

type ProductDetailsProps = {
  product: TCreateProduct;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [selectedColor, setSelectedColor] = useState<TColor>({
    name: "",
    hex: "",
  });
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Product images */}
      <div>
        <ProductImages product={product} selectedColor={selectedColor} />
      </div>

      {/* Right: Product info and actions */}
      <div>
        <ProductInfo product={product} />

        <ColorSelector
          product={product}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />

        <SizeSelector
          product={product}
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
        />

        <AddToCart
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
