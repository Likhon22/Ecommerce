import { TGenericErrorResponse } from '../types/error';
import ApiError from './ApiError';

const handleApiError = (err: ApiError): TGenericErrorResponse => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';
  const errorSources = [
    {
      path: '',
      message: err.message || 'Something went wrong',
    },
  ];
  return {
    statusCode,
    message,
    errorSources,
    success: false,
  };
};

export default handleApiError;
