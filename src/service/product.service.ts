import { Timestamp } from '@google-cloud/firestore';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/entity/Product';
import { ProductRepository } from 'src/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {
    console.log('Constructor ProductService');
  }

  getHello(): string {
    return 'Hello NestJs!';
  }

  public async getProducts(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }

  public async createNewProduct(): Promise<string> {
    const mockData: Product = {
      name: 'TÔI LÀ AI VÀ NẾU VẬY THÌ BAO NHIÊU',
      publisher: 'pushlisher_id_ref',
      images: [
        'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/3/4/BIBUQ5Q4.jpg',
      ],
      size: '14 x 20,5',
      price: 240000,
      description:
        '"Khi đọc cuốn sách này là lúc bạn đã dấn bước đầu tiên trên con đường dẫn đến hạnh phúc." - Elke Heidenreich',
      sortingAlias: 'HOW MONEY WORKS - HIEERU HEEST VEEF TIEEFN',
      publishDate: Timestamp.now(),
      createdDate: Timestamp.now(),
      updatedDate: Timestamp.now(),
      deletedDate: Timestamp.now(),
      isDeleted: false,
    };

    return this.productRepository.createNewProduct(mockData);
  }
}
