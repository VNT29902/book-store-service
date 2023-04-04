import { Controller, Get } from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { Product } from 'src/model/response/Product';

@Controller('product')
export class ProductController {
  constructor(private readonly appService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.appService.getProducts();
  }
}
