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
exports.ProductService = void 0;
const firestore_1 = require("@google-cloud/firestore");
const common_1 = require("@nestjs/common");
const ProductMapper_1 = require("../mapper/ProductMapper");
const product_repository_1 = require("../repository/product.repository");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
        console.log('Constructor ProductService');
    }
    getHello() {
        return 'Hello NestJs!';
    }
    async getProducts() {
        const products = await this.productRepository.getProducts();
        const response = ProductMapper_1.ProductMapper.fromProductsToResponseProducts(products);
        return response;
    }
    async getProductByID(id) {
        return this.productRepository.getProductByID(id);
    }
    async getProductByPublisherID(publisherId) {
        return this.productRepository.getProductByPublisherID(publisherId);
    }
    async createNewProduct(productDto) {
        console.log('createNewProduct', '=>', productDto);
        const validateDate = (date) => !!date ? new Date(date) : new Date();
        const publishDate = validateDate(productDto.publishDate);
        const createdDate = validateDate(productDto.createdDate);
        const updatedDate = validateDate(productDto.updatedDate);
        const deletedDate = validateDate(productDto.deletedDate);
        const product = {
            name: productDto.name,
            sortingAlias: productDto.sortingAlias,
            price: productDto.price,
            description: productDto.description,
            images: productDto.images,
            size: productDto.size,
            publisher: productDto.publisher,
            publishDate: firestore_1.Timestamp.fromDate(publishDate),
            createdDate: firestore_1.Timestamp.fromDate(createdDate),
            updatedDate: firestore_1.Timestamp.fromDate(updatedDate),
            deletedDate: firestore_1.Timestamp.fromDate(deletedDate),
            isDeleted: productDto.isDeleted,
        };
        return this.productRepository.createNewProduct(product);
    }
    async updateProductByDocumentID(documentID, productDto) {
        const mockData = {
            name: 'TÔI LÀ AI VÀ NẾU VẬY THÌ BAO NHIÊU',
            publisher: 'pushlisher_id_ref',
            images: [
                'http://static.nhanam.com.vn/thumb/0x320/crop/Books/Images/2020/3/4/BIBUQ5Q4.jpg',
            ],
            size: '14 x 20,5',
            price: 240000,
            description: '"Khi đọc cuốn sách này là lúc bạn đã dấn bước đầu tiên trên con đường dẫn đến hạnh phúc." - Elke Heidenreich',
            sortingAlias: 'HOW MONEY WORKS - HIEERU HEEST VEEF TIEEFN',
            publishDate: firestore_1.Timestamp.now(),
            createdDate: firestore_1.Timestamp.now(),
            updatedDate: firestore_1.Timestamp.now(),
            deletedDate: firestore_1.Timestamp.now(),
            isDeleted: false,
        };
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
        const product = {
            name: productDto.name,
            sortingAlias: productDto.sortingAlias,
            price: productDto.price,
            description: productDto.description,
            images: productDto.images,
            size: productDto.size,
            publisher: productDto.publisher,
            publishDate: firestore_1.Timestamp.fromDate(publishDate),
            createdDate: firestore_1.Timestamp.fromDate(createdDate),
            updatedDate: firestore_1.Timestamp.fromDate(updatedDate),
            deletedDate: firestore_1.Timestamp.fromDate(deletedDate),
            isDeleted: productDto.isDeleted,
        };
        return this.productRepository.updateProductByDocumentID(documentID, product);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map