import { currency } from "@/constants/product";
import { TProduct } from "@/types/products";
import { Link } from "react-router-dom";

import { ShoppingCart } from "lucide-react";
import EButton from "@/components/ui/EButton";

const ProductCard = ({ product }: { product: TProduct }) => {
  const finalPrice =
    product.discount > 0 && product.discountPrice
      ? product?.discountPrice
      : product.price;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full">
      {product.discount > 0 && (
        <div className="absolute top-2 right-2 z-10">
          <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-md">
            {product.discount}% OFF
          </span>
        </div>
      )}

      <Link to={`/product/${product._id}`} className="flex flex-col h-full">
        {product?.images?.length > 0 && (
          <div className="relative overflow-hidden">
            <img
              className="transition-all duration-500 ease-in-out group-hover:scale-105 h-[250px] w-full object-cover"
              src={product.images[0].cloudinaryUrl}
              alt={product.name}
            />
            <div className="absolute bottom-2 left-2 right-2">
              <EButton className=" w-full  flex items-center justify-center gap-2 bg-primary text-white py-2 rounded-md hover:bg-secondary  shadow-md">
                <ShoppingCart size={16} />
                <span className="text-sm font-medium">Add to Cart</span>
              </EButton>
            </div>
          </div>
        )}

        <div className="p-3 flex flex-col gap-2">
          <div className="flex-1">
            {product?.brand && (
              <p className="text-sm text-gray-500 font-medium line-clamp-1">
                {product.brand}
              </p>
            )}
            <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="text-lg font-bold text-black">
              {currency}
              {finalPrice.toFixed(2)}
            </span>

            {product.discount > 0 && (
              <span className="text-gray-400 line-through text-sm">
                {currency}
                {product.price.toFixed(2)}
              </span>
            )}
          </div>

          {product.stock <= 5 && product.stock > 0 ? (
            <p className="text-xs text-amber-600">Only {product.stock} left!</p>
          ) : product.stock === 0 ? (
            <p className="text-xs text-red-600">Out of stock</p>
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
