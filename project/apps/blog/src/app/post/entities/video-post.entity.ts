import { VideoPost } from '@project/libs/shared/app/types';
import { BasePostEntity } from './base-post.entity';

export class VideoPostEntity extends BasePostEntity implements VideoPost {
  videoUrl: string;

  constructor(post: VideoPost) {
    super(post);
    this.populate(post);
  }

  public populate(post: VideoPost) {
    super.populate(post);
    this.videoUrl = post.videoUrl;
  }

  public toPlainObject() {
    return {
      ...super.toPlainObject(),
      videoUrl: this.videoUrl,
    }
  }
}
