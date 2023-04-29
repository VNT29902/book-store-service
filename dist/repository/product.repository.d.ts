import { Product } from './../entity/Product';
import { FireStoreRepository } from 'src/repository/common/firestore.repository';
export declare class ProductRepository {
    private readonly fireStoreService;
    constructor(fireStoreService: FireStoreRepository);
    getProducts(): Promise<Product[]>;
    getProductByID(productID: string): Promise<Product>;
    getProductByPublisherID(publisherID: string): Promise<Product[]>;
    createNewProduct<Product>(data: Product): Promise<string>;
    updateProductByDocumentID<Product>(documentID: string, data: Product): Promise<string>;
}
