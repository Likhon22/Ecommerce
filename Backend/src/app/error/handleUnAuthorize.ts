/* eslint-disable @typescript-eslint/no-explicit-any */
import { TGenericErrorResponse } from '../types/error';

const handleUnauthorize = (err: any): TGenericErrorResponse => {
  const statusCode = err.statusCode || 401;
  const message = err.message || 'Unauthorized access';
  const errorSources = [
    {
      path: '',
      message: err.message || 'Unauthorized access',
    },
  ];
  return {
    statusCode,
    message,
    errorSources,
  };
};
export default handleUnauthorize;
