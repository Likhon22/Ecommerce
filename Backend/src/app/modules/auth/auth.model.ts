import { model, Schema } from 'mongoose';
import { TRegisterUser, userModel } from './auth.interface';
import bcrypt from 'bcrypt';
const userSchema = new Schema<TRegisterUser, userModel>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);
userSchema.statics.isUserExists = async function (email: string) {
  return User.findOne({ email });
};
userSchema.statics.isPasswordMatched = async (
  givenPassword: string,
  savedPassword: string,
) => {
  return await bcrypt.compare(givenPassword, savedPassword);
};

const User = model<TRegisterUser, userModel>('User', userSchema);

export default User;
