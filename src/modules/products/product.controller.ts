import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ResponseData } from 'src/global/globalClass';
import { HttpMessage, HttpStatus } from 'src/global/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  getAllProducts(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(this.productService.getAllProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<Product[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
  @Get('/:id')
  getDetailProduct(@Param('id', new ParseIntPipe()) id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(this.productService.getDetailProduct(id), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
  @Post()
  createProduct(@Body() productDto: ProductDto): ResponseData<Product> {
    try {
      return new ResponseData<Product>(this.productService.createProduct(productDto), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<Product>(null, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }
  @Put('/:id')
  updateProduct(): string {
    return this.productService.updateProduct();
  }
  @Delete('/:id')
  deleteProduct(): string {
    return this.productService.deleteProduct();
  }
}
