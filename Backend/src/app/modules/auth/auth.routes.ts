import { Router } from 'express';
import authControllers from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import authValidations from './auth.validation';

const routes = Router();

routes.post(
  '/create-user',
  validateRequest(authValidations.registerSchema),
  authControllers.createUser,
);
routes.post(
  '/login',
  validateRequest(authValidations.loginSchema),
  authControllers.loginUser,
);
routes.post('/refresh-token', authControllers.refreshToken);

export const authRoutes = routes;
