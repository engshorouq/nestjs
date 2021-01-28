import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../users/entities/user.entity';
import { PhoneNumber } from '../phone-numbers/entities/phone-number.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'todo',
        define: {
          underscored: true,
          timestamps: false,
        },
      });
      sequelize.addModels([UserModel, PhoneNumber]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
