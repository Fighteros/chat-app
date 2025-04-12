import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FirebaseService {
  private firebaseApp: admin.app.App;

  constructor(private configService: ConfigService) {
    const privateKey = this.configService.get<string>('FIREBASE_PRIVATE_KEY')?.replace(/\\n/g, '\n');
    const clientEmail = this.configService.get<string>('FIREBASE_CLIENT_EMAIL');
    const projectId = this.configService.get<string>('FIREBASE_PROJECT_ID');
    const databaseURL = this.configService.get<string>('FIREBASE_DATABASE_URL');

    this.firebaseApp = admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        privateKey,
        clientEmail,
      }),
      databaseURL,
    });
  }

  getAuth() {
    return this.firebaseApp.auth();
  }

  getFirestore() {
    return admin.firestore();
  }

  getDatabase() {
    return admin.database();
  }
}
