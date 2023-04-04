import { FireStoreService } from 'src/service/firestore.service';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/model/response/Product';

@Injectable()
export class ProductService {
  constructor(private readonly fireStoreService: FireStoreService) {
    console.log('Constructor ProductService');
  }

  getHello(): string {
    return 'Hello NestJs!';
  }

  async getProducts(): Promise<Product[]> {
    const connection = this.fireStoreService.getConnection();
    const productRef = connection.collection('product');
    const snapshot = await productRef.get();
    const products = [];

    if (snapshot.empty) {
      console.log('No matching documents');
    } else {
      snapshot.forEach((doc) => {
        const data = doc.data() as Product;
        console.log(doc.id, '=>', data);
        products.push(data);
      });
    }

    return products;
  }
}
