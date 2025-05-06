import HeadingSection from "@/components/shared/headingSection/HeadingSection";
import Container from "@/components/shared/layout/container/Container";
import ProductGrid from "@/components/shared/product/ProductGrid";
import InlineSpinner from "@/components/ui/InlineSpinner";

import { categoryOptions } from "@/constants/product";
import { useGetProductsQuery } from "@/features/redux/features/product/productApi";
import { TCreateProduct } from "@/types/products";
import { useEffect, useState } from "react";

type TCategoryData = {
  category: string;
  items: TCreateProduct[];
}[];
const CategorySection = () => {
  const [categories, setCategories] = useState<TCategoryData>([]);
  const { data, isLoading } = useGetProductsQuery(undefined);
  useEffect(() => {
    const categoryData: TCategoryData = [];
    if (data?.data && data?.data?.length > 0) {
      categoryOptions.map((category) => {
        const isCategoryExists = data?.data.some(
          (product) => product.category === category
        );
        if (isCategoryExists) {
          categoryData.push({
            category,
            items: data?.data.filter(
              (product) => product.category === category
            ),
          });
          setCategories(categoryData);
        }
      });
    }
  }, [data]);
  console.log(categories);

  return (
    <div>
      <Container>
        {isLoading && <InlineSpinner />}
        <div>
          {categories?.map((category, index) => (
            <div key={index} className="my-20">
              <HeadingSection
                parentClassName="mb-8"
                firstText={category.category}
                firstTextClassName="uppercase"
                secondText="COLLECTIONS"
                subSectionText="Explore the latest trends and styles"
              ></HeadingSection>
              <ProductGrid products={category.items?.slice(0, 6)} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CategorySection;
