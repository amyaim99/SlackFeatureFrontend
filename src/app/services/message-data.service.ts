import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

// import { Message } from '_debugger';
import { Message } from '../models/message';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MessageDataService {
  lastId = 0;
  messages: Message[]= [];

  constructor() { }
  // Post
  addMessage(message: Message): MessageDataService {
    if (!message.id) {
      message.id = ++this.lastId;
    }
    this.messages.push(message);
    return this;
  }
  // Get
  getMessageById(id: number): Message {
    return this.messages.filter(message => message.id === id)
      .pop();
  }

  getMessage(): Observable<Message[]> {
    return of(this.messages);
  }

  // Retrive
  getAllMessages(): Message[] {
    return this.messages;
  }
  // Put
  updateMessageById(id: number, values: Object = {}): Message {
    const message = this.getMessageById(id);
    if (!message) {
      return null;
    }
    Object.assign(message, values);
    return message;
  }

  // Delete
  deleteMessageById(id: number): MessageDataService {
    this.messages = this.messages.filter(todo => todo.id !== id);
    return this;
  }

}

