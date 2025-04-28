import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";

import ProductGrid from "@/components/shared/product/ProductGrid";

import { useGetProductsQuery } from "@/features/redux/features/product/productApi";
import { TProduct } from "@/types/products";

const LatestCollection = () => {
  const { data } = useGetProductsQuery(undefined);
  const product: TProduct[] = data?.data;

  return (
    <Container>
      <div className="my-12 flex flex-col gap-8">
        <HeadingSection
          firstText="LATEST"
          secondText="COLLECTIONS"
          subSectionText="Discover our new styles for the season"
        />

        <ProductGrid products={product} />
      </div>
    </Container>
  );
};

export default LatestCollection;
