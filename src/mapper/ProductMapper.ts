import { Timestamp } from 'firebase-admin/firestore';
import { Product } from 'src/entity/Product';
import { ResponseProduct } from 'src/model/response/ResponseProduct';

export class ProductMapper {
  static fromProductToResponseProduct(product: Product): ResponseProduct {
    console.log('fromProductToResponseProduct', '=>', product.documentID);

    const getDateFromTimestamp = (timestamp: Timestamp) => {
      console.log('seconds: ' + timestamp.seconds);
      console.log('nanoseconds: ' + timestamp.nanoseconds);

      return new Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
    };

    const result: ResponseProduct = {
      documentID: product.documentID,
      name: product.name,
      sortingAlias: product.sortingAlias,
      price: product.price,
      description: product.description,
      images: product.images,
      size: product.size,
      publisher: product.publisher,
      publishDate: getDateFromTimestamp(product.publishDate),
      createdDate: getDateFromTimestamp(product.createdDate),
      updatedDate: getDateFromTimestamp(product.updatedDate),
      deletedDate: getDateFromTimestamp(product.deletedDate),
      isDeleted: product.isDeleted,
    };

    return result;
  }

  static fromProductsToResponseProducts(
    products: Product[],
  ): ResponseProduct[] {
    const result: ResponseProduct[] = [];

    products.forEach((product) => {
      const responseProduct =
        ProductMapper.fromProductToResponseProduct(product);
      result.push(responseProduct);
    });

    return result;
  }
}
