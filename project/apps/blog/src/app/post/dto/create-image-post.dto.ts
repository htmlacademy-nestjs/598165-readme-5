import { ApiProperty } from '@nestjs/swagger';

export class CreateImagePost  {
  @ApiProperty({
    example: 'image.png',
    description: 'Image url',
  })
  image: string;

  @ApiProperty({
    example: 'My image post',
    description: 'Post title',
  })
  title: string;

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'Post tags',
  })
  tags?: string[];
}
