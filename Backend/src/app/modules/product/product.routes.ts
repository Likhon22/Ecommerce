import { Router } from 'express';
import productControllers from './product.controller';

const routes = Router();

routes.post('/create-product', productControllers.createProducts);
routes.get('/', productControllers.getProducts);
routes.get('/:id', productControllers.getSingleProduct);

export const productRoutes = routes;
