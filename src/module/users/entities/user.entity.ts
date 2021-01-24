import { Model, Column, Table } from 'sequelize-typescript';
@Table({ tableName: 'users', underscored: true })
export class UserModel extends Model {
  @Column
  email: string;

  @Column({ field: 'first_name' })
  firstName: string;

  @Column({ field: 'last_name' })
  lastName: string;

  @Column
  password: string;

  @Column({ field: 'created_at' })
  createdAt: Date;

  @Column({ field: 'updated_at' })
  updatedAt: Date;
}
