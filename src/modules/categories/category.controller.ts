import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { ResponseType } from 'src/global/globalType';
import { Category } from 'src/models/category.model';
import { CategoryService } from './category.service';
import { CategoryDto } from 'src/dto/categoryDto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  async listCategories(@Res() res: Response): Promise<ResponseType<Category[]>> {
    try {
      return res.json(new ResponseData(await this.categoryService.findAll(), HttpStatus.SUCCESS, HttpMessage.SUCCESS));
    } catch (error) {
      return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR));
    }
  }
  @Get('/:id')
  async getDetail(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(new ResponseData(await this.categoryService.findById(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS));
    } catch (error) {
      return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR));
    }
  }
  @Post()
  async create(@Body() categoryDto: CategoryDto, @Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(new ResponseData(await this.categoryService.create(categoryDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS));
    } catch (error) {
      return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR));
    }
  }
  @Put('/:id')
  async update(@Param('id') id: number, @Body() categoryDto: CategoryDto, @Res() res: Response): Promise<ResponseType<Category>> {
    try {
      return res.json(new ResponseData(await this.categoryService.update(id, categoryDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS));
    } catch (error) {
      return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR));
    }
  }
  @Delete('/:id')
  async delete(@Param('id') id: number, @Res() res: Response): Promise<ResponseType<boolean>> {
    try {
      return res.json(new ResponseData(await this.categoryService.delete(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS));
    } catch (error) {
      return res.json(new ResponseData(null, HttpStatus.ERROR, HttpMessage.ERROR));
    }
  }
}
