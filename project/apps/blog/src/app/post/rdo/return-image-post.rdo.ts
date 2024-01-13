import { Expose } from 'class-transformer';

import { PostStatus, PostType, } from '@project/libs/shared/app/types';

export class ReturnImagePost  {
  @Expose()
  public id: number;

  @Expose()
  public image: string;

  @Expose()
  public author: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public publishedAt: Date;

  @Expose()
  public status: PostStatus;

  @Expose()
  public tags: string[];

  @Expose()
  public title: string;

  @Expose()
  public type: PostType;
}
