import bcrypt from 'bcrypt';
import config from '../config';
const hashPassword = async (password: string): Promise<string> => {
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );
  return hashedPassword;
};

export default hashPassword;
