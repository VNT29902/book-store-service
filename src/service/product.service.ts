import { Timestamp } from '@google-cloud/firestore';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/entity/Product';
import { ProductMapper } from 'src/mapper/ProductMapper';
import { ProductDto } from 'src/model/request/ProductDto';
import { ResponseProduct } from 'src/model/response/ResponseProduct';
import { ProductRepository } from 'src/repository/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {
    console.log('Constructor ProductService');
  }

  getHello(): string {
    return 'Hello NestJs!';
  }

  public async getProducts(): Promise<ResponseProduct[]> {
    const products = await this.productRepository.getProducts();
    const response = ProductMapper.fromProductsToResponseProducts(products);

    return response;
  }

  public async getProductByID(id: string): Promise<Product> {
    return this.productRepository.getProductByID(id);
  }

  public async getProductByPublisherID(
    publisherId: string,
  ): Promise<Product[]> {
    return this.productRepository.getProductByPublisherID(publisherId);
  }

  public async createNewProduct(productDto: ProductDto): Promise<string> {
    console.log('createNewProduct', '=>', productDto);

    // should be utilize
    const validateDate = (date: string) =>
      !!date ? new Date(date) : new Date();

    const publishDate = validateDate(productDto.publishDate);
    const createdDate = validateDate(productDto.createdDate);
    const updatedDate = validateDate(productDto.updatedDate);
    const deletedDate = validateDate(productDto.deletedDate);

    const product: Product = {
      name: productDto.name,
      sortingAlias: productDto.sortingAlias,
      price: productDto.price,
      description: productDto.description,
      images: productDto.images,
      size: productDto.size,
      publisher: productDto.publisher,
      publishDate: Timestamp.fromDate(publishDate),
      createdDate: Timestamp.fromDate(createdDate),
      updatedDate: Timestamp.fromDate(updatedDate),
      deletedDate: Timestamp.fromDate(deletedDate),
      isDeleted: productDto.isDeleted,
    };

    return this.productRepository.createNewProduct(product);
  }

  // updateProductByDocumentID
  public async updateProductByDocumentID(
    documentID: string,
    productDto: ProductDto,
  ): Promise<string> {
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

    // should be utilize
    const publishDate = !!productDto.publishDate
      ? new Date(productDto.publishDate)
      : new Date();
    const createdDate = !!productDto.publishDate
      ? new Date(productDto.createdDate)
      : new Date();
    const updatedDate = !!productDto.publishDate
      ? new Date(productDto.updatedDate)
      : new Date();
    const deletedDate = !!productDto.publishDate
      ? new Date(productDto.deletedDate)
      : new Date();
    const product: Product = {
      name: productDto.name,
      sortingAlias: productDto.sortingAlias,
      price: productDto.price,
      description: productDto.description,
      images: productDto.images,
      size: productDto.size,
      publisher: productDto.publisher,
      publishDate: Timestamp.fromDate(publishDate),
      createdDate: Timestamp.fromDate(createdDate),
      updatedDate: Timestamp.fromDate(updatedDate),
      deletedDate: Timestamp.fromDate(deletedDate),
      isDeleted: productDto.isDeleted,
    };

    return this.productRepository.updateProductByDocumentID(
      documentID,
      product,
    );
  }
}
