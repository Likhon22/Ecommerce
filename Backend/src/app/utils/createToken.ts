import jwt, { SignOptions } from 'jsonwebtoken';
import { TJwtPayload } from '../modules/auth/auth.interface';

const createToken = (
  payload: TJwtPayload,
  secret: string,
  options: SignOptions,
) => {
  const token = jwt.sign(payload, secret, {
    expiresIn: options.expiresIn,
  });
  return token;
};

export default createToken;
