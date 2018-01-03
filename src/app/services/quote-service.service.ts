import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuoteServiceService {

  constructor(private http: Http) {  }
  
    getQuote(): Observable<any>{
  
      return this.http.get('http://localhost:8080/famousQuote')
      .map(res=>res.json());
    }

}
