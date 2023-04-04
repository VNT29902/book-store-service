import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { ConfigService } from '@nestjs/config';
import { Product } from './model/response/Product';
import { FireStoreService } from './service/firestore.service';
import { Publisher } from './model/response/Publisher';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get<string>('port');

  const db = app.get(FireStoreService).getConnection();

  const productRef = db.collection('product');
  const snapshot = await productRef.get();
  if (snapshot.empty) {
    console.log('No matching documents');
  } else {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data() as Product);
    });
  }

  const publisherRef = db.collection('publisher');
  const snapshotRef = await publisherRef.get();
  if (snapshotRef.empty) {
    console.log('No matching documents');
  } else {
    snapshotRef.forEach((doc) => {
      console.log(doc.id, '=>', doc.data() as Publisher);
    });
  }

  await app.listen(port);
}
bootstrap();
