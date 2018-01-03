import { Component } from '@angular/core';
import { MessageDataService } from './services/message-data.service';
import { Message } from './models/message';
import { QuoteServiceService } from './services/quote-service.service';
import { TechNewsService } from './services/tech-news.service';
import { JokeService } from './services/joke.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageDataService, 
    QuoteServiceService, TechNewsService, JokeService],
})
export class AppComponent {

constructor() { }

}
