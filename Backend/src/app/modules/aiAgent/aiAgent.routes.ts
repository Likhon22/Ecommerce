import { Router } from 'express';
import aiAgentController from './aiAgent.controller';

const routes = Router();

routes.post('/', aiAgentController.handleApiReportRequest);

export const aiAgentRoutes = routes;
