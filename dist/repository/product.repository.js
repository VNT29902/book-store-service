"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const common_1 = require("@nestjs/common");
const firestore_repository_1 = require("./common/firestore.repository");
let ProductRepository = class ProductRepository {
    constructor(fireStoreService) {
        this.fireStoreService = fireStoreService;
        console.log('Constructor ProductService');
    }
    async getProducts() {
        return this.fireStoreService.getCollectionByCollectionID('product');
    }
    async getProductByID(productID) {
        return this.fireStoreService.getCollectionByCollectionIDAndDocumentID('product', productID);
    }
    async getProductByPublisherID(publisherID) {
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
    async createNewProduct(data) {
        return this.fireStoreService.createNewDocumentToCollectionID('product', data);
    }
    async updateProductByDocumentID(documentID, data) {
        return this.fireStoreService.updateDocumentByID('product', documentID, data);
    }
};
ProductRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [firestore_repository_1.FireStoreRepository])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map