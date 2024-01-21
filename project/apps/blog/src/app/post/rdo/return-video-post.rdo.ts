import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PostStatus, PostType, VideoPost } from '@project/libs/shared/app/types';

export class ReturnVideoPost implements VideoPost {

  @ApiProperty({
    example: 'userid',
    description: 'Author id',
  })
  @Expose()
  public author: string;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    description: 'Created at',
  })
  @Expose()
  public createdAt: Date;

  @ApiProperty({
    example: 1,
    description: 'Post id',
  })
  @Expose()
  public id: number;

  @ApiProperty({
    example: '2021-01-01T00:00:00.000Z',
    description: 'Published at',
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
    example: 'My video post',
    description: 'Post title',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    example: PostType.Video,
    description: 'Post type',
  })
  @Expose()
  public type: PostType;

  @ApiProperty({
    example: 'https://example.com/video.mp4',
    description: 'Video url',
  })
  @Expose()
  public videoUrl: string;
}
