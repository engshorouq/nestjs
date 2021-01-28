import {
  Resolver,
  Query,
  Mutation,
  Args,
  Field,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { PhoneNumbersService } from './phone-numbers.service';
import { CreatePhoneNumberInput } from './dto/create-phone-number.input';
import { UpdatePhoneNumberInput } from './dto/update-phone-number.input';

@Resolver('PhoneNumber')
export class PhoneNumbersResolver {
  constructor(private readonly phoneNumbersService: PhoneNumbersService) {}

  @Mutation('createPhoneNumber')
  create(
    @Args()
    createPhoneNumberInput: any,
  ) {
    console.log(111, createPhoneNumberInput);
    return this.phoneNumbersService.create(createPhoneNumberInput);
  }

  @Query('phoneNumbers')
  findAll() {
    return this.phoneNumbersService.findAll();
  }

  @Query('phoneNumber')
  findOne(@Args('id') id: number) {
    return this.phoneNumbersService.findOne(id);
  }

  @ResolveField()
  user(@Parent() phoneNumber) {
    const { userId } = phoneNumber;
    return this.phoneNumbersService.getUserData(userId);
  }

  @Mutation('updatePhoneNumber')
  update(
    @Args('updatePhoneNumberInput')
    updatePhoneNumberInput: UpdatePhoneNumberInput,
  ) {
    console.log(updatePhoneNumberInput);
    return this.phoneNumbersService.update(
      updatePhoneNumberInput.id,
      updatePhoneNumberInput,
    );
  }

  @Mutation('removePhoneNumber')
  remove(@Args('id') id: number) {
    return this.phoneNumbersService.remove(id);
  }
}
