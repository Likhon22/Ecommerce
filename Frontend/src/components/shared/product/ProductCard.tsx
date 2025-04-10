import { currency } from "@/constants/product";
import { TProduct } from "@/types/products";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div>
      {product.image.length > 0 && (
        <img
          className="transition duration-300 ease-in-out hover:scale-105 "
          src={product.image[0]}
          alt=""
        />
      )}
      <p className="text-xs text-secondary">{product.name}</p>
      <p className="text-xs text-primary font-medium">
        {" "}
        {currency}
        {product.price}
      </p>
    </div>
  );
};

export default ProductCard;
