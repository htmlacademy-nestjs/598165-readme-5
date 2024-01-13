import { QuotePost } from '@project/libs/shared/app/types';
import { BasePostEntity } from './base-post.entity';

export class QuotePostEntity extends BasePostEntity implements QuotePost {
  quote: string;
  cite: string;

  constructor(post: QuotePost) {
    super(post);
    this.populate(post);
  }

  public populate(post: QuotePost) {
    super.populate(post);
    this.quote = post.quote;
    this.cite = post.cite;
  }

  public toPlainObject() {
    return {
      ...super.toPlainObject(),
      quote: this.quote,
      cite: this.cite,
    }
  }
}
