"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const publisher_module_1 = require("./publisher.module");
const common_1 = require("@nestjs/common");
const product_module_1 = require("./product.module");
const config_1 = require("@nestjs/config");
const configuration_1 = __importDefault(require("../config/configuration"));
const home_banner_module_1 = require("./home-banner.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            publisher_module_1.PublisherModule,
            product_module_1.ProductModule,
            home_banner_module_1.HomeBannerModule,
            config_1.ConfigModule.forRoot({
                load: [configuration_1.default],
            }),
        ],
        providers: [],
        controllers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map