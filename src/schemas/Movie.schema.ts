import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Rating } from './Rating.schema';
import { Actor } from './Actor.schema';
import { Category } from './Category.schema';

export type MovieDocument = HydratedDocument<Movie>;

interface IMovie {
  readonly id?: string;

  title: string;
  description: string;
  year: string;
  actors: Actor[];
  category: Category;
  ratings: Rating[];
  classification: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Schema()
export class Movie implements IMovie {
  @Prop(String)
  title: string;

  @Prop(String)
  description: string;

  @Prop(String)
  year: string;

  @Prop({ type: [mongoose.Schema.ObjectId], ref: 'Actor' })
  actors: Actor[];

  @Prop({ type: mongoose.Schema.ObjectId, ref: 'Category' })
  category: Category;

  @Prop({ type: [mongoose.Schema.ObjectId], ref: 'Rating' })
  ratings: Rating[];

  @Prop(Number)
  classification: number;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
