import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class TechNewsService {

  constructor(private http: Http) { }
  getTechNews(): Observable<any>{
  return this.http.get("http://localhost:8080/techNews")
  .map(res=>res.json());
  }

}
