import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import { moduleRoutes } from './app/routes/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
import { generalRateLimiter } from './app/middleware/rateLimiter';
import { devLogger } from './app/middleware/logger';

export const app: Application = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  }),
);
app.use(cookieParser());
app.use(generalRateLimiter);
app.use(devLogger);

// routes
app.use('/api/v1', moduleRoutes);
app.get('/', (req: Request, res: Response) => {
  res.send('It is working!');
});

app.use(globalErrorHandler);

app.use(notFound);
