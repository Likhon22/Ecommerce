export type TErrorSources = {
  path: string;
  message: string;
};

export type TGenericErrorResponse = {
  message: string;
  statusCode?: number;
  errorSources: TErrorSources[];
  stack?: string;
  success: boolean;
};
