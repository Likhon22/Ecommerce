import { z } from 'zod';
import { createProductSchema } from './product.validation';

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

export type TProduct = z.infer<typeof createProductSchema>['body'];
