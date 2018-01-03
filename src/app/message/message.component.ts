import { Component, OnInit } from '@angular/core';
import { MessageDataService } from '../services/message-data.service';
import { Message } from '../models/message';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent  {

  newMessage: Message = new Message();
  constructor(private messageDataService: MessageDataService) {
  }
addMessage() {
this.messageDataService.addMessage(this.newMessage);
this.newMessage = new Message();
console.log(this.messageDataService.messages[0]);

}
getMessageById(id: number): Message {
  return this.messageDataService.getMessageById(id);
}

}

