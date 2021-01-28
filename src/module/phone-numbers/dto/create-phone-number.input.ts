import { CreatePhoneNumberInput as CreatePhoneNumberInputInterface } from 'src/graphql.schema';

export class CreatePhoneNumberInput implements CreatePhoneNumberInputInterface {
  userId: string;
  phoneNumber: string;
  code: string;
}
