import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ActorDocument = HydratedDocument<Actor>;

interface IActor {
  readonly id?: string;

  firstName: string;
  lastName: string;
  age: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Schema()
export class Actor implements IActor {
  @Prop(String)
  firstName: string;

  @Prop(String)
  lastName: string;

  @Prop(String)
  age: string;
}

export const ActorSchema = SchemaFactory.createForClass(Actor);
