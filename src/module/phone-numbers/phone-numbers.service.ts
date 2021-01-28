import { Inject, Injectable } from '@nestjs/common';
import { CreatePhoneNumberInput } from './dto/create-phone-number.input';
import { UpdatePhoneNumberInput } from './dto/update-phone-number.input';
import { PhoneNumber } from './entities/phone-number.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class PhoneNumbersService {
  constructor(
    @Inject('PHONE_NUMBERS_REPOSITORY')
    private phoneRepository: typeof PhoneNumber,
    private readonly userService: UsersService,
  ) {}

  getUserData(id: number) {
    return this.userService.findOne(id);
  }
  create(createPhoneNumberInput: CreatePhoneNumberInput) {
    console.log(createPhoneNumberInput);
    return this.phoneRepository.create(createPhoneNumberInput);
  }

  findAll() {
    return this.phoneRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} phoneNumber`;
  }

  update(id: number, updatePhoneNumberInput: UpdatePhoneNumberInput) {
    console.log(id, updatePhoneNumberInput);
    return `This action updates a #${id} phoneNumber`;
  }

  remove(id: number) {
    return `This action removes a #${id} phoneNumber`;
  }
}
