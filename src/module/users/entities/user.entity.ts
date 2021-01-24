import { Model, Column, Table } from 'sequelize-typescript';
@Table({ tableName: 'users' })
export class UserModel extends Model {
  @Column
  email: string;

  @Column
  fistName: string;

  @Column
  lastName: string;

  @Column
  password: string;
}
