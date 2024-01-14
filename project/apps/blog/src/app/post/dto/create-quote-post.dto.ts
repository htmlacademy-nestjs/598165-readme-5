import { ApiProperty } from '@nestjs/swagger';

export class CreateQuotePost {
  @ApiProperty({
    example: 'Nulla commodi laudantium et voluptatem',
    description: 'Quote',
  })
  quote: string;

  @ApiProperty({
    example: 'Mrs. Meg Williams',
    description: 'Cite',
  })
  cite: string;

  @ApiProperty({
    example: 'My quote post',
    description: 'Post title',
  })
  title: string;

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'Post tags',
  })
  tags?: string[];
}
