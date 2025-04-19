export type TSizes = {
  id: number;
  name: 's' | 'm' | 'l' | 'xl' | 'xxl';
};
export type TImages = {
  cloudinaryUrl: string;
  cloudinaryId: string;
};
export type TColor = {
  name: string;
  hex: string;
  images?: TImages[];
};
export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: TImages[];
  sizes: TSizes[];
  colors: TColor[];
  category: 'kids' | 'men' | 'women' | 'unisex';
  subCategory: string;
  bestseller: boolean;
};
