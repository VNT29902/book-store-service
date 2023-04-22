import { Injectable } from '@nestjs/common';
import { initializeApp, cert } from 'firebase-admin/app';
import { Firestore, getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../../config/read-your-life-firebase-adminsdk-q8epc-0d8a930bf0.json';
import { ServiceAccount } from 'firebase-admin/lib/credential';

@Injectable()
export class FireStoreRepository {
  connection: Firestore;

  constructor() {
    console.log('Constructor: Initialize connection to FireStore');

    initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
    });

    this.connection = getFirestore();
  }

  connectToFireStore(): Firestore {
    console.log('Initialize connection to FireStore');

    initializeApp({
      credential: cert(serviceAccount as ServiceAccount),
    });

    return getFirestore();
  }

  public getConnection(): Firestore {
    return this.connection;
  }

  public async getCollectionByCollectionID<Type>(
    collectionID: string,
  ): Promise<Type[]> {
    console.log('---------------------------------');
    console.log('Get collection', collectionID);

    const dbConnection = this.getConnection();
    const productRef = dbConnection.collection(collectionID);
    const snapshot = await productRef.get();
    const products = [];

    if (snapshot.empty) {
      console.log('No matching documents: ', collectionID);
    } else {
      snapshot.forEach((doc) => {
        const data = doc.data();
        data.documentID = doc.id;
        console.log(doc.id, '=>', data);
        products.push(data);
      });
    }

    console.log('List of documents: ', products.length);
    return products;
  }

  public async getCollectionByCollectionIDAndDocumentID<Type>(
    collectionID: string,
    documentID: string,
  ): Promise<Type> {
    console.log('---------------------------------');
    console.log('Get collection = ', collectionID, 'documentID = ', documentID);

    const dbConnection = this.getConnection();
    const productRef = dbConnection.collection(collectionID).doc(documentID);
    const snapshot = await productRef.get();

    if (!snapshot.exists) {
      console.log('No such document!');
    } else {
      return snapshot.data as Type;
    }

    return <Type>{};
  }

  public async createNewDocumentToCollectionID<Type>(
    collectionID: string,
    data: Type,
  ): Promise<string> {
    const dbConnection = this.getConnection();

    const result = await dbConnection.collection(collectionID).add(data);

    console.log('Create new', collectionID, 'success:', result.id);
    return result.id;
  }

  public async updateDocumentByID<Type>(
    collectionID: string,
    documentID: string,
    data: Type,
  ): Promise<string> {
    const dbConnection = this.getConnection();

    const snapshot = await dbConnection
      .collection(collectionID)
      .doc(documentID);

    snapshot.update({ data });
    return documentID;
  }
}
