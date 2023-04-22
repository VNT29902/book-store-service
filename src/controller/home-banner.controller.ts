import { HomeBannerService } from './../service/home-banner.service';
import { Controller, Get } from '@nestjs/common';

@Controller('home-banner')
export class HomeBannerController {
  constructor(private readonly homeBannerService: HomeBannerService) {}

  @Get()
  public async getHomeBanner(): Promise<string[]> {
    return await this.homeBannerService.getHomeBanner();
  }
}
