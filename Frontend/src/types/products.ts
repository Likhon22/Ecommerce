export type TCreateProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: {
    cloudinaryUrl: string;
    cloudinaryId: string;
  }[];
  sizes: {
    id: number;
    name: "s" | "m" | "l" | "xl" | "xxl";
  }[];
  colors: {
    name: string;
    hex: string;
    images?: {
      cloudinaryUrl: string;
      cloudinaryId: string;
    }[];
  }[];
  category: "kids" | "men" | "women" | "unisex";
  subCategory: string;
  bestseller?: boolean;
  brand?: string;
  discount: number;
  discountPrice?: number;
  stock: number;
};
export type TColor = {
  name: string;
  hex: string;
};
