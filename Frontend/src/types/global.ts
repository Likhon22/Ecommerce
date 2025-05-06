import React from "react";

export type TQueryParam = {
  name: string;
  value: boolean | React.Key | string;
};
export type TMeta = {
  page: number;
  limit: number;
  totalPage: number;
  totalDocuments: number;
};
export type TResponse<T> = {
  statusCode: number;
  message: string;
  data: T;
  success: boolean;
  meta?: TMeta;
};
