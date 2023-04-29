import { Firestore } from 'firebase-admin/firestore';
export declare class FireStoreRepository {
    connection: Firestore;
    constructor();
    connectToFireStore(): Firestore;
    getConnection(): Firestore;
    getCollectionByCollectionID<Type>(collectionID: string): Promise<Type[]>;
    getCollectionByCollectionIDAndDocumentID<Type>(collectionID: string, documentID: string): Promise<Type>;
    createNewDocumentToCollectionID<Type>(collectionID: string, data: Type): Promise<string>;
    updateDocumentByID<Type>(collectionID: string, documentID: string, data: Type): Promise<string>;
}
