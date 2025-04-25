import { Response } from 'express';

type TMeta = {
  page: number;
  limit: number;
  totalPage: number;
  totalDocuments: number;
};
type TResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
  success: boolean;
  meta?: TMeta;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  const { statusCode, message, data: responseData, success } = data;
  res.status(statusCode).json({
    message,
    data: responseData,
    success,
    meta: data.meta,
  });
};

export default sendResponse;
