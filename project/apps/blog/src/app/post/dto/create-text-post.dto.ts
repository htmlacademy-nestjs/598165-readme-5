import { ApiProperty } from '@nestjs/swagger';

export class CreateTextPost {
  @ApiProperty({
    example: 'My text post',
    description: 'Post title',
  })
  title: string;

  @ApiProperty({
    example: 'Voluptatibus dolores perferendis quia aut',
    description: 'Post teaser',
  })
  teaser: string;

  @ApiProperty({
    example: 'Repudiandae earum assumenda id harum aut ea. Illum aliquam architecto. Cum cum laborum quia impedit. Error voluptatum explicabo numquam. Deserunt recusandae molestiae ullam accusantium.',
    description: 'Post content',
  })
  content: string;

  @ApiProperty({
    example: ['tag1', 'tag2'],
    description: 'Post tags',
  })
  tags?: string[];
}
