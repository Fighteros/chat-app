import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../../../firebase/service/firebase.service';

@Injectable()
export class ChatService {

  constructor(private readonly firebaseService: FirebaseService) {
  }

  async sendMessage(req, body) {
    const { to, message } = body;
    const db = await this.firebaseService.getFirestore();

    await db.collection('chats').add({
      from: req.user.uid,
      to,
      message,
      timestamp: new Date().toISOString(),
    });
    return { status: 'message sent' };
  }

}
