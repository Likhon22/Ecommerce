import { z } from "zod";

const colorsSchema = z.object({
  name: z.string(),
  hex: z.string(),
  images: z.array(z.string()).optional(),
});
const sizeSchema = z.object({
  id: z.number(),
  name: z.enum(["s", "m", "l", "xl", "xxl"]),
});

export const productSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),

  images: z.array(z.instanceof(File)).min(1, {
    message: "At least one image is required",
  }),

  category: z.enum(["men", "women", "kids", "unisex"]),

  subCategory: z.string().min(1, { message: "Sub Category is required" }),

  colors: z
    .array(colorsSchema)
    .min(1, { message: "At least one color is required" }),

  sizes: z.array(sizeSchema).optional(),

  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(0.01, { message: "Price must be greater than 0" }),

  description: z.string().min(1, { message: "Description is required" }),

  brand: z.string().optional(),

  stock: z
    .number({ invalid_type_error: "Stock must be a number" })
    .min(0, { message: "Stock cannot be negative" }),

  discount: z
    .number({ invalid_type_error: "Discount must be a number" })
    .min(0, { message: "Discount must be 0 or more" })
    .max(100, { message: "Discount cannot exceed 100%" }),
});
