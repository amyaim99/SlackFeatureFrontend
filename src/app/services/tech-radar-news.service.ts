import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TechRadarNewsService {

  constructor(private http:Http) { }

  getTechRadarNews():Observable<any>{

    return this.http.get('http://localhost:8080/techRadarNews')
    .map(res=>res.json());
  }

}
