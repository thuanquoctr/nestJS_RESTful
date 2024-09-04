import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, categoryId: 1, productName: 'Tran Thuan', price: 20000 },
    { id: 2, categoryId: 2, productName: 'Cao Tri', price: 30000 },
    { id: 3, categoryId: 3, productName: 'Tri Dung', price: 10000 },
  ];
  getAllProducts(): Product[] {
    return this.products;
  }
  getDetailProduct(id: number): Product {
    return this.products.find((it) => it.id == Number(id));
  }
  createProduct(productDto: ProductDto): ProductDto {
    const product: Product = {
      id: Math.random(),
      ...productDto,
    };
    this.products.push(product);
    return product;
  }
  updateProduct(): string {
    return 'Update Product';
  }
  deleteProduct(): string {
    return 'Delete Product';
  }
}
