import { PublisherModule } from './publisher.module';
import { Module } from '@nestjs/common';
import { ProductModule } from './product.module';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';

@Module({
  imports: [
    PublisherModule,
    ProductModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
