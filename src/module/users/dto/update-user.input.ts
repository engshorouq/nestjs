import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/graphql';
import { UpdateUserInput as UpdateUserInputInterface } from '../../../graphql.schema';
import { IsEmail, IsString } from 'class-validator';

export class UpdateUserInput extends UpdateUserInputInterface {
  id: number;
  @IsEmail({}, { message: 'this is not email' })
  email?: string;

  @IsString({ message: 'the type must be string' })
  firstName: string;

  @IsString({ message: 'the type must be string' })
  lastName?: string;
}
