import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
  @Prop()
  name: string;

  @Prop()
  userId: string;

  @Prop()
  ingredients: string[];

  @Prop()
  instructions: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

//index on name and userId
RecipeSchema.index({ name: 1, userId: 1 }, { unique: true });
