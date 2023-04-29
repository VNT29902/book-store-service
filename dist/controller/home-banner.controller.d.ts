import { HomeBannerService } from './../service/home-banner.service';
export declare class HomeBannerController {
    private readonly homeBannerService;
    constructor(homeBannerService: HomeBannerService);
    getHomeBanner(): Promise<string[]>;
}
