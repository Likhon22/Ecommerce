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
router.get('/:email', cartControllers.getCart);
router.delete('/:email', cartControllers.deleteCart);
export const cartRoutes = router;
