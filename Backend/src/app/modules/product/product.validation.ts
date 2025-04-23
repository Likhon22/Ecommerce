import { z } from 'zod';

export const sizeSchema = z.object({
  id: z.number(),
  name: z.enum(['s', 'm', 'l', 'xl', 'xxl']),
});

export const imageSchema = z.object({
  cloudinaryUrl: z.string().url(),
  cloudinaryId: z.string(),
});

export const colorSchema = z.object({
  name: z.string(),
  hex: z.string(),
  images: z.array(imageSchema).optional(),
});

export const createProductSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    price: z.number(),
    images: z.array(imageSchema),
    sizes: z.array(sizeSchema),
    colors: z.array(colorSchema),
    category: z.enum(['kids', 'men', 'women', 'unisex']),
    subCategory: z.string(),
    bestseller: z.boolean().optional(),
    brand: z.string().optional(),
    discount: z.number().min(0).max(100),
    discountPrice: z.number().optional(),
    stock: z.number().int().min(0),
  }),
});

const productSchema = {
  createProductSchema,
};
export default productSchema;
