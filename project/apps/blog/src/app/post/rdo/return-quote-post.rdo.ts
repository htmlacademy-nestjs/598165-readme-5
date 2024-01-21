import { ApiProperty } from '@nestjs/swagger';
import { PostStatus, PostType, QuotePost } from '@project/libs/shared/app/types';
import { Expose } from 'class-transformer';

export class ReturnQuotePost implements QuotePost {

  @ApiProperty({
    example: 1,
    description: 'Post id',
  })
  @Expose()
  public id: number;

  @ApiProperty({
    example: 'My quote',
    description: 'Quote text',
  })
  @Expose()
  public quote: string;

  @ApiProperty({
    example: 'Diamond Boehm',
    description: 'Cite',
  })
  @Expose()
  public cite: string;

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
    example: 'My quote post',
    description: 'Post title',
  })
  @Expose()
  public title: string;

  @ApiProperty({
    description: 'Post type',
    example: PostType.Quote,
  })
  @Expose()
  public type: PostType;
}
