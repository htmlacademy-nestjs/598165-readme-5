import { ConflictException, Injectable } from '@nestjs/common';

import { AuthError } from '../user/user.constants';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';
import { UserEntity } from '../user/user.entity';
import { UserRepository } from '../user.repository';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
  ) {}

  public async register(dto: CreateUserDto) {
    const {email, name, password, avatar} = dto;
    const user = {
      email,
      name,
      passwordHash: '',
      avatar
    }
    const existedUser = await this.userRepository
      .findByEmail(email);
    if (existedUser) {
      throw new ConflictException(AuthError.USER_EXISTS);
    }
    const entity = await new UserEntity(user).setPassword(password);
    return this.userRepository.save(entity);
  }

  public async verify(dto: LoginDto) {
    const {email, password} = dto;
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new ConflictException(AuthError.NOT_FOUND);
    }

    const entity = new UserEntity(user);
    const isPasswordValid = await entity.comparePassword(password);

    if (!isPasswordValid) {
      throw new ConflictException(AuthError.WRONG_PASSWORD);
    }

    return entity.toPlain()
  }
  public async get(id: string) {
    return  this.userRepository.find(id);
  }

}
