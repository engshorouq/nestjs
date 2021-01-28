import { Test, TestingModule } from '@nestjs/testing';
import { PhoneNumbersResolver } from './phone-numbers.resolver';
import { PhoneNumbersService } from './phone-numbers.service';

describe('PhoneNumbersResolver', () => {
  let resolver: PhoneNumbersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhoneNumbersResolver, PhoneNumbersService],
    }).compile();

    resolver = module.get<PhoneNumbersResolver>(PhoneNumbersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
