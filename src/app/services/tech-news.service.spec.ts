import { TestBed, inject } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http, RequestMethod, ConnectionBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { MockNews} from '../mock_data/mock-news';
import { TechNewsService } from './tech-news.service';

describe('TechNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTestingController, MockBackend,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        TechNewsService,
      ]
    });
    const service = TestBed.get(TechNewsService);
    const  backend = TestBed.get(ConnectionBackend);
});
it('should create service', inject([TechNewsService], (service: TechNewsService) => {
  expect(service).toBeTruthy();
}));
it('should return tech news', inject([TechNewsService, MockBackend], (service: TechNewsService, backend: MockBackend) => {
  const response = new ResponseOptions({
    body: JSON.stringify(MockNews)
  });
  const baseResponse = new Response(response);
  backend.connections.subscribe(
    (c: MockConnection) => c.mockRespond(baseResponse)
  );
  return service.getTechNews().subscribe( data => {
    expect(data).toEqual(MockNews);
  });
}));
});
