import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeBannerService {
  constructor() {
    console.log('Constructor ProductService');
  }

  getHomeBanner(): string[] {
    return [
      '../assets/image/slider_1.jpg',
      '../assets/image/slider_2.jpg',
      '../assets/image/slider_3.jpg',
    ];
  }
}
