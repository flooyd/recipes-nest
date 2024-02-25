import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsArray()
  ingredients: string[];

  @IsOptional()
  @IsArray()
  instructions: string[];
}
