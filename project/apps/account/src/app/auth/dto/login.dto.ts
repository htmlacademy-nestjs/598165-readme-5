import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    description: 'Email of the user',
    type: String,
    example: 'example@example.com',
  })
  email: string;

  @ApiProperty({
    description: 'Password of the user',
    type: String,
    example: '7oanrxbf49e',
  })
  password: string;
}
