import { Publisher } from './../model/response/Publisher';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PublisherService {
  getPublishers(): Publisher[] {
    return [
      {
        name: 'The gioi',
        phone: '0135224121',
        email: 'the.gioi@gmail.com',
        address: 'TP.HCM',
      },
    ];
  }
}
