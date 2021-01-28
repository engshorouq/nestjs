import { Module } from '@nestjs/common';
import { PhoneNumbersService } from './phone-numbers.service';
import { PhoneNumbersResolver } from './phone-numbers.resolver';
import { usersProviders } from './phoneNumbers.providers';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [...usersProviders, PhoneNumbersResolver, PhoneNumbersService],
})
export class PhoneNumbersModule {}
