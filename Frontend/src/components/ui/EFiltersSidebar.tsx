import { categoryOptions, subCategoryOptions } from "@/constants/product";

import EButton from "./EButton";
import EMultiCheck from "./EMultiCheck";

import ERange from "./ERange";
import { productPriceRange } from "@/constants/query";

type EFiltersSidebarProps = {
  selectedCategoryOptions: string[];
  setSelectedCategoryOptions: React.Dispatch<React.SetStateAction<string[]>>;
  selectedSubCategoryOptions: string[];
  setSelectedSubCategoryOptions: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
};

const EFiltersSidebar = ({
  selectedCategoryOptions,
  setSelectedCategoryOptions,
  selectedSubCategoryOptions,
  setSelectedSubCategoryOptions,
  priceRange,
  setPriceRange,
}: EFiltersSidebarProps) => {
  const handleClearAll = () => {
    setSelectedCategoryOptions([]);
    setSelectedSubCategoryOptions([]);
    setPriceRange([productPriceRange.min, productPriceRange.max]);
  };

  return (
    <div className="bg-white w-full  static h-full px-4">
      <div className="flex items-center justify-between  py-2 border-b border-border">
        <h1 className="text-lg font-semibold">Filters</h1>
        <EButton
          onClick={handleClearAll}
          className="text-sm text-white bg-primary"
        >
          Clear All
        </EButton>
      </div>
      <div className="my-2">
        <EMultiCheck
          selectedOptions={selectedCategoryOptions}
          setSelectedOptions={setSelectedCategoryOptions}
          options={categoryOptions}
          categoryName="Categories"
        />
        <EMultiCheck
          options={subCategoryOptions}
          categoryName="Sub Categories"
          selectedOptions={selectedSubCategoryOptions}
          setSelectedOptions={setSelectedSubCategoryOptions}
        />
        <ERange
          value={priceRange}
          onValueChange={(newRange) => setPriceRange(newRange)}
          min={productPriceRange.min}
          max={productPriceRange.max}
          step={productPriceRange.step}
        />
      </div>
    </div>
  );
};

export default EFiltersSidebar;
