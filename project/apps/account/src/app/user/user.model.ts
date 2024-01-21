import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { AuthUser } from '@project/libs/shared/app/types';

@Schema({
  collection: 'account',
  timestamps: true
})
export class UserModel extends Document implements AuthUser {
  @Prop()
  avatar: string;

  @Prop({
    required: true,
    unique: true
  })
  email: string;

  @Prop({
    required: true
  })
  name: string;

  @Prop({
    required: true
  })
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
