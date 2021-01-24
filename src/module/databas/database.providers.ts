import { Sequelize } from 'sequelize-typescript';
import { UserModel } from '../users/entities/user.entity';

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
      sequelize.addModels([UserModel]);
      // await sequelize.sync();
      return sequelize;
    },
  },
];
