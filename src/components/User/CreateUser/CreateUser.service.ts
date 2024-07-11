import { Injectable } from '@nestjs/common';
import { User } from 'src/schemas/User.schema';
import { CreateUserDTO } from './CreateUser.dto';

@Injectable()
export class CreateUserService {
  async execute(payload: CreateUserDTO): Promise<User> {
    const newUser: User = payload;

    return newUser;
  }
}
