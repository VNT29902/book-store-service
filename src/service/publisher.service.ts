import { PublisherRepository } from 'src/repository/publisher.repository';
import { Publisher } from './../model/response/Publisher';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PublisherService {
  constructor(private readonly publisherRepository: PublisherRepository) {
    console.log('Constructor ProductService');
  }

  async getPublishers(): Promise<Publisher[]> {
    return this.publisherRepository.getPublishers();
  }
}
