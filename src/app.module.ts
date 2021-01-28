import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './module/users/users.module';
import { DatabaseModule } from './module/databas/database.module';
import { PhoneNumbersModule } from './module/phone-numbers/phone-numbers.module';

@Module({
  imports: [
    PhoneNumbersModule,
    UsersModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
