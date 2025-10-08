import { Body, Controller,Get, HttpCode, Param, Post, Query } from "@nestjs/common";
import { CreateCatDTO } from "./dto/cat.dto";
import { CatService } from "./cats.service";

@Controller('cats')
export class CatController {

  constructor(private catService: CatService) {}

  @Get(':id')
  findSingle(@Param('id') id: number): string {
    return `This is the id passed to me #${id}`
  }

  @Get('all')
  getAllCats(): CreateCatDTO[]{
    return this.catService.getAll();
  }

  @Get()
   findWithNameAndAge(@Query('name') name:string, @Query('age') age:number): string {
    return `The name is ${name} and age is ${age}`;
  }

  @Post()
  @HttpCode(200)
  createCat(@Body() body:CreateCatDTO): string {
    this.catService.create(body);
    return 'Created a Cat entry';
  }
}