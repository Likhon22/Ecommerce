import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";
import ProductGrid from "@/components/shared/product/ProductGrid";
import Spinner from "@/components/ui/Spinner";
import { useGetProductsQuery } from "@/features/redux/features/product/productApi";

const Collection = () => {
  const { data: products, isLoading } = useGetProductsQuery(undefined);
  console.log(products?.data);

  return (
    <div>
      {isLoading && <Spinner />}
      <Container className="my-12">
        <HeadingSection
          firstText="LATEST"
          secondText="COLLECTIONS"
          subSectionText="Discover our new styles for the season"
        />
        <div>
          <ProductGrid products={products?.data} />
        </div>
      </Container>
    </div>
  );
};

export default Collection;
