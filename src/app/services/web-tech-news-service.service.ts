import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class WebTechNewsServiceService {

  constructor(private http: Http) { }
  getWebTechNews(): Observable<any>{
  return this.http.get("http://localhost:8080/webTechNews")
  .map(res=>res.json());
  }



   }


