import { Module } from '@nestjs/common';
import { ChatController } from './controller/chat/chat.controller';
import { ChatService } from './service/chat/chat.service';
import { FirebaseService } from '../firebase/service/firebase.service';

@Module({
  controllers: [ChatController],
  providers: [ChatService, FirebaseService],
})
export class ChatModule {
}
