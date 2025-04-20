import { Router } from 'express';
import productControllers from './product.controller';

const routes = Router();

routes.get('/create-product', productControllers.createProducts);

export const productRoutes = routes;
