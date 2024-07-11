import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from './User.schema';

export type RatingDocument = HydratedDocument<Rating>;

interface IRating {
  readonly id?: string;

  rate: number;
  description: string;
  userId: User;
  createdAt?: Date;
  updatedAt?: Date;
}

@Schema()
export class Rating implements IRating {
  @Prop(Number)
  rate: number;

  @Prop(String)
  description: string;

  @Prop({ type: mongoose.Schema.ObjectId, ref: 'User' })
  userId: User;
}

export const RatingSchema = SchemaFactory.createForClass(Rating);
