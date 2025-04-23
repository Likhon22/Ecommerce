import { Schema, model } from 'mongoose';
import { TColor, TProduct, TSizes } from './product.interface';

// Image Schema
const imageSchema = new Schema({
  cloudinaryUrl: { type: String, required: true },
  cloudinaryId: { type: String, required: true },
});

// Size Schema
const sizeSchema = new Schema<TSizes>({
  id: { type: Number, required: true },
  name: {
    type: String,
    enum: ['s', 'm', 'l', 'xl', 'xxl'],
    required: true,
  },
});

// Color Schema
const colorSchema = new Schema<TColor>({
  name: { type: String, required: true },
  hex: { type: String, required: true },
  images: { type: [imageSchema], default: [] },
});

const productSchema = new Schema<TProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    images: { type: [imageSchema], required: true },
    sizes: { type: [sizeSchema], required: true },
    colors: { type: [colorSchema], required: true },
    category: {
      type: String,
      enum: ['kids', 'men', 'women', 'unisex'],
      required: true,
    },
    subCategory: { type: String, required: true },
    bestseller: { type: Boolean, default: false },
    brand: { type: String },

    discount: { type: Number, required: true, min: 0, max: 100 },
    discountPrice: { type: Number },
    stock: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true,
  },
);

productSchema.statics.isProductExists = async function (id: string) {
  return await Product.findById({ _id: id });
};
const Product = model<TProduct>('Product', productSchema);

export default Product;
