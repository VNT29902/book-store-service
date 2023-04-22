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

  public async getProductByID(productID: string): Promise<Product> {
    return this.fireStoreService.getCollectionByCollectionIDAndDocumentID<Product>(
      'product',
      productID,
    );
  }

  public async getProductByPublisherID(
    publisherID: string,
  ): Promise<Product[]> {
    console.log('Method: getProductByPublisherID');
    const dbConnection = this.fireStoreService
      .getConnection()
      .collection('product');
    const products = [];
    const snapshot = await dbConnection
      .where('publisher', '==', publisherID)
      .get();

    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }

    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
      products.push(doc.data());
    });

    return products;
  }

  public async createNewProduct<Product>(data: Product): Promise<string> {
    return this.fireStoreService.createNewDocumentToCollectionID(
      'product',
      data,
    );
  }

  public async updateProductByDocumentID<Product>(
    documentID: string,
    data: Product,
  ): Promise<string> {
    return this.fireStoreService.updateDocumentByID(
      'product',
      documentID,
      data,
    );
  }
}
