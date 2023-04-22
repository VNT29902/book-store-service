import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository.module';
import { HomeBannerService } from 'src/service/home-banner.service';
import { HomeBannerController } from 'src/controller/home-banner.controller';

@Module({
  imports: [RepositoryModule],
  controllers: [HomeBannerController],
  providers: [HomeBannerService],
})
export class HomeBannerModule {}
