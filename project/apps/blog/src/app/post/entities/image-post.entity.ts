import { ImagePost } from '@project/libs/shared/app/types';
import { BasePostEntity } from './base-post.entity';

export class ImagePostEntity extends BasePostEntity  {
  image: string;
  constructor(post: ImagePost) {
    super(post);
    this.populate(post);
    console.log("entity", this)
  }

  public populate(post: ImagePost) {
    super.populate(post);
    this.image = post.image;
  }

  public toPlainObject() {
    return {
      ...super.toPlainObject(),
      image: this.image,
    }
  }
}
