import { Firestore } from 'firebase-admin/firestore';
export declare class FireStoreService {
    connection: Firestore;
    constructor();
    connectToFireStore(): Firestore;
    getConnection(): Firestore;
}
