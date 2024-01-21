import { AuthUser } from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './user.constants';

export class UserEntity implements AuthUser, Entity<string> {
  id?: string;
  avatar: string;
  email: string;
  name: string;
  passwordHash: string;

  constructor(user: AuthUser) {
    this.populate(user);
  }

  public toPlainObject() {
    return {
      id: this.id,
      avatar: this.avatar,
      email: this.email,
      name: this.name,
      passwordHash: this.passwordHash,
    }
  }

  public populate(user: AuthUser) {
    this.id = user.id;
    this.avatar = user.avatar;
    this.email = user.email;
    this.name = user.name;
    this.passwordHash = user.passwordHash;
  }

  public async setPassword(password: string): Promise<UserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash)
  }

  static fromPlainObject(user: AuthUser): UserEntity {
    return new UserEntity(user);
  }
}
