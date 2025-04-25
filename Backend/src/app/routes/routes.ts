import { Router } from 'express';
import { productRoutes } from '../modules/product/product.routes';
import { authRoutes } from '../modules/auth/auth.routes';

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
  {
    path: '/auth',
    route: authRoutes,
  },
];

routes.forEach(route => {
  router.use(route.path, route.route);
});

export const moduleRoutes = router;
