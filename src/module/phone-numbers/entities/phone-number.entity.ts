import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'phoneNumbers', underscored: true })
export class PhoneNumber extends Model {
  @Column
  userId: number;

  @Column
  code: string;

  @Column
  phoneNumber: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
