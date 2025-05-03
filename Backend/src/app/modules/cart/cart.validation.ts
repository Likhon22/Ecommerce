import { z } from 'zod';

const cartProductValidationSchema = z.object({
  body: z.object({
    productId: z.string().nonempty('Product ID is required'),

    email: z
      .string()
      .email('Invalid email address')
      .nonempty('Email is required'),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
    size: z.string().nonempty('Size is required'),
    color: z.object({
      name: z.string().nonempty('Color name is required'),
      hex: z.string().nonempty('Color hex is required'),
    }),
  }),
});

const cartValidations = {
  cartProductValidationSchema,
};

export default cartValidations;
