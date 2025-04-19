import { model, Schema } from 'mongoose';
import { TColor, TImages, TProduct, TSizes } from './product.interface';

export const imageSchema = new Schema<TImages>({
  cloudinaryUrl: { type: String, required: true },
  cloudinaryId: { type: String, required: true },
});
export const sizeSchema = new Schema<TSizes>({
  id: { type: Number, required: true },
  name: {
    type: String,
    enum: ['s', 'm', 'l', 'xl', 'xxl'],
    required: true,
  },
});
const colorSchema = new Schema<TColor>({
  name: { type: String, required: true },
  hex: { type: String, required: true },
  images: { type: [imageSchema], required: false },
});

export const productSchema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: [imageSchema], required: true },
  sizes: { type: [sizeSchema], required: true },
  colors: { type: [colorSchema], required: true },
  category: {
    type: String,
    enum: ['men', 'women', 'kids', 'unisex'],
    required: true,
  },
  subCategory: { type: String, required: true },
  bestseller: { type: Boolean, default: false },
});

const Product = model<TProduct>('Product', productSchema);

export default Product;
