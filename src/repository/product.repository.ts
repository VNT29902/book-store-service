import { Product } from './../entity/Product';
import { Injectable } from '@nestjs/common';
import { FireStoreRepository } from 'src/repository/common/firestore.repository';

@Injectable()
export class ProductRepository {
  constructor(private readonly fireStoreService: FireStoreRepository) {
    console.log('Constructor ProductService');
  }

  public async getProducts(): Promise<Product[]> {
    return this.fireStoreService.getCollectionByCollectionID<Product>(
      'product',
    );
  }

  public async createNewProduct<Product>(data: Product): Promise<string> {
    return this.fireStoreService.createNewDocumentToCollectionID(
      'product',
      data,
    );
  }
}
