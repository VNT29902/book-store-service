import { Injectable } from '@nestjs/common';
import { initializeApp, cert } from 'firebase-admin/app';
import { Firestore, getFirestore } from 'firebase-admin/firestore';
import serviceAccount from '../config/read-your-life-firebase-adminsdk-q8epc-0d8a930bf0.json';
import { ServiceAccount } from 'firebase-admin/lib/credential';

@Injectable()
export class FireStoreService {
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
}
