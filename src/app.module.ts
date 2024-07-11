import { Module } from '@nestjs/common';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { CreateUserModule } from './components/User/CreateUser/CreateUser.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from './config';
import { User, UserSchema } from './schemas/User.schema';
import { Actor, ActorSchema } from './schemas/Actor.schema';
import { Movie, MovieSchema } from './schemas/Movie.schema';
import { Category, CategorySchema } from './schemas/Category.schema';
import { Rating, RatingSchema } from './schemas/Rating.schema';

@Module({
  imports: [
    CreateUserModule,
    MongooseModule.forRoot(config.dbUrl),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }]),
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    MongooseModule.forFeature([{ name: Rating.name, schema: RatingSchema }]),
  ],
  controllers: [],
  providers: [
    JwtService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
