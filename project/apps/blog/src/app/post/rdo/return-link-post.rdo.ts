import { Expose } from 'class-transformer';
import { LinkPost, PostStatus, PostType } from '@project/libs/shared/app/types';

export class ReturnLinkPost implements LinkPost {

  @Expose()
  public id: number;

  @Expose()
  public link: string;

  @Expose()
  public description?: string;

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
