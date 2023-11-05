import { Controller, Get, Query } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}
  // @Get('invoke-msg')
  // getInvokeMsg(@Query('msg') msg: string) {
  //   this.messageService.sendMessage(msg);
  //   return msg;
  // }

  @Get('invoke-email')
  getInvokeEmail(@Query('email') email: string) {
    this.messageService.addToEmailQueue(email);
    // this.messageService.addToEmailQueue(msg);
    return email;
  }
  @Get('invoke-msg')
  getInvokeMsg(@Query('msg') msg: string) {
    this.messageService.addToMessageQueue(msg);
    // this.messageService.addToEmailQueue(msg);
    return msg;
  }
}
