import { Injectable } from '@nestjs/common';

import { PostStatus, PostType } from '@project/libs/shared/app/types';
import { CreateImagePost, CreateLinkPost, CreateQuotePost, CreateTextPost, CreateVideoPost } from './dto';
import { ImagePostEntity, LinkPostEntity, QuotePostEntity, TextPostEntity, VideoPostEntity } from './entities';

import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {
  }

  async create (
    dto: CreateImagePost | CreateLinkPost | CreateQuotePost | CreateTextPost | CreateVideoPost,
    authorId: string,
    type: PostType,
  ) {
    let entity: ImagePostEntity | LinkPostEntity | QuotePostEntity | TextPostEntity | VideoPostEntity;
    const post = {
      createdAt: new Date(),
      publishedAt: new Date(),
      status: PostStatus.Published,
      author: authorId,
      type
    }
    if (type === PostType.Image) {
      entity = new ImagePostEntity({...post, ...dto as CreateImagePost});
    }
    if (type === PostType.Link) {
      entity = new LinkPostEntity({...post, ...dto as CreateLinkPost});
    }
    if (type === PostType.Quote) {
      entity = new QuotePostEntity({...post, ...dto as CreateQuotePost});
    }
    if (type === PostType.Text) {
      entity = new TextPostEntity({...post, ...dto as CreateTextPost});
    }
    if (type === PostType.Video) {
      entity = new VideoPostEntity({...post, ...dto as CreateVideoPost});
    }
    return this.postRepository.save(entity);
  }

  async get(id: string) {
    return this.postRepository.find(id);
  }

  async getAll() {
    return this.postRepository.findAll();
  }
}
