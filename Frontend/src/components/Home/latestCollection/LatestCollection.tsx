import { products } from "@/assets/frontend_assets/assets";
import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";

import ProductGrid from "@/components/shared/product/ProductGrid";
import { TProduct } from "@/types/products";

const LatestCollection = () => {
  const assetProducts: TProduct[] = products;

  return (
    <Container>
      <div className="my-12 flex flex-col gap-8">
        <HeadingSection
          firstText="LATEST"
          secondText="COLLECTIONS"
          subSectionText="Discover our new styles for the season"
        />
        <ProductGrid products={assetProducts} />
      </div>
    </Container>
  );
};

export default LatestCollection;
