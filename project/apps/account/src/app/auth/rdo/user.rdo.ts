import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {

  @Expose()
  @ApiProperty({
    description: 'ID of the user',
    type: String,
    example: '1',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Email of the user',
    type: String,
    example: 'example@example.com',
  })
  public email: string;

  @Expose()
  @ApiProperty({
    description: 'Name of the user',
    type: String,
    example: 'Otto Rau',
  })
  public name: string;

  @Expose()
  @ApiProperty({
    description: 'Avatar of the user',
    type: String,
    example: 'avatar.png',
  })
  avatar?: string;
}
