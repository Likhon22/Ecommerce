import { Router } from 'express';
import { productRoutes } from '../modules/product/product.routes';
import { authRoutes } from '../modules/auth/auth.routes';
import { aiAgentRoutes } from '../modules/aiAgent/aiAgent.routes';
import { cartRoutes } from '../modules/cart/cart.routes';

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
  {
    path: '/aiAgent',
    route: aiAgentRoutes,
  },
  {
    path: '/cart',
    route: cartRoutes,
  },
];

routes.forEach(route => {
  router.use(route.path, route.route);
});

export const moduleRoutes = router;
