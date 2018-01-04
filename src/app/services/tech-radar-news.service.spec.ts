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


  it('should be created', inject([TechRadarNewsService], (service: TechRadarNewsService) => {
    expect(service).toBeTruthy();
  }));
});
