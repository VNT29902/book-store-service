"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeBannerModule = void 0;
const common_1 = require("@nestjs/common");
const repository_module_1 = require("./repository.module");
const home_banner_service_1 = require("../service/home-banner.service");
const home_banner_controller_1 = require("../controller/home-banner.controller");
let HomeBannerModule = class HomeBannerModule {
};
HomeBannerModule = __decorate([
    (0, common_1.Module)({
        imports: [repository_module_1.RepositoryModule],
        controllers: [home_banner_controller_1.HomeBannerController],
        providers: [home_banner_service_1.HomeBannerService],
    })
], HomeBannerModule);
exports.HomeBannerModule = HomeBannerModule;
//# sourceMappingURL=home-banner.module.js.map