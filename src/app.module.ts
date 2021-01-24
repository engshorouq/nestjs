import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './module/users/users.module';
import { DatabaseModule } from './module/databas/database.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
