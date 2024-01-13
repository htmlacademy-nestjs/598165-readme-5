import { Module } from '@nestjs/common';

import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { LikeModule } from './like/like.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [PostModule, CommentModule, LikeModule, TagModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
