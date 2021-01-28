import { PhoneNumber } from './entities/phone-number.entity';

export const usersProviders = [
  {
    provide: 'PHONE_NUMBERS_REPOSITORY',
    useValue: PhoneNumber,
  },
];
