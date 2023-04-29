import { Product } from 'src/entity/Product';
import { ProductDto } from 'src/model/request/ProductDto';
import { ResponseProduct } from 'src/model/response/ResponseProduct';
import { ProductRepository } from 'src/repository/product.repository';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: ProductRepository);
    getHello(): string;
    getProducts(): Promise<ResponseProduct[]>;
    getProductByID(id: string): Promise<Product>;
    getProductByPublisherID(publisherId: string): Promise<Product[]>;
    createNewProduct(productDto: ProductDto): Promise<string>;
    updateProductByDocumentID(documentID: string, productDto: ProductDto): Promise<string>;
}
