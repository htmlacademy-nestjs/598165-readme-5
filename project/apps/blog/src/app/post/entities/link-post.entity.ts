import { LinkPost } from '@project/libs/shared/app/types';
import { BasePostEntity } from './base-post.entity';

export class LinkPostEntity extends BasePostEntity implements LinkPost {
  link: string;
  description?: string;

  constructor(post: LinkPost) {
    super(post);
    this.populate(post);
  }

  public populate(post: LinkPost) {
    super.populate(post);
    this.link = post.link;
    this.description = post.description;
  }

  public toPlainObject() {
    return {
      ...super.toPlainObject(),
      link: this.link,
      description: this.description,
    }
  }
}
