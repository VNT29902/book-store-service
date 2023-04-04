import { Publisher } from './../model/response/Publisher';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { PublisherService } from 'src/service/publisher.service';

@Controller('publisher')
export class PublisherController {
  constructor(private readonly appService: PublisherService) {}

  @Get()
  getPublisher(): Publisher[] {
    return this.appService.getPublishers();
  }
}
