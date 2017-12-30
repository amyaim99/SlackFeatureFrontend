import { TestBed, inject } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http, RequestMethod, ConnectionBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { MockQuote} from '../mock_data/mock-quote';
import { QuoteServiceService } from './quote-service.service';

describe('QuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTestingController, MockBackend,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        QuoteServiceService,
      ]
    });
    const service = TestBed.get(QuoteServiceService);
    const  backend = TestBed.get(ConnectionBackend);
});
it('should create service', inject([QuoteServiceService], (service: QuoteServiceService) => {
  expect(service).toBeTruthy();
}));
it('should return quote', inject([QuoteServiceService, MockBackend], (service: QuoteServiceService, backend: MockBackend) => {
  const response = new ResponseOptions({
    body: JSON.stringify(MockQuote)
  });
  const baseResponse = new Response(response);
  backend.connections.subscribe(
    (c: MockConnection) => c.mockRespond(baseResponse)
  );
  return service.getQuote().subscribe( data => {
    expect(data).toEqual(MockQuote);
  });
}));
});
