import { INTEGER, Model, STRING } from 'sequelize';
import DB from '.';

export default class Teams extends Model {
  public id?: number;
  public teamName: string;
}

Teams.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: DB,
  tableName: 'teams',
  underscored: true,
  timestamps: false,
});
