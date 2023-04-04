import { Module } from '@nestjs/common';
import { FireStoreModule } from './firestore.module';
import { ProductRepository } from 'src/repository/product.repository';
import { PublisherRepository } from 'src/repository/publisher.repository';

@Module({
  imports: [FireStoreModule],
  controllers: [],
  providers: [ProductRepository, PublisherRepository],
  exports: [ProductRepository, PublisherRepository],
})
export class RepositoryModule {}
