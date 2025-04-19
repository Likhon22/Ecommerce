import { Router } from 'express';
import productControllers from './product.controller';

const routes = Router();

routes.get('/', productControllers.getProducts);

export const productRoutes = routes;
