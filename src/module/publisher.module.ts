import { PublisherService } from './../service/publisher.service';
import { PublisherController } from './../controller/publisher.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [PublisherController],
  providers: [PublisherService],
})
export class PublisherModule {}
