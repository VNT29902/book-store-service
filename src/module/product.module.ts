import { Module } from '@nestjs/common';
import { ProductController } from '../controller/product.controller';
import { ProductService } from '../service/product.service';
import { RepositoryModule } from './repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
