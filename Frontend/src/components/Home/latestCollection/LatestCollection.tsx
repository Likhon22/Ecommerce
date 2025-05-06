import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";

import ProductGrid from "@/components/shared/product/ProductGrid";
import InlineSpinner from "@/components/ui/InlineSpinner";

import { useGetProductsQuery } from "@/features/redux/features/product/productApi";

const LatestCollection = () => {
  const { data, isLoading } = useGetProductsQuery(undefined);
  const product = data?.data;

  return (
    <Container>
      {isLoading && <InlineSpinner />}
      <div className="my-12 flex flex-col gap-8">
        <HeadingSection
          firstText="LATEST"
          secondText="COLLECTIONS"
          subSectionText="Discover our new styles for the season"
        />

        {product && product?.length > 0 && (
          <ProductGrid products={product?.slice(0, 6)} />
        )}
      </div>
    </Container>
  );
};

export default LatestCollection;
