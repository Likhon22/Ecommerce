import { useGetSingleProductQuery } from "@/features/redux/features/product/productApi";
import { useParams } from "react-router-dom";
import Container from "@/components/shared/layout/container/Container";
import Spinner from "@/components/ui/Spinner";
import ProductDetails from "@/components/shared/product/ProductDetails/ProductDetails";

const Product = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data: product, isLoading } = useGetSingleProductQuery(
    productId as string
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (!product || !product.data) {
    return (
      <Container className="my-12">
        <div className="text-center">
          <h2 className="text-2xl">Product not found</h2>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-12">
      <ProductDetails product={product.data} />
    </Container>
  );
};

export default Product;
