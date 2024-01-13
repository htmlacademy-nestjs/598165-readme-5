import { Expose } from 'class-transformer';
import { PostStatus, PostType, VideoPost } from '@project/libs/shared/app/types';

export class ReturnVideoPost implements VideoPost {

  @Expose()
  public author: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public id: number;

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

  @Expose()
  public videoUrl: string;
}
