export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string[];
  sizes: ("s" | "m" | "l" | "xl" | "xxl")[];
  category: string;
  subCategory: string;
  bestseller: boolean;
  date: number;
};
