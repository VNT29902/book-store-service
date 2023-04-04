import { PublisherService } from './../service/publisher.service';
import { PublisherController } from './../controller/publisher.controller';
import { Module } from '@nestjs/common';
import { RepositoryModule } from './repository.module';

@Module({
  imports: [RepositoryModule],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
