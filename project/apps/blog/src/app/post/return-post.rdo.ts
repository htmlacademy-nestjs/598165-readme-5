import {
  BasePost,
  ImagePost,
  LinkPost,
  PostStatus, PostType,
  QuotePost,
  TextPost,
  VideoPost
} from '@project/libs/shared/app/types';
import { Expose } from 'class-transformer';

export class ReturnPost implements BasePost,ImagePost, LinkPost, QuotePost, TextPost, VideoPost {

  @Expose()
  public author: string;

  @Expose()
  public cite: string;

  @Expose()
  public content: string;

  @Expose()
  public createdAt: Date;

  @Expose()
  public description: string;

  @Expose()
  public id: number | string;

  @Expose()
  public image: string;

  @Expose()
  public link: string;

  @Expose()
  public publishedAt: Date;

  @Expose()
  public quote: string;

  @Expose()
  public status: PostStatus;

  @Expose()
  public tags: string[];

  @Expose()
  public teaser: string;

  @Expose()
  public title: string;

  @Expose()
  public type: PostType;

  @Expose()
  public videoUrl: string;
}
