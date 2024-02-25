import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateRecipeDto } from './dto/createRecipe.dto';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipeService: RecipesService) {}

  @Post('create')
  async create(@Body() body: CreateRecipeDto) {
    console.log('create', body);
    return await this.recipeService.create(body);
  }

  @Post('createTest')
  async createTest() {
    return await this.recipeService.createTest();
  }

  @Get('all')
  async findAll() {
    return await this.recipeService.findAll();
  }

  @Get('one')
  async findOne(@Body() body: { id: string }) {
    return await this.recipeService.findOne(body.id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.recipeService.remove(id);
  }
}
