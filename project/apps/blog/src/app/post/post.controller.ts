import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostType } from '@project/libs/shared/app/types';

import { fillDto } from '@project/shared/helpers';
import { PostService } from './post.service';
import { CreateImagePost, CreateLinkPost, CreateQuotePost, CreateTextPost, CreateVideoPost } from './dto';
import { ReturnImagePost, ReturnLinkPost, ReturnQuotePost, ReturnTextPost, ReturnVideoPost } from './rdo';
import { ReturnPost } from './return-post.rdo';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {
  }

  @ApiResponse({
    type: [ReturnPost],
    status: HttpStatus.OK,
    description: 'Get all posts',
  })
  @Get()
  async getAll() {
    const posts = await this.postService.getAll();
    return posts.map(post => fillDto(ReturnPost, post.toPlainObject()));
  }

  @ApiResponse({
    type: ReturnPost,
    status: HttpStatus.OK,
    description: 'Get post by id',
  })
  @Get(':id')
  async get(@Param('id') id: string) {
    const post = await this.postService.get(id);
    return fillDto(ReturnPost, post.toPlainObject());
  }

  @ApiResponse({
    type: ReturnImagePost,
    status: HttpStatus.CREATED,
    description: 'Create image post',
  })
  @Post('image')
  async createImagePost(@Body() dto: CreateImagePost) {
    const author = 'author';
    const type = PostType.Image;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnImagePost, post.toPlainObject());
  }

  @ApiResponse({
    type: ReturnLinkPost,
    status: HttpStatus.CREATED,
    description: 'Create link post',
  })
  @Post('link')
  async createLinkPost(@Body() dto: CreateLinkPost) {
    const author = 'author';
    const type = PostType.Link;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnLinkPost, post.toPlainObject());
  }

  @ApiResponse({
    type: ReturnQuotePost,
    status: HttpStatus.CREATED,
    description: 'Create quote post',
  })
  @Post('quote')
  async createQuotePost(@Body() dto: CreateQuotePost) {
    const author = 'author';
    const type = PostType.Quote;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnQuotePost, post.toPlainObject());
  }

  @ApiResponse({
    type: ReturnTextPost,
    status: HttpStatus.CREATED,
    description: 'Create text post',
  })
  @Post('text')
  async createTextPost(@Body() dto: CreateTextPost) {
    const author = 'author';
    const type = PostType.Text;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnTextPost, post.toPlainObject());
  }

  @ApiResponse({
    type: ReturnVideoPost,
    status: HttpStatus.CREATED,
    description: 'Create video post',
  })
  @Post('video')
  async createVideoPost(@Body() dto: CreateVideoPost) {
    const author = 'author';
    const type = PostType.Video;
    const post = await this.postService.create(dto, author, type);
    return fillDto(ReturnVideoPost, post.toPlainObject());
  }

}
