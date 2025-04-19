import { Router } from 'express';
import { productRoutes } from '../modules/product/product.routes';

const router = Router();
type routes = {
  path: string;
  route: Router;
}[];
const routes: routes = [
  {
    path: '/product',
    route: productRoutes,
  },
];

routes.forEach(route => {
  router.use(route.path, route.route);
});

export const moduleRoutes = router;
