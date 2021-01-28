
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreatePhoneNumberInput {
    userId: string;
    code: string;
    phoneNumber: string;
}

export class UpdatePhoneNumberInput {
    id: number;
    code?: string;
    phoneNumber?: string;
}

export class CreateUserInput {
    firstName: string;
    email: string;
    password: string;
    lastName?: string;
}

export class UpdateUserInput {
    id: string;
    firstName?: string;
    email?: string;
    lastName?: string;
}

export interface Node {
    id: string;
}

export abstract class IQuery {
    abstract phoneNumbers(): PhoneNumber[] | Promise<PhoneNumber[]>;

    abstract phoneNumber(id: number): PhoneNumber | Promise<PhoneNumber>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(id: string): User | Promise<User>;
}

export abstract class IMutation {
    abstract createPhoneNumber(createPhoneNumberInput: CreatePhoneNumberInput): PhoneNumber | Promise<PhoneNumber>;

    abstract updatePhoneNumber(id: string, updatePhoneNumberInput: UpdatePhoneNumberInput): PhoneNumber | Promise<PhoneNumber>;

    abstract removePhoneNumber(id: number): PhoneNumber | Promise<PhoneNumber>;

    abstract userCreate(createUserInput: CreateUserInput): User | Promise<User>;

    abstract userUpdate(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract userRemove(id: string): User | Promise<User>;
}

export class PhoneNumber implements Node {
    id: string;
    user?: User;
    phoneNumber?: string;
    code?: string;
}

export class User implements Node {
    id: string;
    firstName: string;
    email: string;
    phones?: PhoneNumber[];
    lastName?: string;
    createdAt: string;
    updatedAt: string;
}
