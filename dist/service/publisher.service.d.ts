import { PublisherRepository } from 'src/repository/publisher.repository';
import { Publisher } from './../model/response/Publisher';
export declare class PublisherService {
    private readonly publisherRepository;
    constructor(publisherRepository: PublisherRepository);
    getPublishers(): Promise<Publisher[]>;
}
