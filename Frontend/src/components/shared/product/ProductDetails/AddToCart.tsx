import { useState } from "react";
import EButton from "@/components/ui/EButton";
import { TProduct } from "@/types/products";

type AddToCartProps = {
  product: TProduct;
  selectedSize: number | null;
  selectedColor: string;
};

const AddToCart = ({ product, selectedSize, selectedColor }: AddToCartProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    // Here you would typically dispatch an action to add the item to cart
    console.log("Adding to cart:", {
      product,
      selectedSize,
      selectedColor,
      quantity,
    });
  };

  return (
    <div className="mt-6 space-y-4">
      {/* Quantity selector */}
      <div className="flex items-center">
        <span className="text-sm font-medium mr-3">Quantity:</span>
        <div className="flex items-center border border-gray-300 rounded">
          <button
            className="px-3 py-1 border-r border-gray-300 hover:bg-gray-100"
            onClick={decrementQuantity}
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-4 py-1">{quantity}</span>
          <button
            className="px-3 py-1 border-l border-gray-300 hover:bg-gray-100"
            onClick={incrementQuantity}
            disabled={quantity >= product.stock}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to cart button */}
      <div>
        <EButton
          text="Add to Cart"
          fullWidth
          onClick={handleAddToCart}
          disabled={!selectedSize || !selectedColor || product.stock <= 0}
        />
      </div>
    </div>
  );
};

export default AddToCart;
