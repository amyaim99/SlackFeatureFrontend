import { TestBed, inject } from '@angular/core/testing';
import {HttpTestingController} from '@angular/common/http/testing';
import {BaseRequestOptions, Response, ResponseOptions, Http, RequestMethod, ConnectionBackend, RequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import { MockNews} from '../mock_data/mock-news';
import { TechNewsService } from './tech-news.service';
import { TechRadarNewsService } from './tech-radar-news.service';

describe('TechRadarNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpTestingController, MockBackend,
        { provide: ConnectionBackend, useClass: MockBackend },
        { provide: RequestOptions, useClass: BaseRequestOptions },
        Http,
        TechRadarNewsService,
      ]

    });
    const service = TestBed.get(TechRadarNewsService);
    const  backend = TestBed.get(ConnectionBackend);
});


  it('should be created', inject([TechRadarNewsService], (service: TechRadarNewsService) => {
    expect(service).toBeTruthy();
  }));
  it('should return techRadar news', inject([TechRadarNewsService, MockBackend], (service: TechRadarNewsService, backend: MockBackend) => {
    const response = new ResponseOptions({
      body: JSON.stringify(MockNews)
    });
    const baseResponse = new Response(response);
    backend.connections.subscribe(
      (c: MockConnection) => c.mockRespond(baseResponse)
    );
    return service.getTechRadarNews().subscribe( data => {
      expect(data).toEqual(MockNews);
    });
  }));
});

