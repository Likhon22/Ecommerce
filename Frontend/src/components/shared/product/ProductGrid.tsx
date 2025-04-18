import { TProduct } from "@/types/products";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }: { products: TProduct[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductGrid;
