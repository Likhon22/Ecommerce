import { currency } from "@/constants/product";
import { TProduct } from "@/types/products";

type ProductInfoProps = {
  product: TProduct;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  // Calculate the final price after discount
  const finalPrice =
    product.discount > 0
      ? product.price - product.price * (product.discount / 100)
      : product.price;

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium">{product.name}</h1>

      <div className="flex items-center gap-2">
        <span className="text-xl font-bold">
          {currency}
          {finalPrice.toFixed(2)}
        </span>

        {product.discount > 0 && (
          <>
            <span className="text-gray-500 line-through">
              {currency}
              {product.price.toFixed(2)}
            </span>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-md">
              {product.discount}% OFF
            </span>
          </>
        )}
      </div>

      {product.brand && (
        <div className="text-sm">
          <span className="text-gray-500">Brand: </span>
          <span className="font-medium">{product.brand}</span>
        </div>
      )}

      <div className="mt-2">
        <p className="text-sm text-gray-600">{product.description}</p>
      </div>

      <div className="mt-2 text-sm">
        <span className={product.stock > 0 ? "text-green-600" : "text-red-600"}>
          {product.stock > 0
            ? `In Stock (${product.stock} available)`
            : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductInfo;
