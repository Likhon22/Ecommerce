import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";
import ProductGrid from "@/components/shared/product/ProductGrid";
import ESearch from "@/components/ui/ESearch";

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
          firstText="Our Total"
          secondText="COLLECTIONS"
          subSectionText="Discover our new styles for the season"
        />
        <ESearch />
        <div className="mt-6">
          <ProductGrid products={products?.data} />
        </div>
      </Container>
    </div>
  );
};

export default Collection;
