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
exports.FireStoreService = void 0;
const common_1 = require("@nestjs/common");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const read_your_life_firebase_adminsdk_q8epc_0d8a930bf0_json_1 = __importDefault(require("../config/read-your-life-firebase-adminsdk-q8epc-0d8a930bf0.json"));
let FireStoreService = class FireStoreService {
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
};
FireStoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FireStoreService);
exports.FireStoreService = FireStoreService;
//# sourceMappingURL=firestore.service.js.map