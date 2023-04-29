"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
const firestore_1 = require("firebase-admin/firestore");
class ProductMapper {
    static fromProductToResponseProduct(product) {
        console.log('fromProductToResponseProduct', '=>', product.documentID);
        const getDateFromTimestamp = (timestamp) => {
            console.log('seconds: ' + timestamp.seconds);
            console.log('nanoseconds: ' + timestamp.nanoseconds);
            return new firestore_1.Timestamp(timestamp.seconds, timestamp.nanoseconds).toDate();
        };
        const result = {
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
    static fromProductsToResponseProducts(products) {
        const result = [];
        products.forEach((product) => {
            const responseProduct = ProductMapper.fromProductToResponseProduct(product);
            result.push(responseProduct);
        });
        return result;
    }
}
exports.ProductMapper = ProductMapper;
//# sourceMappingURL=ProductMapper.js.map