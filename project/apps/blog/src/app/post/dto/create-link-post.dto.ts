import { ApiProperty } from '@nestjs/swagger';

export class CreateLinkPost {
  @ApiProperty({
    example: 'https://example.com',
    description: 'Link url',
  })
  link: string;

  @ApiProperty({
    example: 'My link post',
    description: 'Post description',
  })
  description?: string;

  @ApiProperty({
    example: 'My link post',
    description: 'Post title',
  })
  title: string;

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'Post tags',
  })
  tags?: string[];
}
