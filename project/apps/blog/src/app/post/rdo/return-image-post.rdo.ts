import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

import { PostStatus, PostType, } from '@project/libs/shared/app/types';

export class ReturnImagePost  {

  @ApiProperty({
    example: 1,
    description: 'Post id',
  })
  @Expose()
  public id: number;

  @ApiProperty({
    example: 'image.png',
    description: 'Image url',
  })
  @Expose()
  public image: string;

  @ApiProperty({
    example: 'userid',
    description: 'Author id',
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
    example: ['tag1', 'tag2'],
    description: 'Post tags',
  })
  @Expose()
  public tags: string[];

  @ApiProperty({
    example: 'My image post',
    description: 'Post title',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Post type',
    example: PostType.Image,
  })
  @Expose()
  public type: PostType;
}
