import { PublisherModule } from './publisher.module';
import { Module } from '@nestjs/common';
import { ProductModule } from './product.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { HomeBannerModule } from './home-banner.module';

@Module({
  imports: [
    PublisherModule,
    ProductModule,
    HomeBannerModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
