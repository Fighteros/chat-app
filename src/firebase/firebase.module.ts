import { Module } from '@nestjs/common';
import { FirebaseService } from './service/firebase.service';

@Module({
  providers: [FirebaseService],
})
export class FirebaseModule {
}
