import { Router } from 'express';
import cartControllers from './cart.controller';
import validateRequest from '../../middleware/validateRequest';
import cartValidations from './cart.validation';

const router = Router();

router.post(
  '/create-cart',
  validateRequest(cartValidations.cartProductValidationSchema),
  cartControllers.createCart,
);
export const cartRoutes = router;
