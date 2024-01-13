import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostType } from '@project/libs/shared/app/types';

import { fillDto } from '@project/shared/helpers';
import { PostService } from './post.service';
import { CreateImagePost, CreateLinkPost, CreateQuotePost, CreateTextPost, CreateVideoPost } from './dto';
import { ReturnImagePost, ReturnLinkPost, ReturnQuotePost, ReturnTextPost, ReturnVideoPost } from './rdo';
import { ReturnPost } from './return-post.rdo';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAll() {
    const posts = await this.postService.getAll();
    return posts.map(post => fillDto(ReturnPost, post.toPlainObject()));
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const post = await this.postService.get(id);
    return fillDto(ReturnPost, post.toPlainObject());
  }

  @Post('image')
  async createImagePost(@Body() dto: CreateImagePost) {
    const author = 'author';
    const type = PostType.Image;
    const post =  await this.postService.create(dto, author, type);
    return fillDto(ReturnImagePost, post.toPlainObject());
  }

  @Post('link')
  async createLinkPost(@Body() dto: CreateLinkPost) {
    const author = 'author';
    const type = PostType.Link;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnLinkPost, post.toPlainObject());
  }

  @Post('quote')
  async createQuotePost(@Body() dto: CreateQuotePost) {
    const author = 'author';
    const type = PostType.Quote;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnQuotePost, post.toPlainObject());
  }

  @Post('text')
  async createTextPost(@Body() dto: CreateTextPost) {
    const author = 'author';
    const type = PostType.Text;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnTextPost, post.toPlainObject());
  }

  @Post('video')
  async createVideoPost(@Body() dto: CreateVideoPost) {
    const author = 'author';
    const type = PostType.Video;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnVideoPost, post.toPlainObject());
  }

}
