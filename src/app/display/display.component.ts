import { Component, OnInit } from '@angular/core';
import { MessageDataService } from '../services/message-data.service';
import { Message } from '../models/message';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {

  messageArray: Message[] ;
  constructor(private messageDataService: MessageDataService) {
  }

  public ngOnInit() {

    this.messageDataService.getMessage().subscribe((messages: Message[]) => {
      this.messageArray = messages;
    });
  }
}
