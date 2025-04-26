import { z } from 'zod';
import { loginSchema, registerSchema } from './auth.validation';
import { Model } from 'mongoose';

export type TLoginUser = z.infer<typeof loginSchema>['body'];

export type TRegisterUser = z.infer<typeof registerSchema>['body'];
export type TJwtPayload = Pick<TRegisterUser, 'name' | 'email'>;

export interface userModel extends Model<TRegisterUser> {
  isUserExists(email: string): Promise<TRegisterUser> | null;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
}
