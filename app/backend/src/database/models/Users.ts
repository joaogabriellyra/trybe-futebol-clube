import { INTEGER, Model, STRING } from 'sequelize';
import DB from '.';

export default class Users extends Model {
  public id?: number;
  public username: string;
  public role: string;
  public email: string;
  public password: string;
}

Users.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  role: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: DB,
  tableName: 'users',
  underscored: true,
  timestamps: false,
});
