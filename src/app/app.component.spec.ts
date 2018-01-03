import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageComponent  } from './message/message.component';
import { DisplayComponent  } from './display/display.component';
import { FormsModule } from '@angular/forms';
import { Message } from './models/message';
import { MessageDataService } from './services/message-data.service';
import {HttpModule} from '@angular/http';
import { DisplayQuoteComponent } from './display-quote/display-quote.component';
import { DisplayTechNewsComponent } from './display-tech-news/display-tech-news.component';
import { JokesComponent } from './jokes/jokes.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
      ],
      declarations: [
        AppComponent,
        MessageComponent,
        DisplayComponent,
        DisplayQuoteComponent,
        DisplayTechNewsComponent,
        JokesComponent,
      ],
      providers: [MessageDataService],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Services');
  }));
});
