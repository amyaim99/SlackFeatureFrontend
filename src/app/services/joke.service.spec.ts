import { TestBed, inject } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import { JokeService } from './joke.service';
import {BaseRequestOptions, Response, ResponseOptions, Http, RequestMethod, ConnectionBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { MockJoke} from '../mock_data/mock-joke';

describe('JokeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTestingController, MockBackend,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        JokeService,
      ]
    });
    const service = TestBed.get(JokeService);
    const  backend = TestBed.get(ConnectionBackend);
});
it('should create service', inject([JokeService], (service: JokeService) => {
  expect(service).toBeTruthy();
}));
it('should return joke', inject([JokeService, MockBackend], (service: JokeService, backend: MockBackend) => {
  const response = new ResponseOptions({
    body: JSON.stringify(MockJoke)
  });
  const baseResponse = new Response(response);
  backend.connections.subscribe(
    (c: MockConnection) => c.mockRespond(baseResponse)
  );
  return service.getJoke().subscribe( data => {
    expect(data).toEqual(MockJoke);
  });
}));
});
