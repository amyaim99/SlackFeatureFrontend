import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { DisplayQuoteComponent } from './display-quote.component';
import { QuoteServiceService } from '../services/quote-service.service';

describe('DisplayQuoteComponent', () => {
  let component: DisplayQuoteComponent;
  let fixture: ComponentFixture<DisplayQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ DisplayQuoteComponent ],
      providers: [QuoteServiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
