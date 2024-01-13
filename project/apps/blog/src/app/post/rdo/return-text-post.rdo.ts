import { PostStatus, PostType, TextPost } from '@project/libs/shared/app/types';
import { Expose } from 'class-transformer';

export class ReturnTextPost implements TextPost {

  @Expose()
  public id: number;

  @Expose()
  public title: string;

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
  public type: PostType;

  @Expose()
  public content: string;

  @Expose()
  public teaser: string;
}
