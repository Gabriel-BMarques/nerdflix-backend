import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

interface ICategory {
  readonly id?: string;

  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Schema()
export class Category implements ICategory {
  @Prop(String)
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
