import ApiError from '../../error/ApiError';
import hashPassword from '../../utils/hashPasssword';
import { TLoginUser, TRegisterUser } from './auth.interface';
import User from './auth.model';

const createUserIntoDB = async (payload: TRegisterUser) => {
  const isUserExists = await User.isUserExists(payload.email);
  if (isUserExists) {
    throw new ApiError(400, 'User already exists');
  }
  const hashedPassword = await hashPassword(payload.password);
  payload.password = hashedPassword;

  const newUser = await User.create(payload);

  return newUser;
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
  console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    throw new ApiError(400, 'Password is incorrect');
  }

  return isUserExists;
};

const authServices = {
  createUserIntoDB,
  loginUserFromDB,
};
export default authServices;
