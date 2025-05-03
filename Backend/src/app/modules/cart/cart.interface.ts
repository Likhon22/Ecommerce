import { Types } from 'mongoose';

export type TCartProduct = {
  productId: Types.ObjectId;
  productName: string;
  productImage: string;
  productDescription: string;
  quantity: number;
  size: string;
  color: {
    name: string;
    hex: string;
  };
  price: number;
  discountPrice?: number;
  finalPrice: number;
};
export type TCart = {
  _id: string;
  email: string;
  items: TCartProduct[];
};
