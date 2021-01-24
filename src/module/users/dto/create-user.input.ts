import { IsEmail, IsString } from 'class-validator';
import { CreateUserInput as CreateUserInputInterface } from '../../../graphql.schema';
export class CreateUserInput extends CreateUserInputInterface {
  @IsEmail({}, { message: 'this is not email' })
  email: string;

  @IsString({ message: 'the type must be string' })
  firstName: string;

  @IsString({ message: 'the type must be string' })
  lastName?: string;

  @IsString({ message: 'the type must be string' })
  password: string;
}
