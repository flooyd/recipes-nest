import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class RecipesService {
  constructor(@InjectModel('Recipe') private readonly recipeModel) {}

  async create(recipe) {
    const createdRecipe = new this.recipeModel(recipe);
    return await createdRecipe.save();
  }

  async createTest() {
    const createdRecipe = new this.recipeModel({
      name: 'test',
      userId: 'test',
      ingredients: ['test'],
      instructions: ['test'],
    });
    return await createdRecipe.save();
  }

  async findAll() {
    return await this.recipeModel.find({}).exec();
  }

  async findOne(id) {
    return await this.recipeModel.findById(id).exec();
  }

  async update(id, recipe) {
    return await this.recipeModel.findByIdAndUpdate(id, recipe, { new: true });
  }

  async remove(id) {
    return await this.recipeModel.findByIdAndRemove(id);
  }

  async removeAll() {
    return await this.recipeModel.remove({});
  }
}
