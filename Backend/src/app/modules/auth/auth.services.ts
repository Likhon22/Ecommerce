import { SignOptions } from 'jsonwebtoken';
import config from '../../config';
import ApiError from '../../error/ApiError';
import createToken from '../../utils/createToken';
import hashPassword from '../../utils/hashPasssword';
import { TJwtPayload, TLoginUser, TRegisterUser } from './auth.interface';
import User from './auth.model';
import verifyToken from '../../utils/verifyToken';

const createUserIntoDB = async (payload: TRegisterUser) => {
  const isUserExists = await User.isUserExists(payload.email);
  if (isUserExists) {
    throw new ApiError(400, 'User already exists');
  }
  const hashedPassword = await hashPassword(payload.password);
  payload.password = hashedPassword;

  const newUser = await User.create(payload);
  const jwtPayload: TJwtPayload = {
    name: newUser.name,
    email: newUser.email,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt.jwt_secret as string,
    {
      expiresIn: config.jwt.jwt_expires_in,
    } as SignOptions,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt.jwt_refresh_expires_in,
    } as SignOptions,
  );

  return { accessToken, refreshToken };
};
const loginUserFromDB = async (payload: TLoginUser) => {
  const isUserExists = await User.isUserExists(payload.email);
  if (!isUserExists) {
    throw new ApiError(400, 'User not found');
  }
  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    isUserExists.password,
  );

  if (!isPasswordMatched) {
    throw new ApiError(400, 'Password is incorrect');
  }
  const jwtPayload: TJwtPayload = {
    name: isUserExists.name,
    email: isUserExists.email,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt.jwt_secret as string,
    {
      expiresIn: config.jwt.jwt_expires_in,
    } as SignOptions,
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt.jwt_refresh_expires_in,
    } as SignOptions,
  );

  return { accessToken, refreshToken };
};
const refreshToken = async (token: string) => {
  const decoded = verifyToken(token);
  const isUserExists = await User.isUserExists(decoded.email);
  if (!isUserExists) {
    throw new ApiError(400, 'User not found');
  }

  const jwtPayload: TJwtPayload = {
    name: isUserExists.name,
    email: isUserExists.email,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt.jwt_secret as string,
    {
      expiresIn: config.jwt.jwt_expires_in,
    } as SignOptions,
  );

  return accessToken;
};

const authServices = {
  createUserIntoDB,
  loginUserFromDB,
  refreshToken,
};
export default authServices;
