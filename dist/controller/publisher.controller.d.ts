import { Publisher } from './../model/response/Publisher';
import { PublisherService } from 'src/service/publisher.service';
export declare class PublisherController {
    private readonly appService;
    constructor(appService: PublisherService);
    getPublisher(): Promise<Publisher[]>;
}
