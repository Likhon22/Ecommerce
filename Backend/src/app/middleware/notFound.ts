/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { TErrorSources } from '../types/error';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const message = 'API is not found';
  const statusCode = 404;
  const errorSources: TErrorSources[] = [
    {
      path: req.url,
      message,
    },
  ];

  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};

export default notFound;
