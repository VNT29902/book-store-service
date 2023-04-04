import { Injectable } from '@nestjs/common';
import { Publisher } from 'src/entity/Publisher';
import { FireStoreRepository } from 'src/repository/common/firestore.repository';

@Injectable()
export class PublisherRepository {
  constructor(private readonly fireStoreService: FireStoreRepository) {
    console.log('Constructor ProductService');
  }

  async getPublishers(): Promise<Publisher[]> {
    return this.fireStoreService.getCollectionByCollectionID<Publisher>(
      'publisher',
    );
  }
}
