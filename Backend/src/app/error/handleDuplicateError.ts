/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources, TGenericErrorResponse } from '../types/error';

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const statusCode = 400;
  const message = 'Duplicate field value entered';

  const errorMessage = err?.keyValue?.email;
  const errorSources: TErrorSources[] = [
    {
      path: '',
      message: `${errorMessage} is already exists`,
    },
  ];
  return {
    statusCode,
    message,
    errorSources,
    success: false,
  };
};

export default handleDuplicateError;
