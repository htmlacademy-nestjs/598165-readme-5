import { ApiProperty } from '@nestjs/swagger';
import { PostStatus, PostType, TextPost } from '@project/libs/shared/app/types';
import { Expose } from 'class-transformer';

export class ReturnTextPost implements TextPost {

  @ApiProperty({
    example: 1,
    description: 'Post id',
  })
  @Expose()
  public id: number;

  @ApiProperty({
    example: 'My text post',
    description: 'Post title',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Author id',
    example: 'userid',
  })
  @Expose()
  public author: string;

  @ApiProperty({
    description: 'Created at',
    example: '2021-01-01T00:00:00.000Z',
  })
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    description: 'Published at',
    example: '2021-01-01T00:00:00.000Z',
  })
  @Expose()
  public publishedAt: Date;

  @ApiProperty({
    description: 'Post status',
    example: PostStatus.Draft,
  })
  @Expose()
  public status: PostStatus;

  @ApiProperty({
    description: 'Post tags',
    example: ['tag1', 'tag2'],
  })
  @Expose()
  public tags: string[];

  @ApiProperty({
    description: 'Post type',
    example: PostType.Text,
  })
  @Expose()
  public type: PostType;

  @ApiProperty({
    example: 'My text post content',
    description: 'Post content',
  })
  @Expose()
  public content: string;

  @ApiProperty({
    example: 'My text post teaser',
    description: 'Post teaser',
  })
  @Expose()
  public teaser: string;
}
