import { ProductService } from '../service/product.service';
import { Product } from 'src/entity/Product';
import { ProductDto } from 'src/model/request/ProductDto';
import { ResponseProduct } from 'src/model/response/ResponseProduct';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getProducts(): Promise<ResponseProduct[]>;
    getProductByID(id: string): Promise<Product>;
    createNewProduct(productDto: ProductDto): Promise<string>;
    updateProduct(id: string, productDto: ProductDto): Promise<string>;
    removeProduct(productDto: ProductDto): Promise<string>;
    getProductsByPublisherID(publisherId: string): Promise<Product[]>;
}
