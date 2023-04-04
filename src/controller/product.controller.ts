import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { Product } from 'src/entity/Product';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  public async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }

  @Get('/new')
  public async createNewProduct(): Promise<string> {
    return await this.productService.createNewProduct();
  }
}
