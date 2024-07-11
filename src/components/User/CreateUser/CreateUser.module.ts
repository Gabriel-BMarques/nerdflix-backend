import { Module } from '@nestjs/common';
import { CreateUserService } from './CreateUser.service';
import { CreateUserController } from './CreateUser.controller';

@Module({
  providers: [CreateUserService],
  controllers: [CreateUserController],
})
export class CreateUserModule {}
