import ApiError from '../../error/ApiError';
import { TRegisterUser } from './auth.interface';
import User from './auth.model';

const createUserIntoDB = async (Payload: TRegisterUser) => {
  const isUserExists = await User.isUserExists(Payload.email);
  if (isUserExists) {
    throw new ApiError(400, 'User already exists');
  }
  const newUser = await User.create(Payload);

  return newUser;
};

const authServices = {
  createUserIntoDB,
};
export default authServices;
