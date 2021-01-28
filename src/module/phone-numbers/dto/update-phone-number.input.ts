import { CreatePhoneNumberInput } from './create-phone-number.input';
import { PartialType } from '@nestjs/graphql';

export class UpdatePhoneNumberInput extends CreatePhoneNumberInput {
  id: number;
}
