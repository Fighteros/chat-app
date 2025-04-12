import { Module } from '@nestjs/common';
import { FirebaseModule } from './firebase/firebase.module';
import { ConfigModule } from '@nestjs/config';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [FirebaseModule, ConfigModule.forRoot({
    isGlobal: true,
  }), ChatModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
