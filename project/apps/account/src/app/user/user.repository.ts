import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseMongoRepository } from '@project/libs/shared/core';
import { UserEntity } from './user.entity';
import { UserModel } from './user.model';

@Injectable()
export class UserRepository extends
  BaseMongoRepository<UserEntity, UserModel> {
  constructor(
    @InjectModel(UserModel.name) userModel: Model<UserModel>
  ) {
    super(userModel, UserEntity.fromPlainObject);
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
   const document = await this.model.findOne({ email }).exec();
   return this.createEntityFromDocument(document);
  }
}
