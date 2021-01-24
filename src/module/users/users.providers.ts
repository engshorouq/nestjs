import { UserModel } from './entities/user.entity';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: UserModel,
  },
];