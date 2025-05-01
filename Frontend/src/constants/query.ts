export const sortConstants = [
  {
    label: "Most Recent",
    value: "-createdAt",
  },
  {
    label: "Oldest",
    value: "createdAt",
  },
  {
    label: "Price: High to Low",
    value: "-price",
  },
  {
    label: "Price: Low to High",
    value: "price",
  },
];

export const productPriceRange = {
  min: 0,
  max: 1000,
  step: 10,
};
