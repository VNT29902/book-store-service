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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireStoreRepository = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const read_your_life_firebase_adminsdk_q8epc_0d8a930bf0_json_1 = __importDefault(require("../../config/read-your-life-firebase-adminsdk-q8epc-0d8a930bf0.json"));
let FireStoreRepository = class FireStoreRepository {
    constructor() {
        console.log('Constructor: Initialize connection to FireStore');
        (0, app_1.initializeApp)({
            credential: (0, app_1.cert)(read_your_life_firebase_adminsdk_q8epc_0d8a930bf0_json_1.default),
        });
        this.connection = (0, firestore_1.getFirestore)();
    }
    connectToFireStore() {
        console.log('Initialize connection to FireStore');
        (0, app_1.initializeApp)({
            credential: (0, app_1.cert)(read_your_life_firebase_adminsdk_q8epc_0d8a930bf0_json_1.default),
        });
        return (0, firestore_1.getFirestore)();
    }
    getConnection() {
        return this.connection;
    }
    async getCollectionByCollectionID(collectionID) {
        console.log('---------------------------------');
        console.log('Get collection', collectionID);
        const dbConnection = this.getConnection();
        const productRef = dbConnection.collection(collectionID);
        const snapshot = await productRef.get();
        const products = [];
        if (snapshot.empty) {
            console.log('No matching documents: ', collectionID);
        }
        else {
            snapshot.forEach((doc) => {
                const data = doc.data();
                data.documentID = doc.id;
                console.log(doc.id, '=>', data);
                products.push(data);
            });
        }
        console.log('List of documents: ', products.length);
        return products;
    }
    async getCollectionByCollectionIDAndDocumentID(collectionID, documentID) {
        console.log('---------------------------------');
        console.log('Get collection = ', collectionID, 'documentID = ', documentID);
        const dbConnection = this.getConnection();
        const productRef = dbConnection.collection(collectionID).doc(documentID);
        const snapshot = await productRef.get();
        if (!snapshot.exists) {
            console.log('No such document!');
        }
        else {
            return snapshot.data;
        }
        return {};
    }
    async createNewDocumentToCollectionID(collectionID, data) {
        const dbConnection = this.getConnection();
        const result = await dbConnection.collection(collectionID).add(data);
        console.log('Create new', collectionID, 'success:', result.id);
        return result.id;
    }
    async updateDocumentByID(collectionID, documentID, data) {
        const dbConnection = this.getConnection();
        const snapshot = await dbConnection
            .collection(collectionID)
            .doc(documentID);
        snapshot.update({ data });
        return documentID;
    }
};
FireStoreRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FireStoreRepository);
exports.FireStoreRepository = FireStoreRepository;
//# sourceMappingURL=firestore.repository.js.map