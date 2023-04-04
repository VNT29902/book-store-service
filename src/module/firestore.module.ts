import { Module } from '@nestjs/common';
import { FireStoreRepository } from 'src/repository/common/firestore.repository';

@Module({
  imports: [],
  controllers: [],
  providers: [FireStoreRepository],
  exports: [FireStoreRepository],
})
export class FireStoreModule {}
