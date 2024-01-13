import { Injectable } from '@nestjs/common';

import { BaseMemoryRepository } from '@project/libs/shared/core';
import { ImagePostEntity, LinkPostEntity, QuotePostEntity, TextPostEntity, VideoPostEntity } from './entities';

@Injectable()
export class PostRepository extends BaseMemoryRepository<ImagePostEntity | TextPostEntity | QuotePostEntity | LinkPostEntity | VideoPostEntity> {}
