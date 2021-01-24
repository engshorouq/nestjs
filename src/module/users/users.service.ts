import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from '../../graphql.schema';
import { usersProviders } from './users.providers';
import { UserModel } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private userRepository: typeof UserModel,
  ) {}
  create(createUserInput: CreateUserInput) {
    return this.userRepository.create(createUserInput);
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return {};
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return 'updated';
  }

  remove(id: number) {
    return ``;
  }
}
