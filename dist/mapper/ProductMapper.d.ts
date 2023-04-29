import { Product } from 'src/entity/Product';
import { ResponseProduct } from 'src/model/response/ResponseProduct';
export declare class ProductMapper {
    static fromProductToResponseProduct(product: Product): ResponseProduct;
    static fromProductsToResponseProducts(products: Product[]): ResponseProduct[];
}
