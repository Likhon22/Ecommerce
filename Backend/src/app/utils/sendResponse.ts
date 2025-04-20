import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
  success: boolean;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const { statusCode, message, data: responseData, success } = data;
  res.status(statusCode).json({
    message,
    data: responseData,
    success,
  });
};

export default sendResponse;
