
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateUserInput {
    firstName: string;
    email: string;
    password: string;
    lastName?: string;
}

export class UpdateUserInput {
    id: number;
    firstName?: string;
    email?: string;
    lastName?: string;
}

export class User {
    id: number;
    firstName: string;
    email: string;
    lastName?: string;
    createdAt: string;
    updatedAt: string;
}

export abstract class IQuery {
    abstract users(): User[] | Promise<User[]>;

    abstract user(id: number): User | Promise<User>;
}

export abstract class IMutation {
    abstract userCreate(createUserInput: CreateUserInput): User | Promise<User>;

    abstract userUpdate(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract userRemove(id: number): User | Promise<User>;
}
