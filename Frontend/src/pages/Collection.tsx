import EmptyView from "@/components/shared/emptyView/EmptyView";
import HeadingSection from "@/components/shared/headingSection/HeadingSection";

import ProductGrid from "@/components/shared/product/ProductGrid";
import EFiltersSidebar from "@/components/ui/EFiltersSidebar";

import ESearch from "@/components/ui/ESearch";
import ESort from "@/components/ui/ESort";
import Spinner from "@/components/ui/Spinner";
import { sortConstants } from "@/constants/query";
import { useGetProductsQuery } from "@/features/redux/features/product/productApi";
import { TQueryParam } from "@/types/global";
import { TCreateProduct } from "@/types/products";
import { ShoppingBag } from "lucide-react";

import { useState } from "react";

const Collection = () => {
  const [handleSearch, setHandleSearch] = useState<string>("");
  const [handleSort, setHandleSort] = useState<string>("");
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState<
    string[]
  >([]);
  const [selectedSubCategoryOptions, setSelectedSubCategoryOptions] = useState<
    string[]
  >([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  console.log("priceRange", priceRange);

  const { data: products, isLoading } = useGetProductsQuery(
    [
      {
        name: "searchTerm",
        value: handleSearch,
      },
      {
        name: "sort",
        value: handleSort,
      },
      selectedCategoryOptions.length > 0 && {
        name: "category",
        value: selectedCategoryOptions.join(","),
      },
      selectedSubCategoryOptions.length > 0 && {
        name: "subCategory",
        value: selectedSubCategoryOptions.join(","),
      },
      {
        name: "price",
        value: priceRange.map((item) => item.toString()).join(","),
      },
    ].filter(Boolean) as TQueryParam[]
  );
  const productData = products?.data as TCreateProduct[];
  if (products?.data?.length === 0 && !isLoading) {
    return (
      <EmptyView
        heading="No products found"
        description="Looks like we couldn't find any products matching your criteria."
        icon={<ShoppingBag />}
      />
    );
  }
  return (
    <div className="bg-background min-h-screen pb-16">
      {isLoading && <Spinner />}
      <div className="flex flex-col md:flex-row mt-16 md:mt-24 gap-8 md:gap-12 max-w-7xl mx-auto px-4 md:px-6">
        <div className="w-full md:w-1/4 lg:w-1/5">
          <div className="sticky top-24 bg-card shadow-sm rounded-lg p-5">
            <EFiltersSidebar
              selectedCategoryOptions={selectedCategoryOptions}
              setSelectedCategoryOptions={setSelectedCategoryOptions}
              selectedSubCategoryOptions={selectedSubCategoryOptions}
              setSelectedSubCategoryOptions={setSelectedSubCategoryOptions}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
            />
          </div>
        </div>
        <div className="flex-1">
          <HeadingSection
            firstText="Our Premium"
            secondText="COLLECTIONS"
            subSectionText="Discover our curated styles for the season"
          />
          <div className="bg-card shadow-sm rounded-lg p-5 mb-8">
            <div className="flex flex-col md:flex-row mt-4 items-center gap-4 md:justify-between">
              <ESearch
                onChange={(e) => setHandleSearch(e.target.value)}
                placeholder="Search for your style"
                className="w-full md:w-auto"
              />
              <ESort
                items={sortConstants}
                placeholder="Sort By"
                setHandleSort={setHandleSort}
                label="Sort By"
              />
            </div>
          </div>
          <div className="mt-6">
            <ProductGrid products={productData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
