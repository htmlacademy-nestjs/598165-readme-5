import { ApiProperty } from '@nestjs/swagger';
import { User } from '@project/libs/shared/app/types';

export class CreateUserDto implements User {
  @ApiProperty({
    description: 'Email of the user',
    type: String,
    example: 'example@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Name of the user',
    type: String,
    example: 'Otto Rau',
  })
  name: string;

  @ApiProperty({
    description: 'Password of the user',
    type: String,
    example: '7oanrxbf49e',
  })
  password: string;

  @ApiProperty({
    description: 'Avatar of the user',
    type: String,
    example: 'avatar.png',
  })
  avatar?: string;
}
