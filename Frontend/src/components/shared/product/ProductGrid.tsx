import { TCreateProduct } from "@/types/products";
import ProductCard from "./ProductCard";

type TProductGridProps = {
  products: TCreateProduct[];
};
const ProductGrid = ({ products }: TProductGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products &&
        products?.length > 0 &&
        products?.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
    </div>
  );
};

export default ProductGrid;
