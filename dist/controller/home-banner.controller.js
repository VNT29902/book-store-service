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
exports.HomeBannerController = void 0;
const home_banner_service_1 = require("./../service/home-banner.service");
const common_1 = require("@nestjs/common");
let HomeBannerController = class HomeBannerController {
    constructor(homeBannerService) {
        this.homeBannerService = homeBannerService;
    }
    async getHomeBanner() {
        return await this.homeBannerService.getHomeBanner();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeBannerController.prototype, "getHomeBanner", null);
HomeBannerController = __decorate([
    (0, common_1.Controller)('home-banner'),
    __metadata("design:paramtypes", [home_banner_service_1.HomeBannerService])
], HomeBannerController);
exports.HomeBannerController = HomeBannerController;
//# sourceMappingURL=home-banner.controller.js.map