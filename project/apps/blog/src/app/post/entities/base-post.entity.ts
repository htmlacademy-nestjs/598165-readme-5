import { BasePost, LinkPost, PostStatus, PostType,
  QuotePost,
  TextPost,
  VideoPost
} from '@project/libs/shared/app/types';
import { Entity } from '@project/libs/shared/core';

export abstract class BasePostEntity implements BasePost, Entity<number | string> {
  protected constructor(post: TextPost | VideoPost | BasePost | QuotePost | LinkPost) {
    this.populate(post);
  }

  id?: number | string;
  type: PostType;
  title: string;
  author: string;
  createdAt: Date;
  publishedAt: Date;
  status: PostStatus;
  tags?: string[];

  public populate(post: BasePost) {
    this.id = post.id;
    this.type = post.type;
    this.title = post.title;
    this.author = post.author;
    this.createdAt = post.createdAt;
    this.publishedAt = post.publishedAt;
    this.status = post.status;
    this.tags = post.tags;
  }

  public toPlainObject() {
    return {
      id: this.id,
      type: this.type,
      title: this.title,
      author: this.author,
      createdAt: this.createdAt,
      publishedAt: this.publishedAt,
      status: this.status,
      tags: this.tags,
    };
  }
}
