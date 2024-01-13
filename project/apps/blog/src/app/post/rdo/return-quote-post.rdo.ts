import { PostStatus, PostType, QuotePost } from '@project/libs/shared/app/types';
import { Expose } from 'class-transformer';

export class ReturnQuotePost implements QuotePost {

  @Expose()
  public id: number;

  @Expose()
  public quote: string;

  @Expose()
  public cite: string;

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
