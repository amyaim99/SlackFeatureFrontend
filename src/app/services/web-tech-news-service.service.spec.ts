import { TestBed, inject } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http, RequestMethod, ConnectionBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { MockQuote} from '../mock_data/mock-quote';
import { QuoteServiceService } from './quote-service.service';
import { WebTechNewsServiceService } from './web-tech-news-service.service';
import { MockNews } from '../mock_data/mock-news';

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
    const service = TestBed.get(WebTechNewsServiceService);
    const  backend = TestBed.get(ConnectionBackend);
});

  it('should be created', inject([WebTechNewsServiceService], (service: WebTechNewsServiceService) => {
    expect(service).toBeTruthy();
  }));
  it('should return WebTech news', inject([WebTechNewsServiceService, MockBackend], 
    (service: WebTechNewsServiceService, backend: MockBackend) => {
    const response = new ResponseOptions({
      body: JSON.stringify(MockNews)
    });
    const baseResponse = new Response(response);
    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(baseResponse)
    );
    return service.getWebTechNews().subscribe( data => {
      expect(data).toEqual(MockNews);
    });
  }));
});

