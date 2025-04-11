import { currency } from "@/constants/product";
import { TProduct } from "@/types/products";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <Link
      to={`/product/${product._id}`}
      className="flex flex-col gap-1 cursor-pointer"
    >
      {product.image.length > 0 && (
        <div className="overflow-hidden">
          <img
            className="transition ease-in-out hover:scale-105 "
            src={product.image[0]}
            alt={product.name}
          />
        </div>
      )}
      <p className="text-xs text-secondary">{product.name}</p>
      <p className="text-xs text-primary font-medium">
        {" "}
        {currency}
        {product.price}
      </p>
    </Link>
  );
};

export default ProductCard;
