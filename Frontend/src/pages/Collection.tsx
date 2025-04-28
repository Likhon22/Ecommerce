import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";
import ProductGrid from "@/components/shared/product/ProductGrid";

import ESearch from "@/components/ui/ESearch";
import ESort from "@/components/ui/ESort";
import Spinner from "@/components/ui/Spinner";
import { sortConstants } from "@/constants/query";
import { useGetProductsQuery } from "@/features/redux/features/product/productApi";

import { useState } from "react";

const Collection = () => {
  const [handleSearch, setHandleSearch] = useState<string>("");
  const [handleSort, setHandleSort] = useState<string>("");
  console.log(handleSort);
  const { data: products, isLoading } = useGetProductsQuery([
    {
      name: "searchTerm",
      value: handleSearch,
    },
    {
      name: "sort",
      value: handleSort,
    },
  ]);
  return (
    <div>
      {isLoading && <Spinner />}
      <Container className="my-12">
        <HeadingSection
          firstText="Our Total"
          secondText="COLLECTIONS"
          subSectionText="Discover our new styles for the season"
        />
        <div className="flex mt-4 items-center justify-between">
          <ESearch
            onChange={(e) => setHandleSearch(e.target.value)}
            placeholder="Search your desired products"
          />
          <ESort
            items={sortConstants}
            placeholder="Sort By"
            setHandleSort={setHandleSort}
            label="Sort By"
          />
        </div>
        <div className="mt-6">
          <ProductGrid products={products?.data} />
        </div>
      </Container>
    </div>
  );
};

export default Collection;
