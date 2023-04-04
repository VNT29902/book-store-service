import { Module } from '@nestjs/common';
import { FireStoreService } from 'src/service/firestore.service';

@Module({
  imports: [],
  controllers: [],
  // providers: [],
  providers: [FireStoreService],
  exports: [FireStoreService],
})
export class FireStoreModule {}
