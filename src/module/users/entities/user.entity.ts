import { Model, Column, Table } from 'sequelize-typescript';
@Table({ tableName: 'users', underscored: true })
export class UserModel extends Model {
  @Column
  email: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  password: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
