import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from '../../../auth/firebase-auth.guard';
import { ChatService } from '../../service/chat/chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @UseGuards(FirebaseAuthGuard)
  @Post()
  async sendMessage(@Req() req, @Body() body) {
    return await this.chatService.sendMessage(req, body);
  }
}
