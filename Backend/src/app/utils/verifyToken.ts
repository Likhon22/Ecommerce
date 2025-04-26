/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload } from 'jsonwebtoken';
import ApiError from '../error/ApiError';
import config from '../config';
const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      config.jwt.jwt_refresh_secret as string,
    ) as JwtPayload;
    return decoded;
  } catch (error) {
    throw new ApiError(401, 'Invalid token');
  }
};

export default verifyToken;
