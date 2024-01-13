import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/libs/shared/core';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository extends BaseMemoryRepository<UserEntity> {
  public  findByEmail(email: string): Promise<UserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find(entity => entity.email === email);
    return Promise.resolve(user);
  }
}
