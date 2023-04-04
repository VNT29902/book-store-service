import { Module } from '@nestjs/common';
import { ProductController } from '../controller/product.controller';
import { ProductService } from '../service/product.service';
import { FireStoreModule } from './firestore.module';

@Module({
  imports: [FireStoreModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
