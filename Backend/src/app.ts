import express, { Application, Request, Response } from 'express';

import cors from 'cors';
export const app: Application = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('It is working!');
});
