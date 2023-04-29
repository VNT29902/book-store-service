import { Publisher } from 'src/entity/Publisher';
import { FireStoreRepository } from 'src/repository/common/firestore.repository';
export declare class PublisherRepository {
    private readonly fireStoreService;
    constructor(fireStoreService: FireStoreRepository);
    getPublishers(): Promise<Publisher[]>;
}
