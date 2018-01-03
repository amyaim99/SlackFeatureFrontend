import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MessageDataService } from './services/message-data.service';
import { DisplayComponent } from './display/display.component';
import { CommonModule } from '@angular/common';
import {HttpModule} from '@angular/http';
import { DisplayQuoteComponent } from './display-quote/display-quote.component';
import { QuoteServiceService } from './services/quote-service.service';
import { DisplayTechNewsComponent } from './display-tech-news/display-tech-news.component';
import { TechNewsService } from './services/tech-news.service';
import { JokesComponent } from './jokes/jokes.component';
import { JokeService } from './services/joke.service';



@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    DisplayComponent,
    DisplayQuoteComponent,
    DisplayTechNewsComponent,
    JokesComponent,
   
  ],
  imports: [
    NgbModule.forRoot(), BrowserModule, FormsModule, CommonModule, HttpModule
  ],
  providers: [MessageDataService, 
    QuoteServiceService, TechNewsService, JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
