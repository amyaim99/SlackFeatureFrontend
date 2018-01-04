import { TestBed, inject } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http, RequestMethod, ConnectionBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { MockQuote} from '../mock_data/mock-quote';
import { QuoteServiceService } from './quote-service.service';
import { WebTechNewsServiceService } from './web-tech-news-service.service';

describe('WebTechNewsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTestingController, MockBackend,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        WebTechNewsServiceService,
      ]
    });

  it('should be created', inject([WebTechNewsServiceService], (service: WebTechNewsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
