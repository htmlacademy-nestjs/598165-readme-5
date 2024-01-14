import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoPost {

  @ApiProperty({
    example: 'https://example.com',
    description: 'Video url',
  })
  videoUrl: string;

  @ApiProperty({
    example: 'My video post',
    description: 'Post title',
  })
  title: string;

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'Post tags',
  })
  tags?: string[];
}
