import { compareSync } from 'bcryptjs';

const comparePassword = (password: string, hash: string): boolean => {
  const result = compareSync(password, hash);
  return result;
};

export default comparePassword;
