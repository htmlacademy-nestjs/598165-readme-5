import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { LinkPost, PostStatus, PostType } from '@project/libs/shared/app/types';

export class ReturnLinkPost implements LinkPost {

  @ApiProperty({
    example: 1,
    description: 'Post id',
  })
  @Expose()
  public id: number;

  @ApiProperty({
    example: 'https://example.com',
    description: 'Link url',
  })
  @Expose()
  public link: string;

  @ApiProperty({
    example: 'My link post description',
    description: 'Post description',
  })
  @Expose()
  public description?: string;

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
    example: ['tag1', 'tag2'],
    description: 'Post tags',
  })
  @Expose()
  public tags: string[];

  @ApiProperty({
    example: 'My link post',
    description: 'Post title',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    example: PostType.Link,
    description: 'Post type',
  })
  @Expose()
  public type: PostType;
}
