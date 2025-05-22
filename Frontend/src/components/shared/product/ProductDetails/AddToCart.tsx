import { useState } from "react";
import EButton from "@/components/ui/EButton";
import { TColor, TProduct } from "@/types/products";
import { toast } from "sonner";
import { useAppSelector } from "@/features/redux/hook";
import { selectedUser } from "@/features/redux/features/auth/authSlice";
import { useAddToCartMutation } from "@/features/redux/features/cart/cartApi";
import addProductToLocalStorage from "@/utils/addProductToLocalStorage";

type AddToCartProps = {
  product: TProduct;
  selectedSize: string | null;
  selectedColor: TColor | null;
};

const AddToCart = ({
  product,
  selectedSize,
  selectedColor,
}: AddToCartProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const user = useAppSelector(selectedUser);
  const [addCart] = useAddToCartMutation();
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
    const cartItem = {
      productId: product._id,
      productName: product.name,
      productImage: product.images[0]?.cloudinaryUrl,
      productDescription: product.description,
      quantity,
      size: selectedSize,
      color: {
        name: selectedColor?.name,
        hex: selectedColor?.hex,
      },
      price: product.price,
      email: user?.email,
    };
    console.log("Adding item to cart:", cartItem);

    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color before adding to cart.");

      return;
    }

    if (!user?.email) {
      addProductToLocalStorage(cartItem);
      toast.success("Item added to local storage cart!");

      return;
    }
    try {
      addCart(cartItem).unwrap();
      toast.success("Item added to cart successfully!");
    } catch (err) {
      console.error("Error adding item to cart:", err);
      toast.error("Failed to add item to cart. Please try again.");
    }
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
          disabled={!selectedSize || !selectedColor?.hex || product.stock <= 0}
        />
      </div>
    </div>
  );
};

export default AddToCart;
