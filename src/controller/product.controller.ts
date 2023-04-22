import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from '../service/product.service';
import { Product } from 'src/entity/Product';
import { ProductDto } from 'src/model/request/ProductDto';
import { ResponseProduct } from 'src/model/response/ResponseProduct';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  public async getProducts(): Promise<ResponseProduct[]> {
    return await this.productService.getProducts();
  }

  @Get(':id')
  public async getProductByID(@Param('id') id: string): Promise<Product> {
    return await this.productService.getProductByID(id);
  }

  @Post()
  public async createNewProduct(
    @Body() productDto: ProductDto,
  ): Promise<string> {
    return await this.productService.createNewProduct(productDto);
  }

  @Put(':id')
  public async updateProduct(
    @Param('id') id: string,
    @Body() productDto: ProductDto,
  ): Promise<string> {
    return await this.productService.updateProductByDocumentID(id, productDto);
  }

  @Delete()
  public async removeProduct(productDto: ProductDto): Promise<string> {
    return await this.productService.createNewProduct(productDto);
  }

  @Get('/publisher/:publisherId')
  public async getProductsByPublisherID(
    @Param('publisherId') publisherId: string,
  ): Promise<Product[]> {
    return await this.productService.getProductByPublisherID(publisherId);
  }
}
