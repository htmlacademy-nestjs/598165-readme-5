import { TextPost } from '@project/libs/shared/app/types';
import { BasePostEntity } from './base-post.entity';

export class TextPostEntity extends BasePostEntity implements TextPost {
  teaser: string;
  content: string;

  constructor(post: TextPost) {
    super(post);
    this.populate(post);
  }

  public populate(post: TextPost) {
    super.populate(post);
    this.teaser = post.teaser;
    this.content = post.content;
  }

  public toPlainObject() {
    return {
      ...super.toPlainObject(),
      teaser: this.teaser,
      content: this.content,
    }
  }
}
