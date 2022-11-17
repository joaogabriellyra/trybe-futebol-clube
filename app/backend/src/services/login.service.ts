import comparePassword from '../helpers/bcrypt';
import User from '../database/models/Users';
import { createToken } from '../helpers/jwtToken';

export default class LoginUser {
  constructor(private model: typeof User) {}
  async getLogin(user: any) {
    const userLogged = await this.model.findOne({
      where: { email: user.email },
    });

    if (!userLogged) {
      throw new Error('Incorrect email or password');
    }

    const validPassword = comparePassword(user.password, userLogged.password);
    if (!validPassword) {
      throw new Error('Incorrect email or password');
    }

    const token = createToken(userLogged);
    return token;
  }

  async getRole(userId: string) {
    const user = await this.model.findOne({
      where: { id: userId },
    });
    return user?.role as string;
  }
}
